import ChoosePaymentMethodList from "./components/Payments/ChoosePaymentMethodList";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNewCard from "./components/Cards/AddNewCard";
import ExistingCards from "./components/Cards/ExistingCards";
import AddShippingAddress from "./components/AddShippingAddress/AddShippingAddress";
import ShippingAddressList from "./components/ShippingAddressList/ShippingAddressList";
import Checkout from "./components/Checkout/Checkout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<ChoosePaymentMethodList />}></Route>
        <Route path="new-card" element={<AddNewCard />} />
        <Route path="cards" element={<ExistingCards />} />
        <Route path="shipping-address" element={<AddShippingAddress />} />
        <Route path="shipping-address-list" element={<ShippingAddressList />} />
        <Route path="checkout" element={<Checkout />} />

        {/* <Route path="/cards">
          <ChoosePaymentMethodList />
        </Route> */}
        {/* <Route path="/add-card" >
          <ChoosePaymentMethodList />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
