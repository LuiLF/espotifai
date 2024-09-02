import React from "react";
import { useInView } from "react-intersection-observer";
import "./About.css";
import { Link } from "react-scroll";
import aboutImage from "../assets/aboutImage.jpeg"; 

/**
 * Componente About
 *
 * Este componente renderiza a seção "Sobre" da aplicação. Inclui uma imagem e texto que são animados quando a seção entra em vista.
 * Utiliza o hook `useInView` da biblioteca `react-intersection-observer` para detectar quando o componente está visível na tela.
 *
 * @returns {JSX.Element} O componente About.
 */
const About = () => {
  // Hook para verificar se o componente está visível na tela
  const { ref, inView } = useInView({
    triggerOnce: true, // Executa a animação apenas uma vez
    threshold: 0.1, // Percentual de visibilidade para disparar a animação
  });

  return (
    <section className="about">
      <div className="about-content" ref={ref}>
        {/* Bloco de texto com animação condicional */}
        <div className={`about-text ${inView ? "animate" : ""}`}>
          <h1>TRANSMITA LIVREMENTE</h1>
          <h2>Sua música, do seu jeito</h2>
          <p>
            A Espotifai oferece uma experiência de streaming de música contínua,
            sem a necessidade de logins ou pagamentos. Desfrute de uma interface
            amigável que se assemelha às suas plataformas de música favoritas,
            permitindo que você toque faixas armazenadas localmente ou transmita
            de fontes públicas sem esforço. Mergulhe em um mundo de música
            adaptado às suas preferências e descubra novos sons com facilidade.
            Sua jornada musical começa aqui!
          </p>
          <Link
            to="contact-section"
            className={`btn-about ${inView ? "animate" : ""}`}
          >
            Entre em contato
          </Link>
        </div>
        {/* Bloco de imagem com animação condicional */}
        <div className={`about-image ${inView ? "animate" : ""}`}>
          <img src={aboutImage} alt="Sobre nós" />
        </div>
      </div>
    </section>
  );
};

export default About;
