import React, { useContext,useState } from 'react';
import MoveOverFunction from './moveOver/overFunction';
import MoveOutFunction from './moveOut/outFunction';
import BecameMaxFunction from './adjustWidthheight/BecameMaxFunction';
import deleteFunction01 from './adjustWidthheight/DeleteFunction';
import MinWithHeight from './adjustWidthheight/MinWithHeight';
import BeacomeSmall from './adjustWidthheight/BeacmeSmall';
import {Context} from '../Layout';
import './headStyles.css';
function Header01(props){
    let [state,setState] = useState(0);
    let params = useContext(Context);
    let content =params.myState;
    function name() {
        if(state === 0){//元素进入最大化模式所要进行的操作
            setState(1);
            content.Width = '100%';
            content.Height = '100%';
            content.xPositon=0;
            content.yPositon=0;
            content.canResize = false;
             window.parent.postMessage(content,'http://localhost:3000/')
             BecameMaxFunction(state);//使元素铺满整个界面的函数
             MinWithHeight(state);//在最大化模式下，隐藏最小化图标并使该按钮失效
        }
        else{ //元素退出最大化模式所要进行的操作
            content.Width = 940;
            content.Height = 500;
            content.xPositon=100;
            content.yPositon=100;
            content.canResize = true;
            window.parent.postMessage(content,'http://localhost:3000/')
            BecameMaxFunction(state);//
            MinWithHeight(state);
        }
        MoveOutFunction()
    }
    return (
        <div className="head" onDoubleClick={()=>{name()}}>
            <ul>
                <li className="logo">
                    <span>{/* 关闭界面 */} <button className='public off-view' onMouseOver={MoveOverFunction} onMouseOut={MoveOutFunction} onClick={deleteFunction01}><svg  fill="red"  viewBox="10 10 500 300" strokeWidth="10"  height="15" width="15" xmlns="http://www.w3.org/2000/svg"  ><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144m224 0L144 368"></path></svg></button></span>
                    <span>{/*  界面最小化*/}<button className='public became-small' onMouseOver={MoveOverFunction} onMouseOut={MoveOutFunction} onClick={()=>{BeacomeSmall()}}><svg  fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="11" width="11" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line></svg></button></span>
                    <span>{/* 界面全屏化 */}<button  className="public became-max" onMouseOver={MoveOverFunction} onMouseOut={MoveOutFunction} onClick={name}><svg  fill="none" viewBox="0 0 13 13" width="8" height="8" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2"><path  d="M0 0h12.038v12.038H0z"></path><path  d="M9.26 12.03L.006 2.73v9.3H9.26zM2.735.012l9.3 9.3v-9.3h-9.3z"></path></svg></button></span>
                </li>
                <li className="head_Text">Bear</li>
            </ul>
        </div>
    )
}

export default Header01;