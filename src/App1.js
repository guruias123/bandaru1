import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import ProductScreen from './Screens/ProductScreen';
import './App.css'
export class App1 extends Component {

       
        
  responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);
    console.log('>>>>>>',response.googleId);
    console.log('>>>>>',response.profileObj.name)
    
       sessionStorage.setItem('name',response.googleId)
       sessionStorage.setItem('name1',response.profileObj.name)
      }
       
  render() {
    
    return (
      <div className='App1'>
        
       
        <GoogleLogin
        clientId="664272560437-bv5m7ds2tkc5mau9fbu6mg9kt9uaqh1o.apps.googleusercontent.com"
        buttonText ="Login" 
        onSuccess={this.responseGoogle} 
        onFailure={this.responseGoogle}
        
        cookiePolicy={'single_host_origin'}
        
        />
         
      </div>
    )
  }
}

export default App1