/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { createContext, useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import 'antd/dist/antd.css'
import {UserOutlined} from '@ant-design/icons';
import styled from 'styled-components';
import {UserContext} from '../Min-state-management/userProvder'
import Cookie from 'cookie-javascript'
import axios from 'axios';

let Name=(props)=>{
     let ref1=new useRef(null);
     let ref2=new useRef(null);
     const [state,setState]=new useState('');
     let {userInfo,userDispatch}=new useContext(UserContext);
     let time;
     const [sr,setSr]= useState('');
     let [judge,setJudge]=useState(false);
     
     useEffect(()=>{
        if(!judge){
       let data=Cookie.get('username');
       let secret=Cookie.get('secret');
       if(secret === 'undefined'){
               return false;
       }
       if(data !== ''){
          let data2={token:data,secret:secret};
        fetch('http://localhost:3040/seek',{method:'POST',
        body:JSON.stringify(data2),
        headers:new Headers({
                'Content-Type':'application/x-www-form-urlencoded'
        })
        }).then((res)=>{
             res.json().then((res2)=>{
                     setSr('https://avatars.githubusercontent.com/u/'+res2.headportrait+'?s=60&v=4');
                     ref1.current.style.zIndex='-1';
             })
        }).catch((err)=>{
                console.log(err);
        })
        
       }
      }
     },[Cookie.get('secret')])

     useEffect(()=>{
       if(userInfo.src !== undefined){
              setSr(userInfo.src);
        ref1.current.style.zIndex='-1';
       }
     }
     ,[userInfo.src])
     useEffect(()=>{
             return ()=>{
                     clearTimeout(time);
             };
     })
     const click1=(e)=>{
             e.preventDefault();
             userDispatch({zIndex:1001});              
     } 

     const click2=(e)=>{
           e.preventDefault();
           setState('click');
           ref2.current.style.display='block'; 
     }
     const out1=()=>{
           time=setTimeout(() => {
                 if(state === 'click'){
                         ref2.current.style.display='none';
                 }  
           },500);
     }
     const over=(e)=>{
           e.preventDefault();
           setState('see')
           ref2.current.style.display='block'; 
     }
     
     const out=(e)=>{
        e.preventDefault();
        ref2.current.style.display='none'; 
      }
   
     const Li=styled.li`
           list-style:none;
           width:80px;
           height:30px;
           background:#f8f8f8;
           line-height:30px;
           :hover{
               background-color:red;
               color:white;
           }
       `
     const del=()=>{
             ref1.current.style.zIndex=1001;
             setJudge(true);
             
     }
     
     return (
          <>
             
            <div  style={{top:'16px',zIndex:'1000',position:'absolute',right:'12%',cursor:'pointer',width:'60px',height:"60px"}}>
                <img alt='已登录'  src={sr}
                onMouseDown={click2}  onMouseOut={out1} style={{backgroundColor:'white',position:'absolute',width:'60px',height:'60px',borderRadius:'50%'}}>
                </img>
                <span ref={ref1} onClick={click1} style={{zIndex:'1001',width:'60px',height:'65px',lineHeight:'65px',
                textAlign:'center',backgroundColor:'white',left:'0px',right:'0',top:'0',bottom:'0',margin:'auto',
                position:'absolute'}}>
                   <UserOutlined  style={{color:'#00C13C'}}/>登录</span>
                <ul onMouseOver={over} onMouseOut={out} ref={ref2} style={{ display:'none',top:'85px',padding:'0',margin:'0',textAlign:'center',position:'absolute',backgroundColor:'white'}}>
                        <li style={{cursor:'auto',top:'-23px',backgroundColor:'transparent',listStyle:'none',position:'absolute',height:'23px',width:'100%'}}></li>
                        <li style={{cursor:'auto',listStyle:'none',position:'absolute',width:'0px',height:'0px',border:'10px solid',top:'-20px',
                borderColor:'transparent transparent #f8f8f8 transparent'}}></li>
                        <Li>信息</Li>
                        <Li>设置</Li>
                        <Li onClick={del}>退出</Li>
                </ul>
            </div>
            
          </>
      );
}

Name=React.memo(Name);
export default Name;