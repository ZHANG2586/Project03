/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState,Suspense } from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
// import First from '../page/main'
import Second from '../page/insert.jsx';
import 'antd/dist/antd.css';
import {Spin,Alert} from 'antd';
import axios from 'axios'
import Lala from '../page/inlay'
import  First from  '../page/main.jsx'


let router=(params)=>{
    
    const [loading,setLoading] =new useState(true);
    useEffect(
    ()=>{  
      setLoading(true); 
      axios.get('/data.json')
      .then((res)=>{
        console.log(res);
        setLoading(false);
      });
    }
    ,[]);
    if(loading === true){
         return (<>
            <Spin style={{}} tip='Loading...'>
                  <Alert style={{textAlign:'center',height:'500px',backgroundColor:'transparent',border:'0px solid transparent'}} 
                  message='此页面正在加载中。。。。。。'   type='info'/>
            </Spin>
         
         </>);
    }    
    return (
       <>
        <BrowserRouter>
         <Suspense fallback={<p>load。。。</p>}>
             <Switch>
                   <Route exact path='/'>
                     <First/>
                   </Route>
                   <Route exact  path='/home'>
                      <Second/>
                   </Route>
                   <Route exact path='/lala'>
                     <Lala/>
                   </Route>
             </Switch>
           </Suspense>
        </BrowserRouter>
       </>
    );
}

router=React.memo(router);

export default router;