
import './App.css';
import data from  './Data/Data'
import Header from './components/Header'
import {BrowserRouter, Route} from "react-router-dom"
 import Routes from "./Router/Routes"
import Products from "./components/Products/Products"
import Kh from "./components/kh"
import { useState } from 'react';




function App() {

  const {productItems}  = data;
  const [cartItems, setCartItems] =useState([]);

  const handleAddProduct = (product) =>{
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist){
      setCartItems(cartItems.map((item) => item.id === product.id ?
      {... ProductExist,quantity: ProductExist.quantity+1}: item)
      );
    
    }else{
       setCartItems([...cartItems,{...product ,quantity: 1}]);
     } 

    

  }


  return (
    <div>
           
        
         <BrowserRouter>
          <Header />
          <Routes productItems= {productItems} cartItems={cartItems} handleAddProduct={handleAddProduct}/>
        </BrowserRouter>
        
     

    </div>
  );
}

export default App;
