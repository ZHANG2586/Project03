import React, {  useReducer, createContext, useEffect} from 'react';
// import {Rnd} from 'react-rnd'
import axios from 'axios'
import './layoutStyles.css';
import Header01  from './headerSection/Header';//头部
import Slider01 from './mainSection/mainContent';//主体内容
import reducer from '../controlState/Reducer';//处理函数
import initialState from '../controlState/store';//引入仓库中的数据
import {useCookies} from 'react-cookie'
export let Context = createContext(null);

function Layout01(props){
    const [ cookies ] = useCookies ( 'username') ;
    let token= cookies.username  
    let　param =  window.location.search
    let data = {username:param.split('=')[1]} 
    const [myState,dispatch] = useReducer(reducer,initialState);
    useEffect(()=>{
        axios.post('http://localhost:3040/getData',data,{ headers: {token:token }})
        .then(resdata=>{
            let data = resdata.data
            if(data.code === -1){
                alert(data.msg)
            }
            else if(data.code === -2){
                alert(data.msg)
            }
            else if(data.code === 1){
                dispatch({type:'dataFromMondb',params:data.data})
            }
        })
        .catch(err=>{
            console.log(err);
        })
        },[])
    return (
        <>
            <div id="allSection" >
                {/* <div className='head01 handle' >
                    <Context.Provider value={{myState:myState,dispatch:dispatch}}>
                        <Header01 myState={{myState:myState,dispatch:dispatch}} /></Context.Provider> 
                </div> */}
                <div className="main_section" style={{top:0}} >{/* 这个是下边的部分 */}
                <Context.Provider value={{myState:myState,dispatch:dispatch}}>
                    <Slider01  /></Context.Provider> 
                </div>
            </div>
     </>
    )
}
export default Layout01;