import React, { useEffect, useState, useRef } from "react";
import "../../sass/containers/_accueil.scss";

const Accueil = () => {
  const [showText, setShowText] = useState(false);
  const subtitleRef = useRef(null);

  // Apparition du contenu
  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Typing effect
  useEffect(() => {
    const text = "Je suis Fabrice MONGBA, Développeur Front-End";
    let i = 0;
    if (subtitleRef.current) subtitleRef.current.textContent = "";

    const typing = setInterval(() => {
      if (i < text.length && subtitleRef.current) {
        subtitleRef.current.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);

    return () => clearInterval(typing);
  }, []);

  return (
    <section className="accueil">
      {/* Fond animé */}
      <div className="accueil__background">
        <div className="accueil__waves"></div>

        {/* Nuages flottants */}
        <div className="accueil__clouds">
          {[...Array(10)].map((_, i) => (
            <span key={i} style={{ "--i": i }}></span>
          ))}
        </div>
      </div>

      {/* Contenu */}
      <div className={`accueil__content ${showText ? "visible" : ""}`}>
        <h1 className="accueil__title">
          Bienvenue dans mon <span>Portfolio</span>
        </h1>
        <p className="accueil__subtitle" ref={subtitleRef}></p>
        <a href="/apropos" className="accueil__btn">
          Découvrir
        </a>
      </div>
    </section>
  );
};

export default Accueil;
