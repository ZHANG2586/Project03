import styled from 'styled-components'
import React, { useMemo } from 'react'
import LazyLoad from 'react-lazyload'



export default function  Li(props) {

    // const [once]=new useMemo(()=>true)
    const Li=styled.li`
         list-style:none;
         width:75px;
         height:112px;
         display:inline-block;
         z-index:1000;
         cursor:pointer;
         display:flex;
         flex-wrap:wrap;
         margin:0 9px;
    `
    const P=styled.span`
           line-height:1;
           width:100%;
           height:20%;
           font-size:1.1rem;
           text-align:center;
           ::before{
               content:'${props.name}'
           }
    `
    const to=()=>{
        window.open(props.url);
    }
    return (
        <>
             <Li onClick={to}> 
                <LazyLoad  height={300}  once={()=>true} offset={300} >
                    <img style={{width:'100%',height:'68%',borderRadius:'5px',backgroundColor:'white'}} 
                     alt={props.name} src={props.src}>
                    </img>   
                 </LazyLoad>
                 <P></P>
             </Li>
        </>
    );
}