import React from 'react';
import { Link } from 'react-router-dom';
function OnClickFunction(param){
    console.log(param)
    let liSets = document.getElementsByClassName('endSove01');
    let liSetsArray = Object.values(liSets);
    console.log(liSets)
    console.log(liSetsArray)
    for(let i=0;i<3;i++){
        console.log(i==param)
        if(i == param)
            liSetsArray[i].classList.add('borderColor')
        else{
            liSetsArray[i].classList.remove('borderColor')
        }
    }
   
}

function LiLinkTag(props){
    let {msg} = props;
    console.log(msg)
    return(
        <>
        <li key={0} style={{marginTop:12+"px"}} className="endSove01" onClick={()=>{OnClickFunction(0)}}>
            <Link to={msg[0].path}  >
                <div className="iconAndTitle"><span className="svgContainer"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M458.949 16.902c-21.23 45.511-62.196 13.713-94.89 12.604-92.464-.8-95.254 47.352-141.296 77.017-9.189-10.02-23.774-16.38-46.738-15.117-15.928.876-30.343 6.34-40.974 15.895-12.34 10.738-21.335 25.549-21.942 39.84 21.03-5.316 41.304-4.385 45.871 5.46 11.508 24.813-21.37 15.961-44.745 23.397-1.248.396-2.472.81-3.684 1.225-2.757 7.733-6.024 15.131-6.024 20.482 0 16.945 13.686 6.16 19.648 20.88.85 2.099 3.778 8.625 12.238 16.833 1.367 1.328 46-35.114 47.487-33.9-14.835 31.6-38.787 42.74-41.127 43.975-21.237 11.202-46.726 20.42-55.691 38.13l-.522-.168s-27.58 65.425-33.509 97.908c.575 16.747 25.672 12.545 25.672 12.545l39.527-11.785 4.686 16.94 119.482-150.627c-26.122-15.67-18.045-38.588-21.927-58.778 13.787-22.475 21.9-34.062 14.597-56.68 7.122-7.318 16.216-14.785 26.61-16.779 21.267-4.08 60.016 16.198 80.997 16.47 27.78.362 42.716-14.296 54.352-31.905-10.666 3.502-14.712 3.5-8.703-15.065-14.177 5.175-23.315 22.6-48.998 18.526-23.87-3.787-60.077-11.021-80.065-4.354 33.926-17.423 60.548-35.253 96.777-39.463 42.453 3.026 80.56 32.916 102.89-17.031zM340.169 153.78l-39.003 49.065 16.54 11.713 39.008-49.067zm-205.509 1.657c-5.303 0-10.607 1.195-10.607 3.584 2.163 2.943 9.788 5.337 13.459 5.42 5.858 0 7.755-.644 7.755-5.42 0-2.389-5.304-3.584-10.607-3.584zm140.864 47.156l-11.702 14.172L312.9 250.85l11.701-14.172zm-4.423 35.984L100.574 453.551s-10.247 8.425-.05 16.773c10.47 8.57 18.622-3.654 18.622-3.654L289.67 251.695zm18.932 41.914s-20.687 26.845-31.22 40.12c-42.147 53.119-125.718 156.698-127.942 158.156l.068 16.332H240.24l15.365-115.264 44.661 9.677s17.915 1.914 17.186-13.823c-4.626-21.768-19.228-74.864-27.42-95.198zm-22.714 48.874l8.746 21.61-14.493-3.73z"></path></svg></span><span className="Title">About Me</span></div>
                <div className="text"><div className="text-content">Hey there! I'm a dragon lost in human world...</div></div>
            </Link >
        </li>
        <li key={1} className="endSove01" onClick={()=>{OnClickFunction(1)}} >
            <Link to={msg[1].path}  >
                <div className="iconAndTitle"><span className="svgContainer" ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm3.163 21.783h-.093a.513.513 0 0 1-.382-.14.513.513 0 0 1-.14-.372v-1.406c.006-.467.01-.94.01-1.416a3.692 3.692 0 0 0-.151-1.028 1.832 1.832 0 0 0-.542-.875 8.014 8.014 0 0 0 2.038-.471 4.051 4.051 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.77 6.77 0 0 0 .3-2.13 4.138 4.138 0 0 0-.26-1.476 3.892 3.892 0 0 0-.795-1.284 2.81 2.81 0 0 0 .162-.582c.033-.2.05-.402.05-.604 0-.26-.03-.52-.09-.773a5.309 5.309 0 0 0-.221-.763.293.293 0 0 0-.111-.02h-.11c-.23.002-.456.04-.674.111a5.15 5.15 0 0 0-.703.26 6.503 6.503 0 0 0-.661.343c-.215.127-.405.249-.573.362a9.578 9.578 0 0 0-5.143 0 13.507 13.507 0 0 0-.572-.362 6.023 6.023 0 0 0-.672-.342 4.516 4.516 0 0 0-.705-.261 2.203 2.203 0 0 0-.662-.111h-.11a.29.29 0 0 0-.11.02 5.845 5.845 0 0 0-.23.763c-.054.254-.08.513-.081.773 0 .202.017.404.051.604.033.199.086.394.16.582A3.888 3.888 0 0 0 5.702 10a4.142 4.142 0 0 0-.263 1.476 6.871 6.871 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516.415.422.915.75 1.466.964.653.25 1.337.41 2.033.476a1.828 1.828 0 0 0-.452.633 2.99 2.99 0 0 0-.2.744 2.754 2.754 0 0 1-1.175.27 1.788 1.788 0 0 1-1.065-.3 2.904 2.904 0 0 1-.752-.824 3.098 3.098 0 0 0-.292-.382 2.692 2.692 0 0 0-.372-.343 1.842 1.842 0 0 0-.432-.24 1.201 1.201 0 0 0-.481-.101c-.04.001-.08.005-.12.01a.649.649 0 0 0-.162.02.408.408 0 0 0-.13.06.115.115 0 0 0-.06.1.33.33 0 0 0 .14.242c.093.074.17.131.232.171l.03.021c.133.103.261.214.382.333.112.098.213.209.3.33.09.119.168.246.231.381.073.134.15.288.231.463.188.474.522.875.954 1.145.453.243.961.364 1.476.351.174 0 .349-.01.522-.03.172-.028.343-.057.515-.091v1.743a.501.501 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0v.005z"></path></g><defs><clipPath id="clip0"><path d="M0 0h24v24H0V0z"></path></clipPath></defs></svg>
                    </span><span className="Title">Github Stats</span></div>
                <div className="text"><div className="text-content">Here are some status about my github account...</div></div>
            </Link>
        </li>
        <li key={2} className="endSove01" onClick={()=>{OnClickFunction(2)}}>
            <Link to={msg[2].path} >
                <div className="iconAndTitle"><span className="svgContainer"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 14 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 3h1v1H5V3zM3 3h1v1H3V3zM1 3h1v1H1V3zm12 10H1V5h12v8zm0-9H7V3h6v1zm1-1c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3z"></path></svg></span><span className="Title">About This Site</span></div>
                <div className="text"><div  className="text-content">Something about this personal portfolio site...</div></div>
            </Link>
        </li>
        <li key={3} className="endSove01" onClick={()=>{OnClickFunction(3)}}>
            <Link to={msg[3].path} >
                <div className="iconAndTitle"><span className="svgContainer"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 14 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 3h1v1H5V3zM3 3h1v1H3V3zM1 3h1v1H1V3zm12 10H1V5h12v8zm0-9H7V3h6v1zm1-1c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3z"></path></svg></span><span className="Title">待定</span></div>
                <div className="text"><div  className="text-content">暂定文件...</div></div>
            </Link>
        </li>
        </>
    )
}
export default LiLinkTag;