"use client";
import { IoMdRestaurant } from "react-icons/io";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { useTheme } from "next-themes";

import styles from "./nav-bar.module.css";

const { navBar, lang, logo, btn, btnLogin, btnRegister } = styles;

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className={`${navBar} w-100`}>
      <div className="container d-flex justify-content-between">
        <div>
          <IoMdRestaurant className={logo} />
        </div>
        <div>
          <BsFillBrightnessHighFill onClick={toggleTheme} className={lang} />
          <button className={`${btn} ${btnLogin}`}>login</button>
          <button className={`${btn} ${btnRegister}`}>signup</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
