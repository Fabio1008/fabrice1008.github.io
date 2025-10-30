import { Link } from "react-router-dom";
import DarkMode from "../darkmode/darkmode";
import LinkStyle from "../../utils/style/linkstyle";
import "../../sass/components/_menu.scss";

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <LinkStyle />

        <li>
          <Link className="menu__link" to="/apropos">
            À propos
          </Link>
        </li>
        <li>
          <Link className="menu__link" to="/competences">
            Compétences
          </Link>
        </li>
        <li>
          <Link className="menu__link" to="/projets">
            Projets
          </Link>
        </li>
        <li>
          <Link className="menu__link" to="/contact">
            Contact
          </Link>
        </li>
        <li className="menu__darkmode">
          <DarkMode />
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
