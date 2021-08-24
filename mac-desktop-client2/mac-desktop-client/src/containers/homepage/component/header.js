/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useReducer, useState } from 'react'
import 'antd/dist/antd.css';
import {MinusOutlined,CloseOutlined,ExpandAltOutlined,PicRightOutlined,SecurityScanOutlined,UploadOutlined,CopyOutlined} from '@ant-design/icons'
import Redius from './redius'
import Cookies from 'js-cookie'

function  header(params) {

    let mousedown=false;
    let initx,inity;
   
    const [db,setDb]=useState(1);
    const [state,dispatch]=new useReducer((state1,action)=>{
        switch(action.data){
            case 'true':
                 return {...action};
            default:
                 return {data:'false'};  
        }
    },{data:'false'});
    const mouseDown=(e)=>{
        if(mousedown === false){
            mousedown=true;
            initx=e.clientX;
            inity=e.clientY;
       }
    }
    const mouseMove=(e)=>{
        if(mousedown === true){
            let nowx=e.clientX;
            let nowy=e.clientY;
            let disX=nowx-initx;
            let disY=nowy-inity;
            let dom=e.target.parentElement;
            if(dom === null){
                return false;
            }
           
            if(dom.offsetTop < 0){
                   dom.style.top='0px';
                   dom.style.left=dom.offsetLeft+disX;
                   return false;
            }
            if(dom.offsetTop > window.document.body.clientHeight-100){
                dom.style.top=window.document.body.clientHeight-100+'px';
                dom.style.left=dom.offsetLeft+disX;
                return false;
            }
            if(dom.offsetLeft < -400 ){
                dom.style.left='-400px';
                dom.style.top = dom.offsetTop+disY;
                return false;
            }
            if(dom.offsetLeft > window.document.body.clientWidth-400){   
                 dom.style.left=window.document.body.clientWidth-400+'px';
                 dom.style.top = dom.offsetTop+disY;
                 return false;
            }
            dom.style.left=dom.offsetLeft+disX+'px';
            dom.style.top=dom.offsetTop+disY+'px';
      }
    }
    const mouseUp=(e)=>{
        mousedown=false;   
    }
    const click2=(e)=>{
        console.log(e.target.parentElement.parentElement.parentElement.parentElement.className);
        if(e.target.parentElement.parentElement.parentElement.parentElement.className === 'rnd2 react-draggable'){
            window.document.getElementsByClassName('rnd2 react-draggable')[0].style.zIndex=-2;
            return false;
        }
        window.document.getElementsByClassName('rnd')[0].style.zIndex='-10';       
        window.document.getElementsByClassName('willchange')[2].name='close';
        window.document.getElementsByClassName('anticon anticon-close icon1')[0].style.zIndex='-1';
        e.stopPropagation();
    }
    const click3=(e)=>{
        window.document.getElementsByClassName('rnd')[0].style.zIndex='-10';
        window.document.getElementsByClassName('willchange')[2].name='narrow';
        window.document.getElementsByClassName('anticon anticon-minus icon2')[0].style.zIndex=-1;
        return false;
    }
    const click4=(e)=>{
       
     if(state.data === 'false'){
        window.document.getElementsByClassName('rnd')[0].style.top='0';
        window.document.getElementsByClassName('rnd')[0].style.left='0';
        window.document.getElementsByClassName('rnd')[0].style.width='100%';
        window.document.getElementsByClassName('rnd')[0].style.height='100%';
        window.document.getElementsByClassName('rnd')[0].style.borderRadius='0';
        dispatch({data:'true'});
        window.document.getElementsByClassName('bottom')[0].style.zIndex='-1';
      }else{
        window.document.getElementsByClassName('rnd')[0].style.top='100px';
        window.document.getElementsByClassName('rnd')[0].style.left='100px';
        window.document.getElementsByClassName('rnd')[0].style.width='940px';
        window.document.getElementsByClassName('rnd')[0].style.height='500px'; 
        window.document.getElementsByClassName('rnd')[0].style.borderRadius='18px';
        dispatch({data:'false'});
        window.document.getElementsByClassName('bottom')[0].style.zIndex='10';
      }
      window.document.getElementsByClassName('anticon anticon-expand-alt icon3')[0].style.zIndex='-1';
      return false;
    }
    const dbclick=(e)=>{
        if(db === 1){
             setDb(2);
             e.target.parentElement.style.top='0';
             e.target.parentElement.style.left='0';  
             e.target.parentElement.style.height='100%';
             e.target.parentElement.style.width='100%';
        }else{
            setDb(1);
            console.log(e.target.parentElement);
            e.target.parentElement.style.top='100px';
            e.target.parentElement.style.left='100px';
            e.target.parentElement.style.width='940px';
            e.target.parentElement.style.height='500px';
        }              
    }

    return (
        <>
           <div id='hh'  onMouseDown={mouseDown} onMouseMove={mouseMove} onMouseUp={mouseUp} onDoubleClick={dbclick} style={{cursor:'move',width:'100%',height:'20px',backgroundColor:'#f6f6f6',border:'1px solid ref',lineHeight:'20px'}}>
               <div  onClick={click2} className='close' style={{position:'relative',top:'1px',zIndex:'2',cursor:'pointer',display:'inline-block'}}>
                    <Redius className='icon1' color='#EF4444'/>
                    <CloseOutlined   className='icon1' style={{cursor:'pointer',zIndex:'-1',width:'0px',position:'relative',left:'-14.8px',top:'-2px'}}/>
                </div>
                <div  onClick={click3} className='narrow' style={{position:'relative',top:'1px',zIndex:'2',cursor:'pointer',display:'inline-block'}}>
                      <Redius color='#F59E0B'/>
                       <MinusOutlined  className='icon2' style={{cursor:'pointer',zIndex:'-1',width:'0px',position:'relative',left:'-14.8px',top:'-2px'}}/>
                </div>
                <div  onClick={click4} className='zoom' style={{position:'relative',top:'1px',zIndex:'2',cursor:'pointer',display:'inline-block'}}>
                        <Redius color='#10B981'/>
                        <ExpandAltOutlined  className='icon3' style={{cursor:'pointer',zIndex:'-1',width:'0px',position:'relative',left:'-14.8px',top:'-2px'}}/>
                </div>
          </div>
        </>
    );
}
export default header;