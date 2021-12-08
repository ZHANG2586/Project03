import styled from 'styled-components'
import React, { Fragment, useState } from 'react'

export default function  forward() {
    const [chart,setChart]= new useState('>');
    const Upward=styled.div`
         width:30px;
         height:20px;
         border-radius:5px;
         color:#d9dbdf;
         display:inline-block;
         border:1px solid #d9dbdf;
         :hover{
             color: black;
         }
         line-height:16px;
         text-align:center;
         cursor:pointer;
    `

  return(
      <Fragment>
                <Upward>{chart}</Upward>
      </Fragment>
  );


}