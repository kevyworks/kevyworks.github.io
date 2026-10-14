import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Products from "./components/Products";
import Experience from "./components/Experience";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Products />
        <Experience />
        <About />
      </main>
      <Footer />
    </>
  );
}