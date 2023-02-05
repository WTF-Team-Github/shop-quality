import { useEffect } from "react";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import ProductCard from "./ProductCard";
import './ProductListing.css'

const ProductListing = () => {
    const {fetchProducts, products} = useContext(ProductContext);
     
    useEffect(()=>{
        fetchProducts(); 
    });
    
    
    return (
        
        <div className="product-listing">
            {products.map(product => (
                <ProductCard key= {product.id} product ={product}/>
                ))
            }
            
            
        </div>
    )
}

export default ProductListing;
