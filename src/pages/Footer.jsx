import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";

/**
 * Componente Footer
 *
 * Este componente renderiza o rodapé da aplicação, incluindo botões para navegação e ações adicionais.
 * Utiliza a biblioteca `react-scroll` para criar links de navegação suave.
 *
 * @returns {JSX.Element} O componente Footer.
 */
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="button-container">
          {/* Link para a seção de serviços */}
          <Link to="services" className="button">
            Serviços
          </Link>
          {/* Botão para agendar uma consulta */}
          <button className="button">Agendar consulta</button>
          {/* Botão para concluir o cadastro */}
          <button className="button">Concluir cadastro</button>
          {/* Link para a seção de contato */}
          <Link to="contact-section" className="button">
            Contato
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
