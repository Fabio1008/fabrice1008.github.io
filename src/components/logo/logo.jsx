import { Link } from "react-router-dom";
import { useTheme } from "../../utils/hooks/index";
import LogoLight from "../../assets/logo/fabrice-mongba-logo.png"; // Logo clair
import LogoDark from "../../assets/logo/fabrice-mongba-logol.png";  // Logo sombre (peut être le même si tu n’en as qu’un)
import "../../sass/components/_logo.scss";

const Logo = () => {
  const { darkMode } = useTheme();

  return (
    <div className="header__logo">
      <Link to="/">
        <img
          src={darkMode ? LogoDark : LogoLight}
          alt="Logo Fabrice Mongba"
          className="logo-image"
        />
        <span className="logo-text">Fabrice Mongba</span>
      </Link>
    </div>
  );
};

export default Logo;

