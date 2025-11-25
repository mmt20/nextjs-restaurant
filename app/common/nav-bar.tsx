"use client";
import { IoMdRestaurant } from "react-icons/io";
import "../style/navbar.css";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { useTheme } from "next-themes";
const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <nav className="nav-bar w-100">
      <div className="container d-flex justify-content-between">
        <div>
          <BsFillBrightnessHighFill onClick={toggleTheme} className="lang" />
          <button className="btn-login">login</button>
          <button className="btn-register">signup</button>
        </div>
        <div>
          <IoMdRestaurant className="logo" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
