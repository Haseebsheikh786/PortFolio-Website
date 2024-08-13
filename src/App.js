import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Experience from "./Experience/Experience";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Header />
      <main>
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </React.Fragment>
  );
}

export default App;
