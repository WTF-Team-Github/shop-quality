import Homepage from "./components/Homepage";
import ChoosePaymentMethodList from "./components/Payments/ChoosePaymentMethodList";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNewCard from "./components/Cards/AddNewCard";
import ExistingCards from "./components/Cards/ExistingCards";
import { CardContextProvider } from "./store/new-card-context";

function App() {
  return (
    <CardContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Homepage />}></Route>
          <Route
            path="choose-payment"
            element={<ChoosePaymentMethodList />}
          ></Route>
          <Route path="new-card" element={<AddNewCard />} />
          <Route path="cards" element={<ExistingCards />} />
        </Routes>
      </BrowserRouter>
    </CardContextProvider>
  );
}

export default App;
