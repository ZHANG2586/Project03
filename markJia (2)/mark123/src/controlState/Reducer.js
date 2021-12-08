
const reducer = (state,action)=>{
    // eslint-disable-next-line 
    switch(action.type){
        case 'dududula':return state;
        case 'Resize':return{...state,xPositon:action.params.x,yPositon:action.params.y}
        case 'Drag':return{...state,xPositon:action.params.x,yPositon:action.params.y}
        case 'ResizeStop':return{...state,Width:action.params.width,Height:action.params.height}
        case 'maxMod':return{...state,Width:action.params.width,Height:action.params.height,xPositon:action.params.x,yPositon:action.params.y,canResize:action.params.Resize}
        case 'naomal':return{...state,Width:936,Height:500,xPositon:100,yPositon:100,canResize:true}
        // case 'maxMod':return{...state,Width:action.params.width,Height:action.params.height,xPositon:action.params.x,yPositon:action.params.y,canResize:action.params.resize}
        case 'Ban-contianer':return {...state,canResize:action.params.Resize}
        // case 'Ban-contianer':return {...state,canResize:action.params.Resize,test:action.params.test}
        case 'content':return {...state,passage:action.params}
        case 'jectContent':return{...state,jectPassage:action.params}
        case 'fileText':return {...state,text:action.params}
        case 'jectText':return {...state,jectText:action.params}
        case 'dataFromMondb':
                 let {passage,text,jectPassage,jectText,username} = action.params;
                 console.log(passage,text,jectPassage,jectText)
                return{...state,passage,text,jectPassage,jectText,username}

    }
}
export default reducer;