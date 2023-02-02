import AddToCartBtn from "./AddToCartBtn";
import './ProductCard.css'
const ProductCard = ({product}) => {
    
    
    const productImg = {
        width:"100%",
        height: "353px"
    }
    return (
        <div className="product-card">
            <div className="product-image">
               <img src={product.thumbnail} alt={product.title} style={productImg}/>    
            </div>
            <AddToCartBtn key={product.id} product={product} />
            <div className="product-details">
                <ul className="product-description">
                    <li className="product-category">{product.category}</li>
                    <li className="product-title">{product.title}</li>
                    <li className="product-price">${product.price}</li>
                </ul>
            </div>
        </div>
    )
}

export default ProductCard;