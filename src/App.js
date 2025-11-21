import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Interior from "./pages/Interior";
import Construction from "./pages/Construction";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import PropertyNatureValley from "./pages/PropertyNatureValley";
import PropertySereneCity from "./pages/PropertySereneCity";
import PropertySereneCounty1 from "./pages/PropertySereneCounty1";
import PropertySereneCounty from "./pages/PropertySereneCounty";
import PropertyPride from "./pages/PropertyPride";
import PropertyHarmonyWoods from "./pages/PropertyHarmonyWoods";
import PropertyPristineCity from "./pages/PropertyPristineCity";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/interior" element={<Interior />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/property/jbs-nature-valley" element={<PropertyNatureValley />} />
          <Route path="/property/jbs-serene-city" element={<PropertySereneCity />} />
          <Route path="/property/jb-serene-county-1" element={<PropertySereneCounty1 />} />
          <Route path="/property/jbs-serene-county" element={<PropertySereneCounty />} />
          <Route path="/property/jbs-pride" element={<PropertyPride />} />
          <Route path="/property/jbs-harmony-woods" element={<PropertyHarmonyWoods />} />
          <Route path="/property/jbs-pristine-city" element={<PropertyPristineCity />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
