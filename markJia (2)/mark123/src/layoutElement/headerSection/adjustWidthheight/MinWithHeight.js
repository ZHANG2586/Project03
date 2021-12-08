// 这个函数的作用是控制最小化按钮图标的显现和消失，还有就是最小化按钮是否禁用
const MinWithHeight = (params)=>{
    let button02 = document.getElementsByClassName('became-small')[0];
    if(params === 0){
        button02.disabled = "disabled";
        button02.firstChild.style.visibility  = 'hidden';}
    else{ 
        button02.disabled = "";
        button02.firstChild.style.visibility = 'visible'; }
}
export default MinWithHeight;