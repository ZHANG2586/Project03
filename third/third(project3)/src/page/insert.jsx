/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable no-eval */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/iframe-has-title */
import axios from 'axios';
import  React, { Fragment, useEffect, useState,useRef, Suspense} from 'react'
import qs from 'qs'
import 'antd/dist/antd.css';
import {Spin,Alert} from 'antd';
import '../styles/second.less';
import Back from '../components/fallBack'
import Upward from '../components/forward'
import {MinusOutlined,CloseOutlined,ExpandAltOutlined,PicRightOutlined,SecurityScanOutlined,UploadOutlined,CopyOutlined} from '@ant-design/icons'
import Redius from '../components/redius'
import UserLogin from '../components/Min-state-management/userLogin'


let second=(props)=>{
    
    const [loading,setLoading]=new useState(true);
    const [sub,setSub]=new useState([]);
    const refs=new useRef();
    const ref2=new useRef();
    const ref3=new useRef();
    // let host=parseInt(process.env.REACT_APP_HOST);
    let host=3084;
    let len=10*22+'px';
    let i=1;
    let mousedown=false;
    let initx,inity;
    let db=1;

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async ()=>{
        setLoading(true);
        // axios.defaults.baseURL='http://suggestion.baidu.com';
        let data={url:'http://suggestion.baidu.com/su?wd=fate&p=3&cb=window.bdsug.sug&ie=utf-8'};
        axios.defaults.baseURL='/api'
        await axios.post('/seek/data',qs.stringify(data))
        .then( async(res)=>{
            let string=res.data.substring(res.data.indexOf('(')+1,res.data.lastIndexOf(')'));
            let string2=eval("("+string+")");
            await string2.s.map((val)=>{
                  console.log(val);
                  sub.push(val);
            })
            console.log(res);
            setLoading(false);
            let dom = document.getElementById('right');
            dom.style.zIndex=10;
            
        }).catch((err)=>{
            console.log(err);
        })
                 let topdom=document.getElementsByClassName('CeilingSuction')[0];
                 console.log(topdom);
                  window.onscroll=()=>{
                     let scrollT = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop; 
                     console.log(scrollT);
                     console.log(typeof scrollT);
                     if(scrollT > 66){
                         topdom.style.position='fixed';
                         topdom.style.top=0;
                     }else{
                        topdom.style.position='absolute';
                     }
                 }
    },[]);
    
   useEffect(()=>{
       return ()=>{
           window.onscroll=null;
       };
   },[])

    if(loading === true){
        return (
            <Fragment>
                  <Spin tip='Loading...'>
                      <Alert style={{textAlign:'center',height:'500px',
                      backgroundColor:'transparent',border:'0px solid transparent'}} 
                      message='此页面正在加载中。。。。。。'   type='info'/>
                  </Spin>
            </Fragment>
        );
    } 

    const change=(e)=>{
        refs.current.style.display='none';
        document.getElementById('left').src='';
        document.getElementById('right').style.zIndex='10';
    }
    const changes=()=>{
        refs.current.style.display='none';
    }
    const change2= async(e)=>{
        let text = e.target.value;
        if(text === ''){
            refs.current.style.display='none';
            return;
        }
        // ref3.current.style.zIndex='0';
        console.log(e.target.value.length);
        if(e.target.value.length !==0){
        console.log(e.target.value);
        }
        if(text.length > 100){
            e.target.value=text.substring(0,100);
            text=e.target.value;
        }
        let data = {url:`http://suggestion.baidu.com/su?wd=${text}&p=3&cb=window.bdsug.sug&ie=utf-8`};
        axios.defaults.baseURL='/api'
       await  axios.post('/seek/data',data)
        .then((res)=>{
            console.log(res.data);
            setSub([]);
            let string=res.data.substring(res.data.indexOf('(')+1,res.data.lastIndexOf(')'));
            string= eval( "(" + string + ")");
            console.log(typeof string);
            let string2=string.s;
            i=1;
            let list=[];
            string2.map((val)=>{
                i++;
                if(i <= 10){
                  return list.push(val);
                }else{
                    return {};
                }
            })
            console.log(list.length);
            if(list.length === 0){
                refs.current.style.display='none';
                ref3.current.style.zIndex='-10';
            }else{
               len=list.length*22+'px';
               setSub(list);
            }
        }).catch((err)=>
            console.log(err)
        );
        if(sub.length > 0){
            refs.current.style.display='block';
        }
        
        if(e.keyCode === 13 ){
            let val=e.target.value;
            console.log(val);
            document.getElementById('left').src=`https://www.bing.com/search?q=${val}`;
            document.getElementById('right').style.zIndex='-10';
            refs.current.style.display='none';
            document.getElementById('right').style.zIndex='0';
            // window.open(`https://www.baidu.com/s?wd=${val}`,'','height=400,width=1000,top=230,left=260%,menubar=no,scrollbars=0');
        }
    }

    const change3=()=>{
            let input= document.getElementsByClassName('data')[0];
            refs.current.style.display='none';           
            if(input.value === ''){
                return;
            }
            document.getElementById('right').style.zIndex='-10';
            document.getElementById('left').src=`https://www.bing.com/search?q=${input.value}`;   
    }
    const foce=()=>{
        if(sub.length>0){
            console.log(refs);
            refs.current.style.display='inline-block';
        }
    }
   
    const click=(e)=>{
           ref2.current.value=e.target.dataset.hello;
           ref2.current.focus();
    }
    const click2=(e)=>{
        if(e.target.className ==='close'){
            let parent=window.parent;
            parent.document.getElementById('wicket').style.zIndex='-1';
        } 
        if(e.target.className === 'narrow'){
            let parent=window.parent;
            parent.document.getElementById('wicket').style.zIndex='-1';
            parent.document.getElementById('condition1').style.zIndex='1';
            
        }
        if(e.target.className === 'zoom'){
            let parent=window.parent;
            let dom=parent.document.getElementById('wicket');

           if(dom.style.left === '0px' ){
            parent.document.getElementById('wicket').children[0].style.border='10px solid transparent';
            parent.document.getElementById('wicket').children[0].style.borderRadius='18px';
            parent.document.getElementById('wicket').children[0].style.height='100%';
            parent.document.getElementById('first').style.zIndex=1; 
            document.getElementById('right').style.height='68.8%';
            dom.style.top='230px';
            dom.style.left='30%';
            dom.style.width='60%';
            dom.style.height='368px';   
           }else{
            dom.style.top='0px';
            dom.style.left='0px';
            parent.document.getElementById('wicket').children[0].style.border='0px';
            parent.document.getElementById('wicket').children[0].style.borderRadius='0px';
            parent.document.getElementById('wicket').children[0].style.height=window.parent.document.body.offsetHeight+111+'px';
            parent.document.getElementById('first').style.zIndex=-1;
            document.getElementById('right').style.height=window.parent.document.body.offsetHeight-111+'px'; 
            dom.style.width='100%';
            dom.style.height='100%';
           }
        }
    }
    const mouseDown=(e)=>{
        if(mousedown === false){
             mousedown=true;
             initx=e.clientX;
             inity=e.clientY;
        }
    }
    const mouseMove=(e)=>{
         if(mousedown === true){
               let nowx=e.clientX;
               let nowy=e.clientY;
               let disX=nowx-initx;
               let disY=nowy-inity;
               let dom=window.parent.document.getElementById('wicket');
               if(dom.offsetTop < 0){
                      dom.style.top='0px';
                      dom.style.left=dom.offsetLeft+disX;
                      return;
               }
               if(dom.offsetTop > window.parent.document.body.clientHeight-100){
                   dom.style.top=window.parent.document.body.clientHeight-100+'px';
                   dom.style.left=dom.offsetLeft+disX;
                   return;
               }
               if(dom.offsetLeft < -400 ){
                   dom.style.left='-400px';
                   dom.style.top = dom.offsetTop+disY;
                   return;
               }
               if(dom.offsetLeft > window.parent.document.body.clientWidth-400){   
                    dom.style.left=window.parent.document.body.clientWidth-400+'px';
                    dom.style.top = dom.offsetTop+disY;
                    return;
               }
               dom.style.left=dom.offsetLeft+disX+'px';
               dom.style.top=dom.offsetTop+disY+'px';
         }
    }
    const mouseUp=(e)=>{

                mousedown=false;       

    }
   
    const dbclick=(e)=>{
                let parent=window.parent;
                if(db === 1){
                     db++;
                     parent.document.getElementById('wicket').style.top='0';
                     parent.document.getElementById('wicket').style.left='0';
                     parent.document.getElementById('wicket').children[0].style.border='0px';
                     parent.document.getElementById('wicket').children[0].style.borderRadius='0px';
                     parent.document.getElementById('wicket').children[0].style.height=window.parent.document.body.offsetHeight+111+'px';
                     document.getElementById('right').style.height=window.parent.document.body.offsetHeight-111+'px';  
                     parent.document.getElementById('wicket').style.height='100%';
                     parent.document.getElementById('wicket').style.width='100%';
                     
                }else{
                    db=1;
                    parent.document.getElementById('wicket').children[0].style.border='10px solid transparent';
                    parent.document.getElementById('wicket').children[0].style.borderRadius='18px';
                    parent.document.getElementById('wicket').children[0].style.height='100%';
                    document.getElementById('right').style.height='68.8%'; 
                    parent.document.getElementById('wicket').style.top='230px';
                    parent.document.getElementById('wicket').style.left='30%';
                    parent.document.getElementById('wicket').style.height='368px';
                    parent.document.getElementById('wicket').style.width='60%'; 
                }              
    }
    
    return (
        <Fragment>
           
           
      <div id='apex'  style={{width:'100%',height:'100%',backgroundColor:'#e5e7eb'}}>

        {/* <div id='hh'  onMouseDown={mouseDown} onMouseMove={mouseMove} onMouseUp={mouseUp} onDoubleClick={dbclick} style={{cursor:'move',width:'100%',height:'20px',backgroundColor:'#f6f6f6',border:'1px solid ref',lineHeight:'20px'}}>
            <div  onClick={click2} className='close' style={{position:'relative',top:'1px',zIndex:'2',cursor:'pointer',display:'inline-block'}}>
                  <Redius className='icon1' color='#EF4444'/>
                  <CloseOutlined   className='icon1' style={{cursor:'pointer',zIndex:'-1',width:'0px',position:'relative',left:'-14.8px',top:'-2px'}}/>
            </div>
            <div  onClick={click2} className='narrow' style={{position:'relative',top:'1px',zIndex:'2',cursor:'pointer',display:'inline-block'}}>
                  <Redius color='#F59E0B'/>
                  <MinusOutlined  className='icon2' style={{cursor:'pointer',zIndex:'-1',width:'0px',position:'relative',left:'-14.8px',top:'-2px'}}/>
            </div><div  onClick={click2} className='zoom' style={{position:'relative',top:'1px',zIndex:'2',cursor:'pointer',display:'inline-block'}}>
                 <Redius color='#10B981'/>
                 <ExpandAltOutlined  className='icon3' style={{cursor:'pointer',zIndex:'-1',width:'0px',position:'relative',left:'-14.8px',top:'-2px'}}/>
            </div>
        </div> */}
        <div  className='CeilingSuction'  style={{lineHeight:'91px',width:'100%',height:'91px',backgroundColor:'white',position:'absolute',zIndex:'1000'}}>
            <span className='back' style={{position:'absolute',left:'10px',top:'0px'}} onClick={change}><Back/></span>
            <span className='forward' style={{position:'absolute',left:'40px',top:'0px'}} onClick={change}><Upward/></span>
            <span style={{position:'absolute',left:'100px',cursor:'pointer',top:'0px'}} onClick={change}>
                <PicRightOutlined style={{borderRadius:'5px',width:'30px',height:'20px',
                lineHeight:'19px',border:'1px solid #d9dbdf'}}/>
            </span>
           
             
            <div  style={{position:'relative',width:'512px',margin:'auto'}}>
            <span style={{position:'absolute',left:'-35px',cursor:'pointer',top:'0px'}} onClick={change}>
                <SecurityScanOutlined style={{color:'#a9aaac',borderRadius:'5px',width:'30px',
                height:'20px',lineHeight:'19px',border:'1px solid #d9dbdf'}}/>
            </span>

              <input className='baidu' type="text" ref={ref2} onFocus={foce}  className='data' style={{position:'relative',
              width:'400px',height:'40px',border:'2px solid #4d6df2',zIndex:'1'}} onKeyDown={change2}>
              </input>
              <span className='click' onClick={change3} style={{position:'relative',left:'-2px',top:'0.5px',
              display:'inline-block',textAlign:'center',backgroundColor:'#4e6ef2',color:'white',
              zIndex:'2',width:'112px',height:'40px',lineHeight:'41px',cursor:'pointer',
              borderRadius:'0 10px 10px 0'}}>百度懂你</span>
              <ul ref={refs} style={{width:'400px',height:{len},display:'none',position:'relative',zIndex:'10',padding:'0',
              backgroundColor:'white',top:'-27px',borderBottomRightRadius:'5px',borderBottomLeftRadius:'5px',left:'0',border:'2px solid #4d6df2',
              borderTopColor:'#f2f2f2'}}>
                     {sub.map((val)=>{
                             
                              return (<li key={val} data-hello={val} onClick={click} 
                                style={{ cursor:'pointer',
                                height:'22px',lineHeight:'22px',borderBottom:'2px solid #6055550f',
                                marginLeft:'0',display:'block',borderLeft:'',
                                borderRight:'',listStyle:'none'}}>
                                    {val}
                                </li>);
                      })}
                      <span ref={ref3} style={{position:'absolute',bottom:'0px',right:'0px',height:'20px',lineHeight:'20px'}}>反馈</span>
              </ul>
            </div>
           
            <span style={{position:'absolute',right:'50px',top:'0px'}} onClick={change}>
                <UploadOutlined style={{cursor:'pointer',height:'20px',lineHeight:'20px',color:'#a9aaac',borderRadius:'5px',width:'30px',
                border:'1px solid #d9dbdf'}}/>
            </span>
            <span style={{position:'absolute',right:'8px',top:'0px'}} onClick={change}>
                <CopyOutlined style={{cursor:'pointer',color:'#a9aaac',borderRadius:'5px',width:'30px',
                height:'20px',lineHeight:'20px',border:'1px solid #d9dbdf'}}/>
            </span> 
           </div>
           <UserLogin />
            <iframe id ='right'   src='/lala' style={{top:'111px',border:'0px',margin:'0',backgroundColor:'white',position:'absolute',zIndex:'-1',width:'100%',height:'68.8%'}}>       
            </iframe>
            <iframe onClick={changes} id='left'    style={{border:'0px',backgroundColor:'#e5e7eb',position:'absolute',zIndex:'0',width:'100%',height:'100%'}} name='left'>
            </iframe>
          </div>
        </Fragment>
    );
}
export default second;