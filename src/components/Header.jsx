import React from "react";
import { Link } from "react-scroll";
import "./Header.css";

/**
 * Componente Header
 *
 * Este componente renderiza o cabeçalho da aplicação com o nome do site e uma barra de navegação.
 * Utiliza a biblioteca `react-scroll` para navegação suave entre seções da página.
 *
 * @returns {JSX.Element} O componente Header.
 */
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        {/* Link para a seção principal do conteúdo */}
        <Link to="main-content" smooth={true} duration={1500} className="logo">
          ESPOTIFAI
        </Link>
        <nav className="nav">
          {/* Link para a seção de início */}
          <Link
            to="main-content"
            smooth={true}
            duration={1500}
            className="nav-button"
          >
            Inicio
          </Link>
          {/* Link para a seção sobre */}
          <Link to="about" smooth={true} duration={1500} className="nav-button">
            Sobre
          </Link>
          {/* Link para a seção de serviços */}
          <Link
            to="services"
            smooth={true}
            duration={1500}
            className="nav-button"
          >
            Serviços
          </Link>
          {/* Link para a seção de contato */}
          <Link
            to="contact-section"
            smooth={true}
            duration={1500}
            className="contact-button"
          >
            CONTATO
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
