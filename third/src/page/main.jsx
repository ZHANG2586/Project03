/* eslint-disable default-case */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
//主页面
import React, { Fragment, useEffect,useMemo,useRef,useReducer,useState,useCallback} from 'react'
import '../styles/first.less'
import UL from '../components/ul'

const t=new Set();
let first=(props)=>{
    
    let [data,setData] =new useState(1);
    const [dat,setDat] =new useState(2);
    const array=[1,3,5,6,2,'d'];
    const back=new useCallback(()=>{
        console.log(array);
        array.map((value) => {
            console.log(value);
        });
    },[data]);
    useEffect(()=>{
        console.log(dat);
        console.log(array);
        t.add(back);
        console.log(t);
    },[])

    
    let ref1=new useRef(null);
    const [num,dispatch]=new useReducer((state,action)=>{
           return state+action;
    },0)

    const [items,dispatch2]=new useReducer((state,action)=>{
            switch(action.type){
                case 'add':
                    return [...state,{id:state.length,name:action.name}];
                case 'move':
                     return  state.filter((_,index)=>{
                        return index !== action.index;
                     });
                case 'clear':
                    return [];
                default :
                     return state;
            }
    },[1,2])
    
    
     

    const change3=()=>{
        props.history.push('/home');
    }
    
 
    const click3=(e)=>{
           e.preventDefault();
           if(e.keyCode === 13){
           console.log(ref1.current.value);
           console.log(typeof ref1.current.value);
           dispatch2({type:'add',name:e.target.value});
           ref1.current.value='';
         }
    }
    const del=(e)=>{
        e.preventDefault();
        console.log(typeof e.target.dataset.index);
           dispatch2({type:'move',index:parseInt(e.target.dataset.index)});
    }
    const clear=()=>{
         dispatch2({type:'clear'})
    }
    useEffect(()=>{
      console.log(document.cookie);
    }
    ,[])
    
    window.addEventListener('message',(e)=>{console.log(e);},false);

    return (
        <Fragment key={array}>
                  <div style={{backgroundColor:"white",width:'100%',height:'100%'}}>
                      {/* <span onClick={change3}>to</span>
                    <p>{num}</p>
                   
                    <button onClick={(
                    )=>{dispatch(1)}}>点击+1</button>
                    <input type='text' ref={ref1} onKeyUp={click3}></input><br></br>
                   
                    <button onClick={clear}>clear</button>
                    <ul>
                        {items.map((item,index)=>(
                            
                            <li key={index}>{item.name}
                             <button onClick={del} data-index={index}>删除</button></li>
                              
                        ))}
                    </ul> */}
                    
                      <UL/>

                  </div>
        </Fragment>
    );
}
export default first;