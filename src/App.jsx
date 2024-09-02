import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import "./App.css";

/**
 * Componente App
 *
 * Este é o componente principal da aplicação, que inclui as principais seções da página:
 * Home, About, Services, Contact e Footer. Este componente organiza e renderiza
 * todos os outros componentes na estrutura da aplicação.
 *
 * @returns {JSX.Element} O componente App.
 */
const App = () => {
  return (
    <div>
      {/* Componente Home */}
      <Home />
      {/* Componente About */}
      <About />
      {/* Componente Services */}
      <Services />
      {/* Componente Contact */}
      <Contact />
      {/* Componente Footer */}
      <Footer />
    </div>
  );
};

export default App;
