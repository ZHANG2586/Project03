import { Fragment, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import styled from 'styled-components'
import Li from './ul-li'
import 'antd/dist/antd.css'
import {Spin} from 'antd'
import {LoadingOutlined} from '@ant-design/icons'

export default function Div(props){
    let i=-1;
    const list=new useMemo(()=>props.src,[props.src]);
    const antIcon = <LoadingOutlined style={{fontSize:24}} spin />;
    const DIV=styled.div`
          width:921px;
          
    `
    if(list.length < 6 ){
        return (
            <>
                <Spin  indicator={antIcon}/>
            </>
        );
    }

    return (
        <Fragment key={props.name}>
            <DIV>
                <ul style={{marginLeft:'4%',display:'flex',flexWrap:'wrap'}}>
                    {list.map((val)=>{
                        i++;
                        console.log(list.length);
                        console.log(val);
                          return <Li name={props.name} src={val} url={props.url[i]} name={props.name[i]} />;
                    })}
                </ul>
            </DIV>
        </Fragment>
    );

}