import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <h1 className="header" onClick={() => window.scrollTo(0, 0)}>
      Entertainment
      <span className="highlight">
        <b>Finder</b>
      </span>
    </h1>
  );
};

export default Header;
