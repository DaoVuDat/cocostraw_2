import React from "react";

import "./Header.scss";

import Logo from "../../assets/logo/logo-header.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo-container">
        <img className="header__logo" src={Logo} alt="header logo" />
      </div>
      <div className="header__list-container">
        <ul className="header__list">
          <li>TRANG CHỦ</li>
          <li>SẢN PHẨM</li>
          <li>VỀ CHÚNG TÔI</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
