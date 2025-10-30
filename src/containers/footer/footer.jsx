import { Link } from "react-router-dom";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import "../../sass/containers/_footer.scss";

const Footer = () => {
  // Fait remonter la page avant navigation
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__links-left">
          <Link className="footer__link-home" to="/" onClick={handleClick}>
            Accueil
          </Link>
        </div>

        <p className="footer__text">
          © {new Date().getFullYear()} <strong>Fabrice MONGBA</strong> — Tous droits réservés
        </p>

        <div className="footer__links">
          <a
            href="mailto:amonkefabrice@gmail.com"
            className="footer__link"
            aria-label="Envoyer un email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/Fabio1008"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Voir mon GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
