import React from "react";
import { useInView } from "react-intersection-observer";
import "./Services.css";
import aboutImage from "../assets/aboutImage.jpeg"; 
import serviceImage1 from "../assets/serviceImage1.jpeg";
import serviceImage3 from "../assets/serviceImage3.jpeg";

/**
 * Componente Services
 *
 * Este componente renderiza a seção de serviços da aplicação, apresentando uma lista de serviços oferecidos.
 * Utiliza o hook `useInView` da biblioteca `react-intersection-observer` para animar os elementos quando entram em vista.
 *
 * @returns {JSX.Element} O componente Services.
 */
const Services = () => {
  // Hook para verificar se o texto está visível na tela
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true, // Executa a animação apenas uma vez
    threshold: 0.1, // Percentual de visibilidade para disparar a animação
  });

  // Hook para verificar se os cartões de serviço estão visíveis na tela
  const { ref: cardsRef, inView: cardsInView } = useInView({
    triggerOnce: true, // Executa a animação apenas uma vez
    threshold: 0.1, // Percentual de visibilidade para disparar a animação
  });

  return (
    <section className="services">
      {/* Título da seção com animação condicional */}
      <h1 className={textInView ? "animate" : ""} ref={textRef}>
        O que oferecemos
      </h1>
      {/* Subtítulo da seção com animação condicional */}
      <h2 className={textInView ? "animate" : ""} ref={textRef}>
        Experiência musical incomparável
      </h2>
      <div
        className={`services-cards ${cardsInView ? "animate" : ""}`}
        ref={cardsRef}
      >
        {/* Cartão de serviço 1 */}
        <div className="card">
          <img src={serviceImage1} alt="Stream music instantly" />
          <div className="card-content">
            <h3>
              Transmita música instantaneamente{" "}
              <span className="symbol">&gt;</span>
            </h3>
            <p>
              Desfrute de streaming de música contínuo, sem necessidade de login
              ou pagamento.
            </p>
          </div>
        </div>

        {/* Cartão de serviço 2 */}
        <div className="card">
          <img src={aboutImage} alt="Access local and public music" />
          <div className="card-content">
            <h3>
              Acesse músicas locais e públicas{" "}
              <span className="symbol">&gt;</span>
            </h3>
            <p>
              Descubra e toque tanto fontes de música locais quanto públicas.
            </p>
          </div>
        </div>

        {/* Cartão de serviço 3 */}
        <div className="card">
          <img src={serviceImage3} alt="User-Friendly interface" />
          <div className="card-content">
            <h3>
              Interface amigável <span className="symbol">&gt;</span>
            </h3>
            <p>Navegue facilmente com um design intuitivo e familiar.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
