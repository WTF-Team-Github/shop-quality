import { useReducer, createContext } from "react";
import ProductReducer from "./ProductReducer";

const ProductContext = createContext();

export const ProductProvider  = ({children}) => {
  
    //const [products, setProducts] = useState([]);
    const initialState = {
        products: [],
        cartProducts: [], 
        showCartItem: false,  
    }
const [state, dispatch] = useReducer(ProductReducer, initialState)
   

    //function to fetch products when page renders
    function fetchProducts () { 
            fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: 'GET_PRODUCTS',
                    payload: data.products
                })
            })

    }

// function to add products to cart.
function addCartItems(product) {
        dispatch({
            type: 'ADD_ITEMS_TO_CART',
            payload: product,
        })
    } 

    //function to remove individual cart items
function removeItemFromCart(product) {
    dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product,
    })
} 

//function to show Cart when cart button is clicked 
function toShowCart() {
    dispatch({
        type: 'SHOW_CART_ITEM',
    })
} 

//function to hide Cart when cart button is clicked 
function toHideCart() {
    dispatch({
        type: 'HIDE_CART_ITEM',
    })
} 

//function to increment cart-items
function incrementCartItem(item){
    dispatch({
        type:'INCREASE_CART_ITEM',
        payload:item
    })
}

function decrementCartItem(item){
    dispatch({
        type:'DECREMENT_CART_ITEM',
        payload:item
    })
}



    return <ProductContext.Provider value ={{
        ...state,
        fetchProducts,
        addCartItems,
        removeItemFromCart,
        toShowCart,
        toHideCart,
        incrementCartItem,
        decrementCartItem,
        
        }}>
          {children}
        </ProductContext.Provider>

}

export default ProductContext;