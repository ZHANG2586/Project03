import {Route} from 'react-router-dom';
import Number01 from '../../../../contentElement/textContent/profileText/number01'
// import Number02 from '../../../../contentElement/textContent/profileText/number02'
// import AboutSite03 from '../../../../contentElement/textContent/profileText/aboutSite03'
import Undefined from '../../../../contentElement/textContent/profileText/undefinedFile'
import { useContext } from 'react';
// import { reducer } from '@uiw/react-md-editor';
// import initialState from '../../../../controlState/store';
import { Context } from '../../../Layout';
// import { withRouter,useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';
// import ReactMarkdown from 'react-markdown';

const ProfileRoute =  (props)=>{
    let params = useContext(Context);
    let {passage} =params.myState;
   

    // console.log(useHistory(), useLocation(), useParams(), useRouteMatch() )
    return(
        
        <>
            
             {
                passage.map((value,index,passage)=>{
                    let route =  "/Profile/" + index;
                   return(<Route path= {route} key={index}  component={Number01}/>)
                })
            }
               
        {/* <Route path= "/Profile/"   component={Number01}/> */}
            {/* <Route path="/Profile/0" component={Number01}/> */}
           {/* <Route path="/Profile/file02" component={Number02}/>
            <Route path="/profile/aboutSite03" component={AboutSite03}/>*/}
            <Route path="/Profile/undefined" component={Undefined}/> 
        </>
    )
}
export default ProfileRoute