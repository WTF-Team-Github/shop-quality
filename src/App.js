import PaymentMethodList from "./components/Payments/PaymentMethodList";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNewCard from "./components/Cards/AddNewCard";
import ExistingCards from "./components/Cards/ExistingCards";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<PaymentMethodList />}></Route>
        <Route path="new-card" element={<AddNewCard />} />
        <Route path="cards" element={<ExistingCards />} />
        {/* <Route path="/cards">
          <PaymentMethodList />
        </Route> */}
        {/* <Route path="/add-card" >
          <PaymentMethodList />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
