import { Link } from "react-router-dom";
import { useTheme } from "../../utils/hooks/index";
import LogoLight from "../../assets/logo/light.png";
import LogoDark from "../../assets/logo/dark.png";
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
