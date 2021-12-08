function OnClickFunction01(){
    let classNameSets = document.getElementsByClassName('weSame');
    let classArray = Object.values(classNameSets);
    classArray[0].classList.remove("gray-600")
    classArray[1].classList.add("gray-600");
    classArray[0].style.backgroundColor ='#fd4848'; 
   classArray[1].style.backgroundColor = 'transparent';

}
export default OnClickFunction01;