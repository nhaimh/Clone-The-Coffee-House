import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/img/logo.png";

import "./navbar.scss";
import Cart from "../cart/Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <MenuIcon className="menu-icon" onClick={() => setOpen(!open)} />
      <div className="left">
        <Link to="/" className="link">
          <img src={logo} alt="logo " className="logo" />
        </Link>
      </div>
      <div className={open ? "center open" : "center"}>
        <CloseIcon className="close-btn" onClick={() => setOpen(!open)} />
        <div className="links">
          <Link to="/menu/all" className="link">
            Menu
          </Link>
          <Link to="/blogs" className="link">
            Chuyện Cà phê và Trà
          </Link>
          <Link to="/store" className="link">
            Cửa hàng
          </Link>
          <Link to="/hiring" className="link">
            Tuyển dụng
          </Link>
        </div>
      </div>
      <div className="right">
        <Link to="/checkout">
          <Cart />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
