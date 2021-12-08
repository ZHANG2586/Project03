/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */
import styled from 'styled-components'
import React, { useEffect } from 'react'
import img1 from '../images/01.png'
import UserLogin from './Min-state-management/userLogin'

export default function Ul(props) {
   
   useEffect(()=>{   
        console.log(document.getElementsByTagName('body')[0])
        document.getElementsByTagName('body')[0].style.overflow='hidden';
      }
      ,[])

 const UL=styled.ul`
       width: 472px;
       height: 65px;
       margin: auto;
       display: flex;
       background-color: #e5e7eb;
       line-height: 65px;
       position: absolute;
       bottom: 0;
       left: 0;
       right: 0;
       margin: auto;
       z-index:1;
     `
     const LI=styled.li`
              margin-left: 8px;
              position:relative;
     `
     const to1=(e)=>{
        window.open('/home','baidulala','width=1024,height=300,top=230,left=500%',);    
   }

  
   let initx1,inity1,disW1,disH1,down1=false;
   const mousedown1=(e)=>{
         if(document.getElementById('wicket').style.width==='100%' && document.getElementById('wicket').style.height ==='100%'){
              return;
         }
         if(down1 === false){
              down1=true;
              initx1=e.clientX;
              inity1=e.clientY;
              disW1=document.getElementById('wicket').offsetWidth;
              disH1=document.getElementById('wicket').offsetHeight;
         }
         
   }
   const mousemove1=(e)=>{
         if(down1 === true){
            let W=e.clientX-initx1+disW1;
            let H=e.clientY-inity1+disH1;
            if(H < 300){
               H=300;
            }
            if(W <300){
               W=300;
            }
            let dom=document.getElementById('wicket');
            dom.style.height=H+'px';
            dom.style.width=W+'px';   
         }
   }
   const mouseup1=(e)=>{
         down1=false;
   }  
     return (
        <>
        
        <div id='wicket'  style={{overflow:'hidden',
        position:'absolute',width:'100%',height:'100%',zIndex:'0'}}>
            
             <iframe  id='content' onMouseDown={mousedown1} onMouseMove={mousemove1} onMouseUp={mouseup1} 
              src='/home' scrolling='no'  style={{cursor:'row-resize',border:'0px solid  transparent'
             ,width:'100%',height:'100%',
             }}>
             </iframe>
         </div>
         {/* <UL id='first'>
                         
                          <LI >
                                   <img style={{width:'50px',height:'50px',borderRadius:'25px'}} src={img1}></img>
                          </LI>
                          <LI ><a href='/home'><img style={{width:'50px',height:'50px',borderRadius:'25px'}} src={img1}>
                             </img></a>
                          
                            <div id='condition1' style={{zIndex:'-1',position:'absolute',borderRadius:'2px',bottom:'0',left:'0',
                            right:'0',margin:'auto',width:'4px',height:'4px',display:'block',backgroundColor:'black'}}></div>

                          </LI>
                          <LI ><a href='/home'><img style={{width:'50px',height:'50px',borderRadius:'25px'}} src={img1}></img></a></LI>
                          <LI ><a href='/home'><img style={{width:'50px',height:'50px',borderRadius:'25px'}} src={img1}></img></a></LI>
                          <LI ><a href='/home'><img style={{width:'50px',height:'50px',borderRadius:'25px'}} src={img1}></img></a></LI>
                          <LI ><a href='/home'><img style={{width:'50px',height:'50px',borderRadius:'25px'}} src={img1}></img></a></LI>
                          <LI ><a href='/home'><img style={{width:'50px',height:'50px',borderRadius:'25px'}} src={img1}></img></a></LI>
                          <LI ><a href='/home'><img style={{width:'50px',height:'50px',borderRadius:'25px'}} src={img1}></img></a></LI>
         </UL> */}

        </>
     );


}