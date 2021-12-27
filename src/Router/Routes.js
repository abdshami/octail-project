
import React from "react"
import Products from "../components/Products/Products"
import Kh from "../components/kh"
import { Route,BrowserRouter   }  from "react-router-dom"
import Cart from "../components/Cart/Cart"

 





const  Routes =({productItems, cartItems,handleAppProduct}) =>{
    return(
    <div>
      
         <div>
            <Route path="/" exact>
                <Products productItems={productItems} handleAppProduct={handleAppProduct}/>
            </Route>

            {/* <Route path="/Products">
                <Kh/>
            </Route> */}

            <Route path="/Cart">
                <Cart cartItems={cartItems}  handleAppProduct={handleAppProduct}/>
            </Route>
          </div>

      
    </div>
    );
};

export default Routes;