import {  useState } from "react";
import { Link } from "react-router-dom";
//import CoffeeIcon from "@mui/icons-material/Coffee";

import "./sidebar.scss";

const Sidebar = () => {
  const [category, setCategory] = useState("all");

  // useEffect(() => {
  //   const handleClick = (e) => {
  //     console.log(e.target.id);
  //   };
  // });

  console.log(category);

  return (
    <ul className="sidebar">
      <Link
        to={`/menu/${category}`}
        className={category === "all" ? "category active" : "category"}
        onClick={(e) => setCategory(e.target.id)}
      >
        {/* <CoffeeIcon className="coffee-icon" /> */}
        <p id="all">Tất cả</p>
      </Link>
      <Link
        to={`/menu/${category}`}
        className={category === "coffee" ? "category active" : "category"}
        onClick={(e) => setCategory(e.target.id)}
      >
        <p id="coffee">Cà phê</p>
        {/* <li className="sub-category">Cà phê Việt Nam</li>
        <li className="sub-category">Cà phê máy</li>
      <li className="sub-category">Cold Brew</li> */}
      </Link>
      <Link
        to={`/menu/${category}`}
        className={category === "tea" ? "category active" : "category"}
        onClick={(e) => setCategory(e.target.id)}
      >
        <p id="tea">Trà</p>
        {/* <li className="sub-category">Trà trái cây</li>
        <li className="sub-category">Trà sữa Macchiato</li> */}
      </Link>
      <Link
        to={`/menu/${category}`}
        className={category === "iceBlended" ? "category active" : "category"}
        onClick={(e) => setCategory(e.target.id)}
      >
        <p id="iceBlended">Đá xay</p>
        {/* <li className="sub-category">Đá xay</li>
        <li className="sub-category">Matcha - Chocolate</li> */}
      </Link>
      <Link
        to={`/menu/${category}`}
        className={category === "snack" ? "category active" : "category"}
        onClick={(e) => setCategory(e.target.id)}
      >
        <p id="snack">Bánh & Snack</p>
        {/* <li className="sub-category">Bánh mặn</li>
        <li className="sub-category">Bánh ngọt</li>
        <li className="sub-category">Snack</li> */}
      </Link>
      <Link
        to={`/menu/${category}`}
        className={category === "atHome" ? "category active" : "category"}
        onClick={(e) => setCategory(e.target.id)}
      >
        <p id="atHome">Tại nhà</p>
        {/* <li className="sub-category">Cà phê tại nhà</li>
        <li className="sub-category">Trà tại nhà</li> */}
      </Link>
    </ul>
  );
};

export default Sidebar;
