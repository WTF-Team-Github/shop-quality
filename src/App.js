import Homepage from "./components/Homepage";
import ChoosePaymentMethodList from "./components/Payments/ChoosePaymentMethodList";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNewCard from "./components/Cards/AddNewCard";
import ExistingCards from "./components/Cards/ExistingCards";
import AddShippingAddress from "./components/AddShippingAddress/AddShippingAddress";
import ShippingAddressList from "./components/ShippingAddressList/ShippingAddressList";
import Checkout from "./components/Checkout/Checkout";
import { useState } from "react";
function App() {
  const [activeAddress, setActiveAddress] = useState(null);
  console.log(activeAddress);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Homepage />}></Route>
        <Route path="/choose-payment" element={<ChoosePaymentMethodList />} />
        <Route path="new-card" element={<AddNewCard />} />
        <Route path="cards" element={<ExistingCards />} />
        <Route path="shipping-address" element={<AddShippingAddress />} />
        <Route
          path="shipping-address-list"
          element={<ShippingAddressList setActiveAddress={setActiveAddress} />}
        />
        <Route
          path="checkout"
          element={<Checkout activeAddress={activeAddress} />}
        />

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
