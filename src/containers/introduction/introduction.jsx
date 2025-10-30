

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../../utils/hooks/index";
import DownloadBtn from "../../components/downloadbtn/downloadbtn";
import MaPhoto from "../../assets/photo/moi.webp";

// Icônes adaptatives selon le thème
import GitHub from "../../assets/icones/github.png";
import DarkGitHub from "../../assets/icones/darkgithub.png";
import LinkedIn from "../../assets/icones/linkedin.png";
import DarkLinkedIn from "../../assets/icones/darklinkedin.png";
import Twitter from "../../assets/icones/twitter.png";
import DarkTwitter from "../../assets/icones/darktwitter.png";

import "../../sass/containers/_introduction.scss";

const Introduction = () => {
  const { darkMode } = useTheme();
  const introRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (introRef.current) observer.observe(introRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="intro" ref={introRef}>
      <div className={`intro__container ${isVisible ? "visible" : ""}`}>
        {/* Texte de présentation */}
        <div className="intro__text">
          <h2 className="intro__title">À propos</h2>

          <p className="intro__paragraph">
            Passionné par les nouvelles technologies, j'ai choisi de me reconvertir
            après des années dans le sport et la logistique.
          </p>
          <p className="intro__paragraph">
            J’ai suivi la formation certifiante d’intégrateur web d’OpenClassrooms,
            où j’ai acquis des compétences solides en HTML, CSS, JavaScript et React.
          </p>
          <p className="intro__paragraph">
            Je suis enthousiaste à l’idée de travailler sur des projets innovants
            et de continuer à développer mes compétences en développement web.
          </p>

          {/* Liens vers les réseaux sociaux */}
          <div className={`intro__socials ${isVisible ? "visible" : ""}`}>
            <a
              href="https://github.com/Fabio1008"
              target="_blank"
              rel="noreferrer"
              aria-label="Profil GitHub"
            >
              <img
                src={darkMode ? DarkGitHub : GitHub}
                alt="Lien vers mon profil GitHub"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/amonk%C3%A9-mongba-739078a9/"
              target="_blank"
              rel="noreferrer"
              aria-label="Profil LinkedIn"
            >
              <img
                src={darkMode ? DarkLinkedIn : LinkedIn}
                alt="Lien vers mon profil LinkedIn"
              />
            </a>

            <a
              href="https://x.com/FMongba"
              target="_blank"
              rel="noreferrer"
              aria-label="Profil Twitter"
            >
              <img
                src={darkMode ? DarkTwitter : Twitter}
                alt="Lien vers mon profil Twitter"
              />
            </a>
          </div>

          {/* Bouton de téléchargement du CV */}
          <a
            href="/CV_Fabrice_MONGBA.pdf"
            className="intro__btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadBtn> Télécharger mon CV </DownloadBtn>
          </a>
        </div>

        {/* Photo et nom */}
        <div className="intro__photo">
          <img src={MaPhoto} alt="Portrait de Fabrice MONGBA" />
          <h3 className="intro__name">Fabrice MONGBA</h3>
          <h4 className="intro__role">Développeur Front-End</h4>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
