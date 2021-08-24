/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Div from '../components/Div.jsx'
import Span from '../components/span'
import 'antd/dist/antd.css'
import {SafetyCertificateOutlined} from '@ant-design/icons'
import axios from 'axios'
import cookie from 'cookie-javascript'

let inlay=()=>{
    const ref1=new useRef(null);
    const [src1]=new useState(['https://zxh.io/img/avatar.jpg','https://portfolio.zxh.io/img/sites/github.svg','https://portfolio.zxh.io/img/sites/linkedin.svg','https://portfolio.zxh.io/img/sites/zhihu.jpeg','https://portfolio.zxh.io/img/sites/facebook.svg','https://portfolio.zxh.io/img/sites/gmail.svg']);
    const [url1]=new useState(['https://zhuanlan.zhihu.com/p/388404416','https://github.com/Renovamen','https://www.linkedin.com/in/xiaohan-zou','https://www.zhihu.com/people/chao-neng-gui-su','https://www.facebook.com/renovamen.zou','https://zhuanlan.zhihu.com/p/388404416']);
    const [judge,setJudge]=new useState('');
    const name1=new useMemo(()=>['Blog','Github','Linkedin','知乎','Facebook','Email']);
    const src2=new useMemo(()=>{
        if(judge instanceof Array){
            let array=judge;
            for(let i=0;i<14;++i){
                array.push('https://portfolio.zxh.io/img/sites/linkedin.svg');
            }
            return array;
        }
        return [];
    },[judge])
    const url2=new useMemo(()=>['https://zhuanlan.zhihu.com/p/388404416','https://zhuanlan.zhihu.com/p/388404416','https://github.com/','https://github.com/','https://github.com/','https://github.com/','https://github.com/','https://github.com/','https://github.com/','https://github.com/']);
    const name2=new useMemo(()=>['gihub','知乎','Bilibili','Pinterest','Dribbble','arXiv','Gmail','LeetCode','V2EX','Reddit','Hacker News','Astral','Gitee','AI Deadlines','Nazo','SVGOMG','Vue Icons!','Tiny PNG']);
    useEffect(()=>{
        document.getElementsByTagName('body')[0].style.overflowX='hidden';
        document.getElementsByTagName('body')[0].style.backgroundColor='#e5e7eb';
    },[])
    

    useEffect(()=>{
        axios.get('/data.json')
        .then((res)=>{
            console.log(res);
            console.log(res.data[2]);
            setJudge(res.data[2].src2);
        }).catch((err)=>{
            console.log(err);
        })

    }
    ,[])
    return (
        <>
            <div style={{display:'flex',position:'absolute',justifyContent:'center',top:'28px',width:'100%'}}>
                  <Span top='60px' text='SNS Links'/>
                  <div style={{display:'flex',justifyContent:'center',position:'absolute',top:'95px'}}>
                        <Div src={src1} url={url1} name={name1} keys='first'/>
                  </div>
                  
            </div> 
            <div style={{position:'absolute',top:'118px',width:'100%',display:'flex',justifyContent:'center'}}>
                    <Span top='126px' text='Frequently Visited'/>
                    <div style={{display:'flex',justifyContent:'center',position:'absolute',top:'166px'}}>
                        <Div src={src2} url={url2} name={name2} keys ='second'/>
                    </div>
            </div>
            <div style={{position:'absolute',top:'350px',width:'100%',display:'flex',justifyContent:'center'}}>
                   <Span  top='170px' text='Privacy Report'/>
                   <div ref={ref1} style={{boxShadow:'4px -2px 5px -3px',width:'90%',height:'60px',lineHeight:'64px',textAlign:'center',backgroundColor:'white',borderRadius:'10px',position:'absolute',top:'216px'}}>
                       <p style={{width:'60px',position:'absolute',left:'3%',fontSize:'x-large'}}><span style={{position:'absolute',left:'0'}}><SafetyCertificateOutlined/></span><span style={{position:'absolute',right:'0'}}>44</span></p>
                       <span style={{fontSize:'large'}}>In the last seven days, Safari has prevent 44 tracker from profiling you</span>
                   </div>
            </div>
           
        </>
    );
}
export default inlay=React.memo(inlay);
