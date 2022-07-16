import { useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import ProductList from "../../components/product-list/ProductList";
import Sidebar from "../../components/sidebar/Sidebar";
import banner from "../../assets/img/menu-banner.jpg";
import {
  all,
  coffee,
  snack,
  tea,
  iceBlended,
  atHome,
} from "../../products-data";

import "./menuPage.scss";

const MenuPage = () => {
  const location = useLocation();
  const categories = location.pathname.split("/")[2];
  let data;
  let heading;

  switch (categories) {
    case "coffee":
      heading = "Cà Phê Việt Nam";
      data = coffee;
      break;
    case "tea":
      heading = "Trà";
      data = tea;
      break;
    case "iceBlended":
      heading = "Đá Xay";
      data = iceBlended;
      break;
    case "snack":
      heading = "Bánh & Snack";
      data = snack;
      break;
    case "atHome":
      heading = "Cà Phê Tại Nhà";
      data = atHome;
      break;
    default:
      heading = "Tất Cả";
      data = all;
  }

  return (
    <Grid container className="menu-page">
      <Grid item className="left" lg={2}>
        <Sidebar />
      </Grid>
      <Grid item className="right" lg={10}>
        <img src={banner} alt="Promo product banner" className="banner" />
        <h2 className="category">{heading}</h2>
        <ProductList data={data} />
      </Grid>
    </Grid>
  );
};

export default MenuPage;
