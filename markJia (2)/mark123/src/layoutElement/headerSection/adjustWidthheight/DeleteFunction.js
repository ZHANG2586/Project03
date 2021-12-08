const deleteFunction01 =  function(){
    let rnd = document.getElementsByClassName('react-draggable');
    let rndArray = Object.values(rnd);
    rndArray[0].style.display = 'none'
    // rndArray[0].classList.add("quanping")
}
export default deleteFunction01;