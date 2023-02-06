import {useContext } from "react";
import ProductContext from "../context/ProductContext";

const QtyButtons = ({item}) => {

    const {incrementCartItem, decrementCartItem} = useContext(ProductContext)

    //function to increment cart-items
    function handleCartItemIncrement(){
        incrementCartItem(item)
    }
    //function to decrement cart-items
    function handleCartItemDecrement() {
        decrementCartItem(item)
    }
    return (
        <div>
            <button onClick={handleCartItemIncrement}>+</button>
            <button onClick={handleCartItemDecrement}>-</button>
        </div>
    )
}

export default QtyButtons;