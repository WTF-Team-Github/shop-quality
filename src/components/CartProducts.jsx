import closeBtn from '../assets/close-btn.svg'
import { useState, useContext } from "react";
import ProductContext from "../context/ProductContext";
import RemoveCartItems from './RemoveCartItems';
import './CartProducts.css'

const CartProducts = () => {

    const closeBtnStyle = {
        width:"100%",
        height: '100%'

    }
    const {cartProducts,toHideCart} = useContext(ProductContext)
    const [isClose, setisClose] = useState(true)
   
 

    

    //function to close cart item div
    const handleCloseCart = (e) => {
      setisClose(!isClose)
      toHideCart();
      
    }
    
    
    


        
    
    return (
        <div className={isClose ?'cart-product': 'hide-btn'}>
            <button className='close-btn' onClick= {handleCloseCart}>
                <img src={closeBtn} alt="close-btn" style= {closeBtnStyle}/>
            </button>
            {cartProducts.length === 0 && (
              <div className='empty-cart-div'>No Items Selected.</div>
            )}
            {cartProducts.map((cartItem)=> (
               <div className='cart-items_container' key={cartItem.id}>
                    <div className='cart-product_list'>
                        <div className='cart-product_description'>
                            <p className="cart-product_title">{cartItem.title}</p>
                            <p className="cart-product_price">${cartItem.price * cartItem.qty}</p>
                            <p className="cart-product_qty">Qty:{cartItem.qty}</p>  
                        </div>
                        <div className="cart-product-image">
                            <img src={cartItem.thumbnail} alt= {cartItem.title} width={100} height={80}/>
                        </div>
                    </div> 
                    <RemoveCartItems product={cartItem}/>
                </div>
                )
            )}
            <h3 className='total-price'>Sub Total:{cartProducts.reduce((total, product) => total + (product.price * product.qty), 0)}</h3>
            <button className='checkout-btn'>Proceed to Checkout</button>    
        
        </div>
    )
    
}
export default CartProducts;