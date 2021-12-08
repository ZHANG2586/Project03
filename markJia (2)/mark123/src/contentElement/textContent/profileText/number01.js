import {React,useContext, useEffect} from 'react';
import './number01Style.css'
import { Context } from '../../../layoutElement/Layout';

function Number01(props){
   console.log(props)
   let pathRoute = props.location.pathname;
   console.log(pathRoute)
   let reg = /^\/Profile/;
   let judge = reg.test(pathRoute)
   let params = useContext(Context);
   // let {dispatch} = params;
   let {text,jectText} = params.myState;
   console.log( props.location.query)
   useEffect(()=>{
      let content = document.getElementsByClassName('content')[0];
      if(judge)content.innerHTML = text[props.location.query];
      else content.innerHTML = jectText[props.location.query];
      // console.log( text);
   })
   function clickEvents(params){
      console.log(reg.test(pathRoute))
      if(reg.test(pathRoute)){
               props.history.push({pathname:"/Profile/undefined",query:{Sno:props.location.query,text:text[props.location.query]+'',test:0}})
      }
      else{
         props.history.push({pathname:"/Project/undefined",query:{Sno:props.location.query,text:jectText[props.location.query]+'',test:1}})
      }
   }
   return ( 
       <>
        <div className="textEditor"><button onClick={clickEvents}>编辑内容</button></div>
        <div className="contentFather">
           <div className="content">
              
                {/* <h1>About Me</h1>
                <h2>Biography</h2>
                <p>Hey there! I'm <del>a dragon lost in human world</del> now an incoming computer science master student at <a href="https://www.bu.edu/" target="_blank" rel="noreferrer">Boston University</a> and a research assistant at Peking University. Before that, I got my bachelor's degree in <a href="http://sse.tongji.edu.cn/" target="_blank" rel="noreferrer">Software Engineering</a> at <a href="https://www.tongji.edu.cn/" target="_blank" rel="noreferrer">Tongji University</a>.</p>
                <p>I'm trying to find a balance between research and engineering.</p>
                <p>Research-wise, I'm currently mainly working on topics related to exploring the capability of machines to develop intelligent behavior upon what they have learned, like meta-learning and continual learning.</p>
                <p>I used to work on natural language processing (machine translation and language generation), image captioning and image aesthetic assessment.</p>
                <p>I'm also learning to build machine learning softwares and systems. I'm also learning TypeScript, React, Electron and Golang.</p>
                <h2>Contact</h2>
                <p>Contact me by:</p>
                <ul>
                <li>Email: <a href="mailto:renovamenzxh@gmail.com" target="_blank" rel="noreferrer">renovamenzxh@gmail.com</a> / <a href="mailto:xiaohan.zou@foxmail.com" target="_blank" rel="noreferrer">xiaohan.zou@foxmail.com</a></li>
                <li>Github: <a href="https://github.com/Renovamen" target="_blank" rel="noreferrer">@Renovamen</a></li>
                <li><a href="https://www.linkedin.com/in/xiaohan-zou" target="_blank" rel="noreferrer">Linkedin</a></li>
                <li>知乎: <a href="https://www.zhihu.com/people/chao-neng-gui-su" target="_blank" rel="noreferrer">@Renovamen</a></li>
                <li>Blog: <a href="https://zxh.io" target="_blank" rel="noreferrer">zxh.io</a></li>
                </ul>
                <h2>Résumé</h2>
                <p>My résumé can be found here: <a href="https://zxh.io/files/cv/brief/en.pdf" target="_blank" rel="noreferrer">English</a> / <a href="https://zxh.io/files/cv/brief/cn.pdf" target="_blank" rel="noreferrer">中文</a>.</p>*/}
               </div> 
        </div>
       </>
  );
}
export default Number01;