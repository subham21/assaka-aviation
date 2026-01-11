import { About } from "./components/About";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Team } from "./components/Team";
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
    <>
      <Navbar />
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
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
