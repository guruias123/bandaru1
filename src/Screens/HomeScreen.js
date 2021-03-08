
import {Link} from 'react-router-dom'
import '../index.css'

const HomeScreen=(props)=>{
  
  const shirt=({shirts})=>{
    if(shirts){
      
  return(
      
      shirts.map((item)=>{

        return(
          <>
          
          <ul className="products">
         
              <li>
                <div className="product">
                    <Link to={'/home/product/' + item._id}><img className="product-image" src={item.image} alt="product"/></Link>
                    
                    <div className="product-name">
                    <Link to={'/home/product/' + item._id}>{item.name}</Link></div>
                    <div className="product-brand">{item.brand}</div>
                    <div className="product-price">${item.cost}</div>
                    <div className="product-rating">{item.rating}Stars ({item.numReviews})Reviews</div>
                </div>
            </li> 
          
        </ul>
        </>
  )
      })
  )
    }  
    else{
      return(
        <img src='/images/loader.gif' height='320px' width='420px' />
        
    )
    }  
}
    return(
      <>
        
        {shirt(props)}
      </>
    )
  
}

export default HomeScreen;

/*function HomeScreen(props){
    return(
            <>
           
            <ul className="products">
            {
              data.products.map(product => 
                <li>
                  <div className="product">
                      <Link to={'/product/' + product._id}><img className="product-image" src={product.image} alt="product"/></Link>
                      
                      <div className="product-name">
                      <Link to={'/product/' + product._id}>{product.name}</Link></div>
                      <div className="product-brand">{product.brand}</div>
                      <div className="product-price">${product.price}</div>
                      <div className="product-rating">{product.rating}Stars ({product.numReviews})Reviews</div>
                  </div>
              </li> )
            }
          </ul>
          </>
    )
}
export default HomeScreen;*/