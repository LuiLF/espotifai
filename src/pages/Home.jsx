import React from "react";
import Header from "../components/Header";
import { Link } from "react-scroll";
import "./Home.css";

/**
 * Componente Home
 *
 * Este componente representa a página inicial da aplicação. Inclui o cabeçalho (`Header`) e uma seção principal
 * com um herói que apresenta o título e uma descrição do serviço. Também inclui um botão de chamada para ação
 * que permite navegar para a seção de serviços da página.
 *
 * @returns {JSX.Element} O componente Home.
 */
const Home = () => {
  return (
    <div>
      {/* Componente Header que representa o cabeçalho da página */}
      <Header />
      <main className="main-content">
        <section className="hero">
          <div className="overlay">
            <div className="content">
              {/* Título principal da seção hero */}
              <h1 className="title">Espotifai</h1>
              {/* Subtítulo com uma breve descrição */}
              <p className="subtitle">
                Um negócio orientado por resultados, dedicado a ajudar os
                clientes a alcançar seus objetivos.
              </p>
              {/* Link para a seção de serviços com rolagem suave */}
              <Link to="services" className="cta-button">
                VER SERVIÇOS
              </Link>
            </div>
          </div>
        </section>
        {/* Outras seções do site podem ser adicionadas aqui */}
      </main>
    </div>
  );
};

export default Home;
