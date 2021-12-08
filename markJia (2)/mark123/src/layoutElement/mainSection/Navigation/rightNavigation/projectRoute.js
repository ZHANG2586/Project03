import { useContext } from 'react';
import {Route} from 'react-router-dom';
import { Context } from '../../../Layout';
import Number01 from '../../../../contentElement/textContent/profileText/number01';
import Undefined from '../../../../contentElement/textContent/profileText/undefinedFile';
const  ProjectRoute  =  ()=>{

    let params = useContext(Context);
    let {jectPassage} =params.myState;
    return (
        <>
           {
                jectPassage.map((value,index,jectPassage)=>{
                    let route =  "/Project/" + index;
                   return(<Route path= {route} key={index}  component={Number01}/>)
                })
            }
            {/* <Route path="/Project/Flint" component={Flintcontent}/>
            <Route path="/Project/Metallic" component={Metalliccontent}/>
            <Route path="/Project/Alkaid" component={Alkaidccontent}/>
            <Route path="/Project/MacOs" component={MacOscontent}/>
            <Route path="/Project/Vue" component={Vuecontent}/> */}
             <Route path="/Project/undefined" component={Undefined}/> 
        </>
    )
}
export default  ProjectRoute;