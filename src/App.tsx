import "./assets/css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav/Navbar.tsx";
import Home from "./Home.tsx";
import Products from "./Products.tsx";
import Footer from "./components/footer/Footer.tsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
