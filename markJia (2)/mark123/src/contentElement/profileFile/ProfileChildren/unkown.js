import { Link } from 'react-router-dom';
import OnClickFunction from '../../twoNavBao/onClicbao/onclicBao';
const Unkown = (props)=>{ let {msg}=props;   return(<li key={msg.index} className="endSove01" onClick={()=>{OnClickFunction(3)}}>
<Link to={msg.path} >
    <div className="iconAndTitle"><span className="svgContainer"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 14 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 3h1v1H5V3zM3 3h1v1H3V3zM1 3h1v1H1V3zm12 10H1V5h12v8zm0-9H7V3h6v1zm1-1c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3z"></path></svg></span><span className="Title">待定</span></div>
    <div className="text"><div  className="text-content">暂定文件...</div></div>
</Link>
</li>)}
export default Unkown;