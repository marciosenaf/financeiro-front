import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import { GiMoneyStack } from "react-icons/gi"
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink";

const Home = () => {
  return (
    <div className="home">
      <nav className="container  ">


      </nav>
      <section className="container hero">
        <div className="hero-text">
          <h2 className="title__home">Controle {"&"} Sistema de empréstimo monetário</h2>
          <p className="description__home">
          Sistema de empréstimo para controlar
          e gerir os empréstimo financeiro em tempo
          real e integrado para facilitar o
          desenvolvimento do seu negócio.
          </p>
          <ShowOnLogin>
            <div className="hero-buttons">
              <Link to="/inventory">
                <button className="--btn botao-home">
                  Entrar
                </button>
                </Link>
                
            </div>
          </ShowOnLogin>
          <ShowOnLogout>
            <div className="hero-buttons">
            <Link to="/login">
              <button className="--btn botao-home">
                Login
              </button>
              </Link>
            </div>
          </ShowOnLogout>
        </div>

        <div className=" hero-image">
          <GiMoneyStack />
        </div>
      </section>
    </div>
  );
};
export default Home;
