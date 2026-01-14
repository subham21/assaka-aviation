
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { About } from "./components/About";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Team } from "./components/Team";
import WhatsappButton from "./components/Whatsapp-button";
import ContactPage from "./components/pages/ContactPage";
// import { Sponsors } from "./components/Sponsors";
// import { Newsletter } from "./components/Newsletter";
// import { Pricing } from "./components/Pricing";
// import { HowItWorks } from "./components/HowItWorks";
// import { Features } from "./components/Features";
// import { Cta } from "./components/Cta";
// import { Testimonials } from "./components/Testimonials";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={
        <>  
        <Hero />
        {/* <Sponsors /> */}
        <About />
        {/* <HowItWorks />
        <Features /> */}
        <Services />
        {/* <Cta />
        <Testimonials /> */}
        <Team />
        {/* <Pricing />
        <Newsletter /> */}
        <FAQ />
        </>
      } />
     
      
      <Route path="/contact" element={<ContactPage />} />

      </Routes>
      <WhatsappButton />
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
