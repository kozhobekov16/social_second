import React from "react";
import s from './Header.module.css'
const Header = () => {
  return (
    <header>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" className={s.logo} alt=""/>{" "}
    </header>
  );
};
export default Header