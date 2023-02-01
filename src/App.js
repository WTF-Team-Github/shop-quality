import { ProductProvider } from './context/ProductContext';
import ProductListing from './components/ProductListing';
import AddProductsToCart from './components/AddProductsToCart';
import './App.css';

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <AddProductsToCart/>
        <ProductListing />
      </ProductProvider>
    </div>
  );
}

export default App;
