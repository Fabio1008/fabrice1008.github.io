import React, { useEffect, useState } from "react";
import "../../sass/containers/_accueil.scss";

const Accueil = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="accueil">
      <div className={`accueil__content ${showText ? "visible" : ""}`}>
        <h1 className="accueil__title">
          Bienvenue dans mon <span>Portfolio</span>
        </h1>
        <p className="accueil__subtitle">
          Je suis Fabrice MONGBA, Développeur Front-End
        </p>
        <a href="/#a-propos" className="accueil__btn">
          Découvrir
        </a>
      </div>
    </section>
  );
};

export default Accueil;
