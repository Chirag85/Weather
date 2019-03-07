import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from '../Components/navigation';
import Search from '../Components/Search';
import Logo from '../Components/Logo';
import Card from '../Components/Card';
import 'tachyons';

import './App.css';

const particleopt ={
  particles:{
    number:{
      value:90,
      density:{
        enable:true,
        value_area:800
      }
    },
    
  }
}

class App extends Component {
  constructor(){
  super();
this.state ={
  input:'',
  temp:'',
  pressure:'',
  humidity:'',
  name:'',
  description:'',
  display: false
}
  }
  onInputChange=(event)=>{
   this.setState({input:event.target.value});
  }
  onSubmit=async(e)=>{
    e.preventDefault();
 if(this.state.input)
 {
   const resp = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.input}&APPID=70426fc95d0da1115d5339d33154a18c`);
   const data = await resp.json();
if(data)
   {
      this.setState ({
    temp:data.main.temp,
    pressure:data.main.pressure,
    humidity:data.main.humidity,
    name:data.name,
    description:data.weather[0].main ,
    display:true
});
}
 }
  }
 
  render() 
  {  
      const{temp,pressure,humidity,name,description} = this.state;
    return(
                 <div>
                     <Particles className="pos" params={particleopt} />
                 <div className="hero">
                      <Logo />
                      <Navigation />
                 </div> 
                      <Search onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
         { ( this.state.display ) ?
                 <div className='hero1'>
                      <Card temp={temp} pressure={pressure} name={name} humidity={humidity} description={description}/>
                 </div>:
                 <div>

                 </div>
         }
      </div>
   )};
   
  }

export default App;
