// import React from "react";
// import { useState,useReducer } from "react";
function BecameMaxFunction(params){
    // let rnd = document.getElementsByClassName('react-draggable');
    // let rndArray = Object.values(rnd);
    // let becameMax = document.getElementsByClassName('became-max')[0].firstChild;
    let MaxArray = document.getElementsByClassName('became-max')[0];
    // let headTag = document.getElementsByClassName('head01')[0]
    if(params === 0){
        //headTag.classList.remove('handle');移除操作手柄
        // rndArray[0].style.width = '100%';
        // rndArray[0].style.height = '100%';
        // rndArray[0].style.transform='translateY(0px)';
        // console.log(rndArray[0]);
        // rndArray[0].classList.add('quanping')
        // rndArray[0].classList.remove('judge')
        // MaxArray.removeChild(becameMax); 
        MaxArray.innerHTML = ' <svg viewBox="0 0 19 19" width="10" height="10" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path fill="none" ></path><path d="M18.373 9.23L9.75.606V9.23h8.624zM.6 9.742l8.623 8.624V9.742H.599z"></path></svg>'
        // console.log('全屏模式') d="M0 0h18.972v18.973H0z"
        return ;
       
    }
    // param等于1的情况下
    // 这个回退到页面的初始大小
    // rndArray[0].style =' position: absolute; user-select: auto; width: 936px; height: 500px; display: inline-block; top: 0px; left: 0px; cursor: auto; transform: translate(104px, 76px); max-width: 9.0072e+15px; max-height: 9.0072e+15px; min-width: 400px; min-height: 300px; box-sizing: border-box; flex-shrink: 0;'
    MaxArray.innerHTML = '<svg  fill="none" viewBox="0 0 13 13" width="6.5" height="6.5" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2"><path  ></path><path  d="M9.26 12.03L.006 2.73v9.3H9.26zM2.735.012l9.3 9.3v-9.3h-9.3z"></path></svg>';
    // headTag.classList.add('handle');//添加手柄
    // rndArray[0].classList.add('judge')
}
export default BecameMaxFunction;
