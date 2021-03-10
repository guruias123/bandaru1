import React,{Component} from 'react'
import {Route,Link} from 'react-router-dom'
import './CartScreen.css'
import App1 from './App1'
const url='https://amazon1543.herokuapp.com/cart1?login1='
const CartUrl='https://amazon1543.herokuapp.com/removeItem'
class CartScreen extends Component{
      constructor(){
            super()
            this.state={
                  carts:'',
                  GoogleID:''
            }
      }
      componentDidMount(){
            
            
            var GID=sessionStorage.getItem('name');
            this.setState({GoogleID:GID})
            fetch(`${url}${GID}`,{method:'GET'}).then((res)=>res.json()).then((data)=>this.setState({carts:data}))
           
      }
      product=(one,two)=>{
            
            return (one*two)
      }
      handle1submit=(ID)=>{
            const myobj={
                  _id:ID
            } 
            console.log(ID)
            fetch(CartUrl,{
            method:'DELETE',
            headers:{
                  'Content-Type':'application/json'
            },
            body:JSON.stringify(myobj)
            
            }) 
            var GID=sessionStorage.getItem('name');
            fetch(`${url}${GID}`,{method:'GET'}).then((res)=>res.json()).then((data)=>this.setState({carts:data}))
      }
      
     
       
      cart = (data)=>{
            if(data){
                  return(
                        data.map(item=>{
                              return(
                                    <>
                                    <div className='col-sm-12'>
                                    <div className='cart'>
                                                <img className='img' src={item.image1}/>
                                                <div className='name'><h1 style={{fontSize:'800%'}}>{item.name1}</h1></div>
                                                <div className ='price'><h2 style={{fontSize:'800%'}}>Price : ${item.cost1}   <Link to='/orders'><button style={{marginLeft:'46%',backgroundColor:'green',color:'white',}}>Proceed to checkout</button></Link></h2></div>
                                                <div className='authname'><h2 style={{fontSize:'800%'}}>Qty : {item.keyword1} <button style={{marginLeft:'50.6%',backgroundColor:'red',color:'white',}}  onClick={()=>this.handle1submit(item._id)}>remove</button></h2></div>                                                
                                                <div className='price'><h2 style={{fontSize:'800%'}}>total price : ${this.product(item.keyword1,item.cost1)} </h2></div>  
                                                
                                    </div>
                                    </div>
                                    </>                           
                              )
                        })
                  )
            }else{
                  return(
                        <>
                        
                       <img src='/images/loader.gif' style={{height:'320px', width:'420px',marginTop:'2%'}}/>
                        {/* <p style={{marginLeft:'80%', marginTop:'.5%'}}><Route exact path='/' component={App1}/></p> */}
                        </>
                  )
            }
      }
      render(){
            
           if(this.state.GoogleID){
            return(
                        <>
                          
                              <h1 style={{font:'status-bar',fontSize:'200%',color:'white',backgroundColor:'#203840',width:'100%'}}>Your Carts</h1>
                              {this.cart(this.state.carts)}
                              

                        </>
            )
           }else{
                 return(
                       <>
                 <h1 style={{textAlign:'center'}}>Please Login Above </h1>
                 <div style={{marginLeft:'620px'}}>
                       <Route exact path='/' component={App1}/> 
                  </div>
                  <div style={{marginLeft:'500px',marginTop:'5%'}}>
                        <img src='data:image/jpeg;base64,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' />
                  </div>
                  </>
                 )
           }
      }
      
}

export default CartScreen;