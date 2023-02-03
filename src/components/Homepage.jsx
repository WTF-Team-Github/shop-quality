import { ProductProvider } from '../context/ProductContext'
import { useContext } from 'react'
import ProductListing from './ProductListing'
import AddProductsToCart from './AddProductsToCart'
import React from 'react'
import Footer from './Footer/Footer'
import NavBar from './Navbar'



const Homepage = () => {
    return (
        <div className="home-page">
            <ProductProvider>
                <NavBar/>
                <ProductListing/>
            </ProductProvider>
            <div>
              <Footer/>
            </div>
        </div>

    )
}


export default Homepage
