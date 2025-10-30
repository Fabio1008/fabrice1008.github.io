import React from "react";
import Logo from "../../components/logo/logo";
import Menu from "../../components/menu/menu";
import "../../sass/containers/_header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <Menu />
      </div>
    </header>
  );
};

export default Header;
