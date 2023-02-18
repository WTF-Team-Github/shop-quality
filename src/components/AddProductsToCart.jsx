import cartBtn from '../assets/cart.svg';
import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { useState } from 'react';
import CartProducts from './CartProducts';
import './AddProductsToCart.css'

const AddProductsToCart = () => {

  const {cartProducts,showCartItem,toShowCart} = useContext(ProductContext)
  //const [showCart, setShowCart] = useState(false);
   
   //let cartCount = 2;
    //for (const [key, value] of Object.entries(cartProducts)) {
      //cartCount = cartCount + cartProducts[key].qty
    //}
  
  
  
  const showCartProducts = (e) => {
    //setShowCart(true)
    toShowCart();
  }


    return (
        <div className='cart-btn-div'>
          <button className="cart-btn" onClick={showCartProducts}>
            <img src={cartBtn} alt='cart-button' /> 
          </button>

          {cartProducts.length === 0 && 
              (<span></span>)
          }
          {cartProducts.length > 0 &&
            (<span className="cartproduct_count">{cartProducts.length}</span>)
          }
          {showCartItem && (<CartProducts/>)}
        </div>
    )
}

export default AddProductsToCart;