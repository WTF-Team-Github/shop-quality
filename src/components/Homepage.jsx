import { ProductProvider } from '../context/ProductContext'
import { useContext } from 'react'
import ProductListing from './ProductListing'
import AddProductsToCart from './AddProductsToCart'


const Homepage = () => {
    return (
        <div className="home-page">
            <ProductProvider>
                <AddProductsToCart/>
                <ProductListing/>
            </ProductProvider>
        </div>

    )
}
export default Homepage;