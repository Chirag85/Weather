import React,{Component} from 'react'
import './Search.css'
class Search extends Component 
    {
      render(){
                return(
                         <form className="tc">
                         <input className="ba tx"  type="text" placeholder="City" onChange= {this.props.onInputChange}/>
                         <button className="br4 ba grow pointer ts color"  onClick={this.props.onSubmit} >SUBMIT</button>
                         </form>
                   )
              }
    }
export default Search;