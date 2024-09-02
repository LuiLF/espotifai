import React from "react";
import { useInView } from "react-intersection-observer";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

/**
 * Componente Contact
 *
 * Este componente renderiza a seção de contato da aplicação. Inclui um formulário para que os usuários possam entrar em contato,
 * bem como informações adicionais de contato. Utiliza o hook `useInView` da biblioteca `react-intersection-observer` para
 * animar os elementos quando entram em vista.
 *
 * @returns {JSX.Element} O componente Contact.
 */
const Contact = () => {
  // Hook para verificar se o formulário está visível na tela
  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true, // Executa a animação apenas uma vez
    threshold: 0.1, // Percentual de visibilidade para disparar a animação
  });

  // Hook para verificar se a seção de informações está visível na tela
  const { ref: infoRef, inView: infoInView } = useInView({
    triggerOnce: true, // Executa a animação apenas uma vez
    threshold: 0.1, // Percentual de visibilidade para disparar a animação
  });

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Container do formulário com animação condicional */}
        <div
          className={`form-container ${formInView ? "animate" : ""}`}
          ref={formRef}
        >
          <h1>FALE CONOSCO</h1>
          <h2>Queremos ouvir de você!</h2>
          <form>
            <label htmlFor="name">
              Nome <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Lui"
              required
            />

            <label htmlFor="email">
              E-mail <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="lui@gmail.com"
              required
            />

            <label htmlFor="phone">
              Telefone <span className="required">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+55 (16)99999-9999"
              required
            />

            <label htmlFor="message">Mensagem</label>
            <textarea id="message" name="message" rows="6"></textarea>

            <div className="checkbox-container">
              <input type="checkbox" id="consent" name="consent" required />
              <label htmlFor="consent">
                Eu autorizo este site a armazenar minha submissão para que eles
                possam responder à minha consulta.
                <span className="required">*</span>
              </label>
            </div>

            <button type="submit" className="submit-button">
              ENVIAR
            </button>
          </form>
        </div>

        {/* Container de informações com animação condicional */}
        <div
          className={`info-container ${infoInView ? "animate" : ""}`}
          ref={infoRef}
        >
          <h2>Entre em contato</h2>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> <a href="#">lui@gmail.com</a>
          </p>
          <h3>Localização</h3>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
            <a href="#">São Paulo, Brasil</a>
          </p>
          <h3>Horário de funcionamento</h3>
          <ul>
            <li>Segunda-feira - 09:00 até 22:00</li>{" "}
            <li>Terça-feira - 09:00 até 22:00</li>{" "}
            <li>Quarta-feira 09:00 até 22:00</li>{" "}
            <li>Quinta-feira - 09:00 até 22:00</li>{" "}
            <li>Sexta-feira 09:00 até 22:00</li>{" "}
            <li>Sábado - 09:00 até 18:00</li> <li>Domingo 09:00 até 12:00</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
