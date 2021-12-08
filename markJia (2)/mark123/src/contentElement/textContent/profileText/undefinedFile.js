import {React,useContext,useState} from 'react';
import MDEditor from '@uiw/react-md-editor';
import axios from 'axios';
import {useCookies} from 'react-cookie'
import ExportWord from '../../../art-template/template';
import { Button} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import './undefinedStyles.css'
import 'antd/dist/antd.min.css';
import { Context } from '../../../layoutElement/Layout';
function Undefined(props){
    let params = useContext(Context);
    let {dispatch} = params;
    let {passage,text,jectPassage,jectText,username} = params.myState;
    let test = props.location.query.test;
    const [ cookies ] = useCookies ( 'username') ;
    let token = cookies.username
    const [value, setValue] = useState(props.location.query.text);
    function saveFile(){
      console.log(props)
        let markContent = document.getElementsByClassName("wmde-markdown");
        console.log(markContent)
        if(test === 0){  
          text[props.location.query.Sno] = markContent[0].innerHTML
          let data = {
            // SNo:props.location.query.Sno,
            username,
            passage,
            text:text
          }
          axios.post('http://localhost:3040/newProfile',data,{headers:{token:token}})
              .then((res)=>{console.log(res)})
          console.log(data)
          dispatch({type:'fileText',params:text});
          props.history.push({pathname:"/Profile/0",query:props.location.query.Sno})
        }
        else{
          jectText[props.location.query.Sno] = markContent[0].innerHTML
          let data = {
            // SNo:props.location.query.Sno,
            username,
            jectPassage,
            jectText:jectText
          }
          axios.post('http://localhost:3040/newProject',data,{headers:{token:token}})
          .then((res)=>{console.log(res)})
          dispatch({type:'jectText',params:jectText});
           props.history.push({pathname:"/Project/0",query:props.location.query.Sno})
        }
    }
    return ( 
       <>
        <div className="container" >
          <MDEditor
          onInput={(e)=>{console.log(e)}}
          value={value}
          onChange={setValue}
          />
          {/* <MDEditor.Markdown source={value} /> */}
      </div>
       {/* <button type="info" onClick={ExportWord} >导出word文档</button> */}
        <Button type="primary" shape="round" icon={<DownloadOutlined />} size={'Default'} onClick={saveFile}>
          保存
        </Button>
        <Button type="primary" shape="round" icon={<DownloadOutlined />} size={'Default'} onClick={ExportWord}>
          Download
        </Button>
       
             
       </>
  );
}
export default Undefined;