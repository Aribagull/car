import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import CarList from "./Page/CarList";
import Header from "./Components/Header";
import Footer from "./Page/Footer";
import CarDetail from "./Components/CarDetail";
import ScrollToTop from "./CustomComponents/ScrollToTop";
import About from "./Page/About";
import ServiceDetail from "./Page/ServiceDetail";
import Services from "./Components/ServicesSection";
import ContactSection from "./Components/Contact";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-black font-montserrat">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allcars" element={<CarList />} />
            <Route path="/car/:id" element={<CarDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/contactus" element={<ContactSection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
