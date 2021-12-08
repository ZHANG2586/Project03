import React from 'react'
import styled from 'styled-components'
import {ExpandAltOutlined} from '@ant-design/icons';
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
    const change1=(e)=>{
        if(document.getElementsByClassName(e.target.className)[0] !== undefined){
            if(document.getElementsByClassName(e.target.className)[0].nextElementSibling !== undefined){
                 console.log(document.getElementsByClassName(e.target.className)[0].nextElementSibling.style.zIndex='10')
            }
        }
    }
    const change2=(e)=>{
        if(document.getElementsByClassName(e.target.className)[0] !== undefined){
            if(document.getElementsByClassName(e.target.className)[0].nextElementSibling !== undefined){
                 console.log(document.getElementsByClassName(e.target.className)[0].nextElementSibling.style.zIndex='-1')
            }
        }
    }
    const click2=(e)=>{
        console.log('内部');
        

    }

    return (
        <>
           <Red onClick={click2} onMouseOver={change1} onMouseOut={change2}/>
        </>
    );
}