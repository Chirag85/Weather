import React,{Component} from 'react'
import './Card.css'

class Card extends Component {
    render(){
        let t = this.props.temp-273;
        return(
        <div className='he'>
         <h2 className='tc f'>{this.props.name}</h2>
         <br></br>
         {t>0 ? <h3 className='f'>Temperature : {t.toFixed(2)} C</h3>: <h3 className='f'>Temperature : </h3>}
         <h3 className='f'>Pressure : {this.props.pressure}</h3>
         <h3 className='f'>Humidity : {this.props.humidity}</h3>
         <h3 className='f'>Description : {this.props.description}</h3>
        </div>
        )}
}

export default Card;