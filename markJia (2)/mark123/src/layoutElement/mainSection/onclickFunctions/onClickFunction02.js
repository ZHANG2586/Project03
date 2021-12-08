function OnClickFunction02(){
    let classNameSets = document.getElementsByClassName('weSame');
    let classArray = Object.values(classNameSets);
    console.log(classArray)
    classArray[0].classList.add("gray-600");
    classArray[1].classList.remove("gray-600")
    classArray[0].style.backgroundColor = 'transparent';
    classArray[1].style.backgroundColor = '#fd4848';
}
export default OnClickFunction02;