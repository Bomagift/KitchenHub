import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import CheckoutPage from "./Pages/CheckoutPage"
import CartPage from "./Pages/CartPage"
import PaymentPage from "./Pages/PaymentPage";

function App() {
  return (
   
    <Router>
      <Routes> 
        <Route path="/" element={<LandingPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/Pay" element={<PaymentPage/>} />
      </Routes>
    </Router>
  );
}
export default App