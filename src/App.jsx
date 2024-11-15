import Navbar from "./components/Navbar";
import TestNavbar from "./components/TestNavbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Client from "./pages/Client";
import Gallery from "./pages/Gallery";
import Testimonial from "./pages/Testimonial";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <TestNavbar />
      <Home />
      <About />
      <Client />
      <Gallery />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
