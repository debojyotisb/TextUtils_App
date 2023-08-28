// import {myStyle} from './label';

import React, { useState } from "react"
import "../App.css";
import {Link} from 'react-router-dom'

export default function Navbar (props) {

  // const [navStyle, setNavStyle]  = useState({
  //   backgroundColor: 'white',
  //   color: 'black',
  //   border: 'gray',
    
  // })


  // const toggleStyle = () => {
  //   if (navStyle.color == 'white'){
  //     setNavStyle({
  //     backgroundColor: 'black',
  //     color: 'white',
  //     // border: '1px solid black',
  //     })
  //     
  //   } else{
  //       setNavStyle({
  //         backgroundColor: 'white',
  //         color: 'black',
  //         // border: '1px solid white',
  //         })
  //   

  //     }
  // }

    return ( 
    <div >

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `} >
    
    <div className="container-fluid" >

    <a className="navbar-brand" href="#" style={{fontSize: 45, fontWeight: "lighter"}}> {props.title}  </a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" 

    // style={navStyle}
    
    >
      <span className="navbar-toggler-icon" ></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          
          <Link className="nav-link active " aria-current="page" to="/"> Home </Link>
        </li>
        
        <li className="nav-item dropdown" >
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Expand
          </a>
          <ul className="dropdown-menu" style={{backgroundColor: props.mode === 'light'?"white":"pink"}}>
            <li><Link className="dropdown-item" to="/about">About</Link></li>

            {/* <li><a className="dropdown-item" href="#">Another action</a></li> */}
            
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#"
            
             >Something else here</a></li>
          </ul>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>

      

      <button className="btn btn-primary " type="button" onClick={props.toggleMode} > {props.mode === 'light'?"Dark Mode":"Light Mode"} </button>

      
    </div>
  </div>
</nav>
    
    </div> 
    )
};
