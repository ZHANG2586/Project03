// import React from 'react';
// 离开左上角的圆圈
function MoveOutFunction(){
    let icon = document.getElementsByTagName('svg');
    let path = document.getElementsByTagName('path')
    icon = Object.values(icon);
    path = Object.values(path);
    for(let i=0;i<=2;i++){
        icon[i].style.stroke= 'transparent';
      } 
    path[2].style.fill = 'transparent' 
}
export default MoveOutFunction;