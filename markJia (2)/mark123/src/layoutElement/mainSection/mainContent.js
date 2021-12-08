import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './mainContent.css'
import LeftNav from './Navigation/leftNavigation/leftNav'
import MiddleNav from './Navigation/midNavigation/middleNav'
import ProfileRoute from './Navigation/rightNavigation/profileRoute'
import ProjectRoute from './Navigation/rightNavigation/projectRoute'
function Sider01 (){
    return(
        <>
        <Router>
            {/* 左边导航(一级导航) */}
            <div className="left_nav">
                <div className="scroll">    <LeftNav />     </div>
            </div>
           {/* 中间导航(二级导航) */}
            <div className="middle_nav">
                <div className="scroll">    <MiddleNav />   </div>
            </div>
            {/* 右边内容(三级内容) */}
            <div className="right_nav">
               < ProfileRoute />< ProjectRoute /> 
            </div>
            {/* <div className="Public  threeNav">       
            </div> */}
        </Router>
        </>
    )
}
export default Sider01;