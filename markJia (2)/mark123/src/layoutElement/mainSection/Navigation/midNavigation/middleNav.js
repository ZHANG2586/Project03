import React from 'react';
import Profile01 from '../../../../contentElement/profileFile/Profile';
import Projects01 from '../../../../contentElement/projectFile/Projects';
import {Route} from 'react-router-dom';

const MiddleNav =   ()=>{
    return(
        <>
            <Route  path="/Profile" component={Profile01}/>
            <Route  path="/Project" component={Projects01}/>
        </>
     )
}
export default MiddleNav ;
