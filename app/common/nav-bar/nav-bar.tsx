"use client";
import { IoMdRestaurant } from "react-icons/io";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { useTheme } from "next-themes";

import styles from "./nav-bar.module.css";
import Link from "next/link";

const { navBar, lang, logo, btn, btnLogin, btnRegister } = styles;

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className={`${navBar} w-100`}>
      <div className="container d-flex justify-content-between">
        <Link href={"/"} style={{ textDecoration: "none" }}>
          <IoMdRestaurant className={logo} />
        </Link>

        <div>
          <BsFillBrightnessHighFill onClick={toggleTheme} className={lang} />
          <Link href="login">
            <button className={`${btn} ${btnLogin}`}>login</button>
          </Link>
          <Link href="signup">
            <button className={`${btn} ${btnRegister}`}>signup</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
