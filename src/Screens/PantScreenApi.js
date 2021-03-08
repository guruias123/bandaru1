import React, {Component} from 'react'
import {Link} from 'react-router-dom';


import PantScreen from './PantScreen';





const panturl ="https://amazon1543.herokuapp.com/pants"

class PantScreenApi extends Component{
      constructor(){
            super()
                  this.state={
                        
                        pants:''
                  }
            
      }
      componentDidMount(){
            fetch(panturl,{method:'GET'}).then((res)=>res.json()).then((data)=>this.setState({pants:data}))

      }
      render(){
           
            return(
                  <>
               
                <PantScreen pants={this.state.pants}/>
                
                </>
            )
            }
}

export default PantScreenApi;