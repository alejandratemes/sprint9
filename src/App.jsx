import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header"
import ProductInfo from "./components/ProductInfo/ProductInfo";
import { Container } from "./AppStyled";
import { GlobalStyle } from "./Styles/GlobalStyles";
import FilteredList from "./components/FilteredList/FilteredList"
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <Container>
        <GlobalStyle/>
        <Router>
            <Header/>
            <Routes>
              <Route path="/home" element={<Home/>}/>
              <Route path="/product/:productId" element={<ProductInfo/>} />
              <Route path="/categories/:categoryName" element={<FilteredList/>} />
              <Route path="/" element={<LogIn/>} />
              <Route path="/signup" element={<SignUp/>} />
            </Routes>
            <Footer/>
        </Router>
    </Container>
  );
}

export default App;
/*
import Cart from "./components/Cart";
import Login from "./components/LogIn";
import PremiumContent from "./components/PremiumContent";
import Payment from "./components/Payment";

        <Route path="/cart" component={Cart} />
        <Route path="/premium" component={PremiumContent} />
        <Route path="/payment" component={Payment} />*/