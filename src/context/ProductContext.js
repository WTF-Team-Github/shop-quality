import { useState, createContext, useEffect } from "react";

const ProductContext = createContext();

export const ProductProvider  = ({children}) => {
  
    const [products, setProducts] = useState([]);

    useEffect( ()=> {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setProducts(data.products)
        })
    }, [])

  
    return <ProductContext.Provider value ={{products}}>{children}</ProductContext.Provider>

}

export default ProductContext;