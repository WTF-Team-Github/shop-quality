import closeBtn from '../assets/close-btn.svg'
import { useState, useContext } from "react";
import ProductContext from "../context/ProductContext";
import './CartProducts.css'

const CartProducts = () => {

    const closeBtnStyle = {
        width:"100%",
        height: '100%'

    }
    const {cartProducts, removeItemFromCart, totalPrice, clearCart} = useContext(ProductContext)
    const [cartItems, setCartItems] = useState(Object.entries(cartProducts));
    const [isClose, setisClose] = useState(true)

    
    
    

    //function to close cart item div
    const handleCloseCart = (e) => {
      setisClose(!isClose)
      
    }

    //function to remove cartItem
    const removeCartItem = (cartProducts) => {
      removeItemFromCart(cartProducts);
    }
    //clear cart handler function
    const handleClearCart = (e) => {
    setCartItems([]);
    clearCart();
    }
     
    


        
    
    return (
        <div className={isClose ?'cart-product': 'hide-btn'}>
            <button className='close-btn' onClick= {handleCloseCart}>
                <img src={closeBtn} alt="close-btn" style= {closeBtnStyle}/>
            </button>
            {cartItems.map(cartItem => (
               <div className='cart-items_container' key={cartItem[0]}>
                    <div className='cart-product_list'>
                        <div className='cart-product_description'>
                            <p className="cart-product_title">{cartItem[1].title}</p>
                            <p className="cart-product_price">${cartItem[1].price * cartItem[1].qty}</p>
                            <p className= "cart-product_qty">Qty:{cartItem[1].qty}</p>
                        </div>
                        <div className="cart-product-image">
                            <img src={cartItem[1].thumbnail} alt= {cartItem[1].title} width={100} height={80}/>
                        </div>
                    </div> 
                    <button onClick={removeCartItem} className='remove-cart_item'>Remove Item</button>
                </div>
            )
            )}
            <h3 className='total-price'>Total: $ {totalPrice}</h3>
            <button onClick= {handleClearCart}className='clear-cart'>Clear</button>
        </div>
    )
    
}
export default CartProducts;