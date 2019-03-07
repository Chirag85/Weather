import React,{Component} from 'react'
import Tilt from 'react-tilt'
import './Logo.css'
import logo from './logo.png';

class Logo extends Component {
    render(){
        return(
            <div >
            <Tilt className="Tilt" options={{ max : 60 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner back">
            <img src={logo} alt='Logo'></img>
            </div>
           </Tilt>
           </div>
          
        )}
}

export default Logo;