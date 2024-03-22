import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./UseContext";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
import { Route, Routes } from "react-router-dom";
import ListProduct from "./component/ListProduct/ListProduct";
import Detail from "./component/Detail/Detail";
import AutoTop from "./component/AutoTop/AutoTop";
import Cart from "./component/Cart/Cart";
import Checkout from "./component/Checkout/Checkout";

function App() {
  return (
    <>
      <ToastContainer />
      <CartProvider>
        <AutoTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list-product" element={<ListProduct />} />
          <Route path="/detail/:slug" element={<Detail />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
