function OnClickFunction(param){
    let liSets = document.getElementsByClassName('endSove01');
    let liSetsArray = Object.values(liSets);
    for(let i=0;i<liSetsArray.length;i++){
        if(i === param)
            liSetsArray[i].classList.add('borderColor')
        else{
            liSetsArray[i].classList.remove('borderColor')
        }
    }
   
}
export default OnClickFunction;