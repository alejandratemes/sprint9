import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header"
import ProductInfo from "./components/ProductInfo/ProductInfo";
import { Container } from "./AppStyled";
import { GlobalStyle } from "./Styles/GlobalStyles";
import FilteredList from "./components/FilteredList/FilteredList"
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/LogIn";
import { AuthProvider} from "./services/authContext";
import React from "react";
import Cart from "./components/Cart/Cart";
import CheckOut from "./components/Checkout/CheckOut";
import { CartProvider } from "./components/Cart/CartContext";

function App() {
  return (
    <React.StrictMode>
      <AuthProvider>
      <CartProvider>
        <Container>
            <GlobalStyle/>
            <Router>
                <Header/>
                <Routes>
                  <Route path="/home" element={<Home/>}/>
                  <Route path="/product/:productId" element={<ProductInfo/>} />
                  <Route path="/categories/:categoryName" element={<FilteredList/>} />
                  <Route path="/signup" element={<SignUp/>} />
                  <Route path="/" element={<LogIn/>} />
                  <Route path="/cart" element={<Cart/>} />
                  <Route path="/checkout" element={<CheckOut/>} />
                </Routes>
                <Footer/>
            </Router>
        </Container>
      </CartProvider>
      </AuthProvider>
    </React.StrictMode>
  );
}

export default App;
/*
import Payment from "./components/Payment";

        <Route path="/payment" component={Payment} />*/