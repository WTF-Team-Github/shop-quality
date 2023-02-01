import { useReducer, createContext } from "react";
import ProductReducer from "./ProductReducer";

const ProductContext = createContext();

export const ProductProvider  = ({children}) => {
  
    //const [products, setProducts] = useState([]);
    const initialState = {
        products: [],
        cartProducts: {},
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
function removeItemFromCart(cartProducts) {
    dispatch({
        type: 'REMOVE_FROM_CART',
        payload: cartProducts
    })
} 


    return <ProductContext.Provider value ={{
        ...state,
        fetchProducts,
        addCartItems,
        removeItemFromCart
        }}>
          {children}
        </ProductContext.Provider>

}

export default ProductContext;