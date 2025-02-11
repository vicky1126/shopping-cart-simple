import { useContext } from "react";
import ProductsData from "../assets/productsData";
import { CartContext } from "../store";


export default function Product(){
    const [state,dispatch] = useContext(CartContext);
    return(
        <div className="row row-cols-3 g-3">
            {ProductsData.map((product)=>{
                return(
                    <div className="col" key={product.id}>
                        <div className="card" >
                            <img src={product.img} 
                            className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h6 className="card-title">{product.title}
                                <span className="float-end">NT${product.price}</span>
                                </h6>
                                <button type="button" className="btn btn-outline-primary w-100"
                                onClick={()=>{
                                    dispatch({ // dispatch事件 會觸發 App.js 中的 cartReducer 裡面的 callback function
                                        type: 'ADD_TO_CART',
                                        payload:{
                                            ...product,
                                            quantity: 1
                                        }
                                    });
                                }}>加入購物車</button>
                            </div>
                        </div>
                    </div>  
                )
            })}
             
        </div>   
    )
}