import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Products from "./components/Products";
import Experience from "./components/Experience";
import About from "./components/About";
import Footer from "./components/Footer";
// import Seo, { homeLd } from "./components/Seo";

export default function App() {
  return (
    <>
      {/* <Seo 
        title="Kevinralph Tenorio — Full-Stack Web Developer"
        description="Kevinralph Tenorio — Full-Stack Web Developer. React, Laravel, APIs, cloud, WordPress and product-focused web development."
        path="/"
        jsonLd={homeLd}
      /> */}
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