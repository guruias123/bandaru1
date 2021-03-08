import React, {Component} from 'react'
import {Link} from 'react-router-dom';

import HomeScreen from './HomeScreen'
import PantScreen from './PantScreen';




const url ="https://amazon1543.herokuapp.com/shirts"

class ProductScreenApi extends Component{
      constructor(){
            super()
                  this.state={
                        shirts:'',
                        
                  }
            
      }
      componentDidMount(){
            fetch(url,{method:'GET'}).then((res)=>res.json()).then((data)=>this.setState({shirts:data}))

      }
      render(){
           
            return(
                  <>
                <HomeScreen shirts={this.state.shirts}/>
                
                </>
            )
            }
}

export default ProductScreenApi;