/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext,useMemo, useState,useRef, useEffect} from 'react'
import {UserContext} from './userProvder'

let register=()=>{
    const {userInfo,userDispatch}=new useContext(UserContext);
    // const [zindex,setZindex]=useState(-1);
    // const reg=useMemo(()=>{ if(userInfo.regZindex !== undefined){console.log('ahahahahah');setZindex('0')};console.log(typeof zindex);return zindex;},[userInfo.regZindex]);
    const [username,setUsername]=new useState('');
    const [password,setPassword]=new useState('');
    const ref1=useRef('');
    const ref2=new useRef('');
    const ref3=useRef('');
    // console.log(reg);
    useEffect(()=>{
         if(userInfo.regZindex !== undefined){
             console.log('hahah');
             console.log(ref3.current);
             ref3.current.style.zIndex='0';

             userInfo.regZindex = undefined;
         }
    },[userInfo.regZindex])

    const click=(e)=>{
          e.preventDefault();
          let data={
            username:ref1.current.value,
            password:ref2.current.value
          }
          if(data.username === '' || data.password === ''){
              alert('账户或密码不能为空!');
              return;
          }
          fetch('/api/user/forget',{method:'POST',
            body:JSON.stringify(data),
            headers:new Headers({
                'Content-Type':'application/json'
            })
        })
          .then((res)=>{
               res.json().then((res2)=>{
                   console.log(res2);
                   console.log(res2.headportrait);
                   if(res2.headportrait !== undefined){
                        userDispatch({zIndex:'0',src:'https://avatars.githubusercontent.com/u/'+res2.headportrait+'?s=60&v=4'});
                        ref3.current.style.zIndex='-1';
                   }
               })
          }).catch((err)=>{
              console.log(err);
          })
    }
    return (
        <>
             <div ref={ref3} style={{zIndex:'-1',width:'50%',height:'50%',top:'0',bottom:'0',left:'0',right:'0',margin:'auto',position:'absolute',backgroundColor:'white'}}>
                 <p style={{margin:'0',fontSize:'28px',width:'100%',height:'30px',textAlign:'center',lineHeight:'30px'}}>注册</p>
                 <div style={{width:'100%',display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
                    <input className='username' ref={ref1} style={{width:'60%',height:'15%',margin:'2% 0'}} placeholder='请输入注册账号' type="text"></input>
                    <input className='password' ref={ref2}   style={{width:'60%',height:'15%',margin:'0 0 2% 0'}} placeholder='请输入注册密码' type="password"></input>
                 </div>
                 <div style={{width:"100%",height:'15%',display:'flex',justifyContent:'center',margin:'2% 0'}}>
                 <button onClick={click} style={{cursor:'pointer',width:'20%',height:'100%',margin:'auto'}}>确认</button>
                 </div>
             </div>
        </>
    );
}


export default React.memo(register);