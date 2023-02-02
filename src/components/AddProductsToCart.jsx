import cartBtn from '../assets/cart.svg';
import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { useState } from 'react';
import CartProducts from './CartProducts';
import './AddProductsToCart.css'

const AddProductsToCart = () => {

  const {cartProducts} = useContext(ProductContext)
  const [showCart, setShowCart] = useState(false);
   
   let cartCount = 0;
    for (const [key, value] of Object.entries(cartProducts)) {
      cartCount = cartCount + cartProducts[key].qty
    }
  
  
  const showCartProducts = (e) => {
    setShowCart(true)
  }


    return (
        <>
          <button className="cart-btn" onClick={showCartProducts}>
            <img src={cartBtn} alt='cart-button' /> 
          </button>

          {cartCount === 0 && 
              (<span></span>)
          }
          {cartCount > 0 &&
            (<span className="cartproduct_count">{cartCount}</span>)
          }
          {showCart && (<CartProducts/>)}
          
        
        </>
    )
}

export default AddProductsToCart;