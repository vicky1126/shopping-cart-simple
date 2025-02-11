import { useReducer } from "react";
import Navbar from "./component/Navbar";
import Product from "./component/Product";
import Cart from "./component/cart";
import { CartContext, cartReducer, cartInit } from "./store";


function App() {
  
  const reducer = useReducer(cartReducer,{
  carList: [],
})

  return (
    <CartContext.Provider value={reducer}>
      <Navbar />
      <div className="container mt-4">
        {/*外層格線*/}
        <div className="row">
          <div className="col-md-7">
            {/*內層格線*/}
            <Product />
          </div>

          <div className="col-md-5">
            <Cart/>
          </div>

        </div>

      </div>
    </CartContext.Provider>
  );
}


export default App;