import React from 'react'
import { BrowserRouter, Route,Link } from 'react-router-dom'
import './App.css'
import CartScreen from './Screens/CartScreen'

import Home from './Screens/Home'
import HomeScreen from './Screens/HomeScreen'

import ProductScreen from './Screens/ProductScreen'
import Pant1Screen from './Screens/Pant1Screen'
import ProductScreenApi from './Screens/ProductScreenApi'
import App1 from './App1'
import PantScreenApi from './Screens/PantScreenApi'
import OrderScreen from './Screens/OrderScreen'
function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open")
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  
  return(
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
        <div className="brand">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <span><Link to='/'>bandaru</Link></span>
        </div>
        <p style={{marginLeft:'80%', marginTop:'.5%'}}><Route exact path='/' component={App1}/></p>
        <div className="header-links">
        
            <a href="/cart" style={{marginTop:'10%'}}>Cart</a>
            
            
        </div>
    </header>
    <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
            <li>
                <a href="/home1">Pants</a>
            </li>
            <li>
                <a href="/home">Shirts</a>
            </li>
        </ul>
    </aside>
    <main className="main">
   
        <div className="content">
            <Route exact path="/home/product/:id" component={ProductScreen}/>
            <Route path="/home1/pant/:id" component={Pant1Screen}/>
            <Route exact path="/home"  component={ProductScreenApi}/>
            <Route exact path='/home1' component={PantScreenApi}/>
            <Route exact path="/" component={Home}/>
            <Route path="/carts" component={CartScreen}/>
            <Route path='/orders' component={OrderScreen}/>
        </div>
        
    </main>
    <footer className="footer">
        All right reserved
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;