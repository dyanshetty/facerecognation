import React from "react";
import { Tilt } from 'react-tilt';
import './Logo.css';
import "./Logo.png"

 const Logo = () => {
     return (
   <div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
    <div className="Tilt-inner"> <img alt="logo" style={{paddingTop: '5px'}} src={require("./Logo.png")} /></div>
          </Tilt>
    
   </div>
     )
 }
 export default Logo;