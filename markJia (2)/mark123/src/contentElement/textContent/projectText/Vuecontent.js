import React  from 'react'
import './FlintStyles.css'
const Vuecontent =  ()=>{return(
    <>
        <div className="contentFather">
            <div className="content">
            <code className="language-bash" >
                <span className="token" >git</span>
                <span> clone https://github.com/Renovamen/flint.git</span>
                <span></span>
                <span className="token" >cd</span>
                <span> flint</span>
                <span>python setup.py </span>
                <span className="token" >install</span>
            </code>
            </div>
        </div>
</>
)}
export default Vuecontent;
