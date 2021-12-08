// import React from 'react';
// 处于左上角的圆圈
function MoveOverFunction(){
    let icon = document.getElementsByTagName('svg')
    let path = document.getElementsByTagName('path')
    icon = Object.values(icon);
    path = Object.values(path);
    for(let i=0;i<=2;i++){
      icon[i].style.stroke= 'black';
    }    
    path[2].style.fill = 'black' 
    console.log("在上边");
}
export default MoveOverFunction;