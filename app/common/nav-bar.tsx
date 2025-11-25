import { IoMdRestaurant } from "react-icons/io";
import "../style/navbar.css";
import { BsFillBrightnessHighFill } from "react-icons/bs";
const Navbar = () => {
  return (
    <nav className="nav-bar w-100">
      <div className="container d-flex justify-content-between">
        <div>
          <BsFillBrightnessHighFill className="lang" />
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
