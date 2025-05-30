import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import CategoryPage from "./Components/ProductPage";
import AllProductsPage from "./Components/AllProducts";
import Footer from "./Components/Footer";
import CartPage from "./Components/CartPage";
import { CartProvider } from "./Context/CartContext"; 
import ProductDetail from "./Components/ProductDetail";
import Accessories from "./Page/Accessories";
import ShopAllProducts from "./Page/ShopAllProduct";
import TermsAndConditions from "./Page/TermsOfService";
import AboutUs from "./Page/AboutUs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactUs from "./Page/ContactUs";
import Features from "./Components/Features";
import LastSection from "./Components/LastSetion";
import Reviwes from "./Components/Reviews";
import ScrollToTop from "./Context/ScrollToTop";

function App() {
  
  return (
    <CartProvider>
      <BrowserRouter>
       <ScrollToTop/>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          closeButton={false}
          hideProgressBar={true}
        />

        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Features/>
                <CategoryPage />
                <Reviwes/>
               
                
              </>
            }
          />
          <Route path="/category/:categoryName" element={<AllProductsPage />} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/product/:id" element={<ProductDetail/>} />
          <Route path="/accessories" element={<Accessories/>} />
          <Route path="/shop" element={<ShopAllProducts/>} />
          <Route path="/termsOfService" element={<TermsAndConditions/>} />
          <Route path="/aboutUs" element={<AboutUs/>} />
          <Route path="/contactUs" element={<ContactUs/>} />
        </Routes>
         <LastSection/>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
