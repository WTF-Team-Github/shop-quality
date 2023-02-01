import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import './AddToCartBtn.css'



const AddToCartBtn = ({product}) => {
   const {addCartItems} = useContext(ProductContext)

   // add to cart button handler

       const handleAddCartItems = (e) => {
        addCartItems(product)  
     }
     
    return(
        <div>
         <button className="add-cart-btn" onClick={handleAddCartItems}>ADD TO CART</button>
        </div>
    )
}

export default AddToCartBtn;