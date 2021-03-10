import {React,Component} from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import './Home.css'
const url='https://amazon1543.herokuapp.com/carosal'
const brandurl='https://amazon1543.herokuapp.com/brand'
class Home extends Component{

        constructor(){
          super()
          this.state={
            carosal:'',
            brand:''
          }
        }
        componentDidMount(){
          fetch(url,{method:'GET'}).then((res)=>res.json()).then((data)=>this.setState({carosal:data}))
          fetch(brandurl,{method:'GET'}).then((res)=>res.json()).then((data)=>this.setState({brand:data}))
       
    }
    
    RenderBrand = (product) =>{
      if(product){
        return(
        
          product.map((item)=>{
             return(
              <div className='col-sm-4'>
                        <div className='img1'>
              <Link to={item.url}><img className='img2' src={item.image} style={{width:'100%', height:'40%'}}/></Link>
              <div className="desc">{item.name}</div>
              </div>
              </div>
            
             )
          
          })
        )
      }
    }

    carosal = (data) =>{
      if(data){
        return(
          data.map(item=>{
            if(item.active=='true'){
              return(
                <>
                  <div className="item active">
                    <Link to={item.url}><img src={item.image} alt="Shirts" style={{width:'85%',height:'100%'}}/></Link>
                  </div>
                 </>
                )
            }else{
              return(
                <>
                  <div className="item">
                    <Link to={item.url}><img src={item.image} alt="Shirts" style={{width:'85%',height:'100%'}}/></Link>
                  </div>
                 </>
                )
            }
           
          })
        )
      }
    }

    
    render(){
      console.log(this.state.brand)
      return(
        
        <>
          
            <div className='corosal'>
             <div className="col-sm-12">
    
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
  
      
      <div className="carousel-inner">
      {this.carosal(this.state.carosal)}
      
      
        
      </div>
      
      <a className="left carousel-control" href="#myCarousel" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#myCarousel" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right"></span>
        <span classNameName="sr-only">Next</span>
      </a>
    </div>
  
  
  </div>
     <div ><h2 style={{marginLeft:'40%',marginTop:'2%',paddingTop:'1%',color:'#203840',fontFamily:'serif'}}>YOUR SHOPPING ITEMS</h2></div>
       <div className='row'>
       {this.RenderBrand(this.state.brand)}
       </div>
      
         </div>
        
        </>
    )
    }
  }
 export default Home;