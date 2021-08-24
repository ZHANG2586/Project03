//圆形
import React, { useState } from 'react'
import styled from 'styled-components'
import 'antd/dist/antd.css';

export default function  Redius(props) {
    const Red=styled.span`
        width:16px;
        height:16px;
        display:inline-block;
        margin-left:8px;
        cursor:pointer;
        border-radius:16px;
        background-color:${props.color}
    `
    const over=(e)=>{
        console.log(e.target.className);
        if(document.getElementsByClassName(e.target.className)[0] !== undefined){
            if(document.getElementsByClassName(e.target.className)[0].nextElementSibling !== undefined){
                 console.log(document.getElementsByClassName(e.target.className)[0].nextElementSibling.style.zIndex='10')
            }
        }
    }
    const out=(e)=>{
        if(document.getElementsByClassName(e.target.className)[0] !== undefined){
            if(document.getElementsByClassName(e.target.className)[0].nextElementSibling !== undefined){
                 console.log(document.getElementsByClassName(e.target.className)[0].nextElementSibling.style.zIndex='-1')
            }
        }
    }

    return (
        <>
           <Red  onMouseOver={over} onMouseOut={out}/>
        </>
    );
}