const ProductReducer = (state, action) => {
   
    switch(action.type) {

        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.payload,
            }
        case 'ADD_ITEMS_TO_CART':
            const item = state.cartProducts[action.payload.id]
            return {
                ...state,
                cartProducts: {
                    ...state.cartProducts,
                    [action.payload.id] : item ? {
                        ...item,
                        qty: item.qty + 1,
                    }: {
                        ...action.payload,
                        qty: 1,
                    }

                },
                totalPrice: state.totalPrice + action.payload.price,
            
            }
               
        case 'REMOVE_FROM_CART':
            let newCart = {...state.cartProducts}
            delete newCart[action.payload]
                return {
                    ...state,
                cartProducts: newCart
            }
        case 'CLEAR_CART':
            return {
                totalPrice: 0
            }
        
        default:
            return state
    }
}

export default ProductReducer;