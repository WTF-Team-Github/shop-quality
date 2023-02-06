import { useContext} from "react";
import ProductContext from "../context/ProductContext";

const RemoveCartItems = ({product}) => {
    const {removeItemFromCart} = useContext(ProductContext)
    
    function removeCartItem() {
      removeItemFromCart(product);
    }
    return (
        <>
        <button onClick={removeCartItem} className='remove-cart_item'>Remove Item</button>
        </>
    )
}

export default RemoveCartItems;