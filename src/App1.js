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
        clientId="664272560437-6609p3ccson4trdnnp6u6uqdq0poef0i.apps.googleusercontent.com"
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

// import React,{Component} from 'react'


// import GoogleLogin from 'react-google-login'
// class App1 extends React.Component {
//     constructor(){
//         super()
//         this.state={
//             User:'',
//         }
//     }
//     responseGoogle=(response)=>{
     
//         this.setState({User:response.profileObj});
//         console.log('this is the user data',this.state.User)
//         var x=response.profileObj.googleId;
     
//         localStorage.setItem('document',JSON.stringify(response.profileObj));
//         sessionStorage.setItem('GID',x)
//         console.log('this is ',response.profileObj.googleId)
      
//     }
   
//     render(){
//     if(this.state.User==''){

//         return (
        
           
            
//                                 <div >
                                
//                                 <ul class="nav navbar-nav navbar-right">
//                                     {/* <li> <button className='btn btn-sucess' data-toggle='modal' data-target='sign-in'><a href="#"><span class="glyphicon glyphicon-user" onclick={()=>{this.LoginAccount()}}></span> Sign Up</a></button></li> */}
//                                     <li>
//                                     <GoogleLogin clientId="664272560437-t627f8um65f411fl2008vreaipovco22.apps.googleusercontent.com" 
//                                         buttonText="Login"
//                                         onSuccess={this.responseGoogle}
//                                         onFailure={this.responseGoogle}
//                                         cookiePolicy={'single_host_origin'}/>
//                                     </li>
                    
//                                     {/* <li><a href="#"><span class="glyphicon glyphicon-log-in" ></span> Login</a></li> */}
                                    
//                                 </ul>
                               
//                                 </div>
                           
                       
    
              
         
         
            
//         )
//     }
//     else{
//         return(
           
                
            
                    
//                     <div className=''>
//                         <img style={{borderRadius:'50%',height:'40%',width:'40%',marginLeft:'60%'}} src={this.state.User.imageUrl} />
                    
                   
//                     </div>
                
                    
                
           
         
// )
//     }
    
   
//     }
// }

// export default App1
