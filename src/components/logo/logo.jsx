import { Link } from "react-router-dom";
import { useTheme } from "../../utils/hooks/index";
import LogoLight from "../../assets/logo/fabrice-mongba-logo.png";
import LogoDark from "../../assets/logo/fabrice-mongba-logol.png";
import "../../sass/components/_logo.scss";

const Logo = () => {
  const { darkMode } = useTheme();

  return (
    <div className="header__logo">
      <Link to="/">
        <div className="logo__medaillon">
          <img
            src={darkMode ? LogoDark : LogoLight}
            alt="Logo Fabrice Mongba"
            className="logo__image"
          />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
