import { useContext } from "react";
import ProductContext from "./context/ProductContext";
import ProductCard from "./ProductCard";
const ProductListing = () => {
    const {products} =useContext(ProductContext);
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
