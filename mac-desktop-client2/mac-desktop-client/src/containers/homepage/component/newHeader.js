import react, { Fragment, useReducer } from 'react'
import {MinusOutlined,CloseOutlined,ExpandAltOutlined} from '@ant-design/icons'
import './style/newheader.css'

function header(props){

   let [state,dispatch] = new useReducer((state1,action)=>{
       switch(action.data){
          case 'true':
               return {...action};
          default:
             return {data: 'false'};
       }
   },{data: 'false'});
   let click2=(e)=>{
      e.preventDefault();
      let elementName=e.target.parentElement.parentElement.parentElement.parentElement.className;
  
      let DomCollection = window.document.getElementsByClassName(elementName);
      if(DomCollection.length === 0){
         return false;
      }
      DomCollection[0].style.zIndex='-100';       
      if(elementName === 'rnd react-draggable react-draggable-dragged'){
             window.document.getElementsByClassName('willchange')[2].name='close';

      }
      e.stopPropagation();
   }
   let click3=(e)=>{
      e.preventDefault();
      let elementName=e.target.parentElement.parentElement.parentElement.parentElement.className;
      let DomCollection= window.document.getElementsByClassName(elementName);
      if(DomCollection.length === 0){
         return ;
      }
      DomCollection[0].style.zIndex='-10';
      if(elementName === 'rnd react-draggable react-draggable-dragged'){  
          window.document.getElementsByClassName('willchange')[2].name='narrow';
      }

      return false;
   }
   let click4=(e)=>{
      e.preventDefault();

      let elementName=e.target.parentElement.parentElement.parentElement.parentElement.className;
      
      console.log(elementName);
      
      let DomCollection= window.document.getElementsByClassName(elementName);
      
      if(DomCollection.length === 0){
               return;
      }
      if(state.data === 'false'){
         props.change({x:0,y:0,width:'100%',height:'100%'});
         DomCollection[0].style.borderRadius='0';
         dispatch({data:'true'});
         window.document.getElementsByClassName('bottom')[0].style.zIndex='-1';
       }else{
         props.change({x:100,y:100,width:'940px',height:'500px'});
         DomCollection[0].style.borderRadius='10px';
         dispatch({data:'false'});
         window.document.getElementsByClassName('bottom')[0].style.zIndex='10';
       }
       return false;

   }
   
   return (
      <Fragment>
            <div style={{borderTopLeftRadius:'10px',top:'-20px',width:'70px',height:'20px',position:'absolute',zIndex:'100',cursor:'pointer',display:'flex',flexFlow:'row nowrap',justifyContent:'space-around',alignItems:'center'}}>
                  <div className='suspension' onClick={click2} style={{backgroundColor:'#EF4444'}}>
                    
                       <CloseOutlined/>
                  </div>
                  <div className='suspension' onClick={click3} style={{backgroundColor:'#F59E0B'}}>
                       <MinusOutlined/>
                     
                  </div>
                  <div className='suspension'onClick={click4} style={{backgroundColor:'#10B981'}}>
                       <ExpandAltOutlined/>
                     
                  </div>
            </div>
      </Fragment>
   );
}
export default header;
