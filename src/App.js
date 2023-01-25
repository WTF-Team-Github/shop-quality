import { ProductProvider } from './context/ProductContext';
import ProductListing from './ProductListing';
import './App.css';

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <ProductListing />
      </ProductProvider>
    </div>
  );
}

export default App;
