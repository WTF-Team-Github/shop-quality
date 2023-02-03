import Homepage from "./components/Homepage"
import ChoosePaymentMethodList from "./components/Payments/ChoosePaymentMethodList";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNewCard from "./components/Cards/AddNewCard";
import ExistingCards from "./components/Cards/ExistingCards"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Homepage/>}></Route>
        <Route path="/choose-payment" element={<ChoosePaymentMethodList />} />
        <Route path="new-card" element={<AddNewCard />} />
        <Route path="cards" element={<ExistingCards />} />
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

export default App
