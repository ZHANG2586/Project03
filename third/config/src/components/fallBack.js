import styled from 'styled-components'
import React from 'react'

export default  function fallback() {
    const chart='<';
    const Back=styled.div`
    color : #d9dbdf;
    border:1px solid #d9dbdf;
    :hover{
        color: black;

    };
    :visited{
        color: black;
    }
    display:inline-block;
    cursor:pointer;
    width:30px;
    border-radius:5px;
    height:20px;
    line-height:16px;
    text-align:center;
    `
    return (
     <>
           <Back>
               {chart}
           </Back> 
     </>
    );
}