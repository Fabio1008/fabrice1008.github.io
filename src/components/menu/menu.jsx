import { NavLink } from "react-router-dom";
import DarkMode from "../darkmode/darkmode";
import LinkStyle from "../../utils/style/linkstyle";
import "../../sass/components/_menu.scss";

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <LinkStyle />

        <li>
          <NavLink
            to="/apropos"
            className={({ isActive }) =>
              isActive ? "menu__link active" : "menu__link"
            }
          >
            À propos
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/competences"
            className={({ isActive }) =>
              isActive ? "menu__link active" : "menu__link"
            }
          >
            Compétences
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/projets"
            className={({ isActive }) =>
              isActive ? "menu__link active" : "menu__link"
            }
          >
            Projets
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "menu__link active" : "menu__link"
            }
          >
            Contact
          </NavLink>
        </li>

        <li className="menu__darkmode">
          <DarkMode />
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
