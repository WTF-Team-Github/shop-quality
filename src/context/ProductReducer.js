

const ProductReducer = (state, action) => {
   
    switch(action.type) {

        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.payload,
            }
        case 'ADD_ITEMS_TO_CART':
            const productExist = state.cartProducts.find((item) => item.id === action.payload.id);
            const index = state.cartProducts.findIndex((item) => item.id === action.payload.id);
            
                 if(productExist) {
                    const newCart = [...state.cartProducts]
                    newCart.splice(index, 1)
                    return {
                        ...state,
                        cartProducts:[...newCart, {...productExist, qty: productExist.qty + 1}
                        ]
                    }
                 }
               else {
            return {
                ...state,
                cartProducts:[...state.cartProducts,
                      {...action.payload, qty:1}],
                }
            }

            case 'REMOVE_FROM_CART':
                return {
                    ...state,
                cartProducts: state.cartProducts.filter(product=> product.id !== action.payload.id),
            
            }
            case 'SHOW_CART_ITEM':
                return {
                    ...state,
                    showCartItem: true,
                }
            case 'HIDE_CART_ITEM':
                return {
                    ...state,
                    showCartItem: false,
                }
                case 'INCREASE_CART_ITEM':
                    const tempState1 = state.cartProducts.map ((item)=> {
                        if (item.id === action.payload.id) {
                            return {
                                ...item, qty:item.qty + 1
                            };
                        } else {
                            return item;
                        }
                    });
                    return tempState1;
                
                case 'DECREASE_CART_ITEM':
                    const tempState2 = state.cartProducts.map ((item)=> {
                        if (item.id === action.payload.id) {
                            return {
                                ...item, qty: item.qty - 1
                            };
                        } else {
                            return item;
                        }
                    });
                    return tempState2;
               
        case 'REMOVE_FROM_CART':
                return {
                    ...state,
                cartProducts: state.cartProducts.filter(product=> product.id !== action.payload.id)
            }
        
            default:
            return state
    }
}

export default ProductReducer;