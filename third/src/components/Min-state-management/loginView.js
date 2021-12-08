/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { UserContext } from './userProvder';
import axios from 'axios'
import Register from './register'
export default function loginView(props){
    const {userInfo,userDispatch}=new useContext(UserContext);
    const ref1=new useRef(null);
    const ref2=useRef(null);
    const ref3=useRef(null);
    const ref4=useRef();
    let Span=styled.span`
        color:#b4aeae;
        display:inline-block;
        float:right;
        height:100%;
        line-height:100%;
        margin-right:20px;
        cursor:pointer;
        font-size:20px;
        :hover{
            color:black;
        }
        ::after{
            context:'';
            height:0;
            display:block;
            clear:both;
            visibility:hidden;
        }
    `
    const Button=styled.button`
           color:white;
           width:100%;
           height:20%;
           font-size:120%;
           line-height:20%;
           cursor:pointer;
           background-color:#00965E;
           :hover{
               background-color:#007046;
           }
           border:0px;
    `
    const Span2=styled.span`
         color:#00965e;
         float:right;
         height:100%;
         padding:3% 0;
         line-height:100%;
         cursor:pointer;
         :hover{
             color:#004a2e;
         }
    `
    useEffect(()=>{
         ref1.current.style.zIndex=userInfo.zIndex;
    },[userInfo.zIndex])

    const click=(e)=>{
        e.preventDefault();
        let data={
            username:ref2.current.value,
            password:ref3.current.value
        }
        if(data.username === ''|| data.password === ''){
            alert('用户名或密码不能为空!');
            return;
        }
        fetch('/api/user/account',{
            method:'POST',
            body:JSON.stringify(data),
            headers:new Headers({
                'Content-Type':'application/json'
            })
        })
        .then((res)=>{            
             res.json().then((res2)=>{
                 console.log(res2);
                 if(res2.status === 'success'){
                       userDispatch({src:'https://avatars.githubusercontent.com/u/'+res2.headportrait+'?s=60&v=4'});
                       ref1.current.style.zIndex=0;    
                 }else{
                     alert('不存在该用户！');
                 }
             })
        }).catch((err)=>{
            console.log(err);
        })
        
                             
    
    }
    const forget=async (e)=>{
         e.preventDefault();
         userDispatch({regZindex:'0'});
        //  axios.defaults.baseURL='/api'
        //  axios.post('/user/forget',{})
        // .then((res)=>{
        //    console.log(res);
        // })
        // fetch('/api/user/forget',{method:'POST'})
        // .then((res)=>{
        //     res.json().then((res1)=>{
        //          console.log(res1);
        //     })
        // })
    }
    const close=(e)=>{
           e.preventDefault();
           console.log('close');
           userDispatch({zIndex:'0'});
    }
    return(<>
         <div ref={ref1} style={{zIndex:'0',position:'absolute',width:'100%',height:'100%',backgroundColor:'rgba(135,135,139,0.8)'}}>
              <div style={{width:'50%',height:'50%',top:'0',bottom:'0',left:'0',right:'0',margin:'auto',position:'absolute',backgroundColor:'white'}}>
                   <p style={{margin:0,color:'#212529',height:'20%',lineHeight:'20%'}}>
                        <span style={{height:'100%',lineHeight:'100%',float:'left',marginLeft:'20px',fontSize:'20px'}}>注册登录</span>
                        <Span onClick={close}>x</Span>
                   </p>
                   <div style={{width:'60%',height:'80%',position:'relative',left:'0',right:'0',margin:'auto'}}>
                   <input ref={ref2} type='text'style={{width:'100%',height:'20%'}} placeholder='用户名或邮箱'></input><br></br>
                   <input ref={ref3} type='password'style={{width:'100%',height:'20%',marginTop:'1%'}} placeholder='密码'></input>
                   <p style={{height:'10%'}}><Span2 onClick={forget}>没有账户?</Span2></p>
                   <Button onClick={click}>登录</Button>
                   <p style={{textAlign:'center',margin:0,marginTop:'1%'}}>继续即同意<span style={{color:'#00965E'}}>《服务协议》</span>和<span style={{color:'#00965E'}}>《隐私政策》</span></p>
                   </div>
              </div>
              <Register/>
         </div>
    </>);
}

