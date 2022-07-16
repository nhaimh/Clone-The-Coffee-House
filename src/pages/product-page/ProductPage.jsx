import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Container } from "@mui/material";
import {
  AddCircle,
  RemoveCircle,
  ShoppingCart,
  Store,
} from "@mui/icons-material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import CoffeeIcon from "@mui/icons-material/Coffee";
import { ThemeProvider } from "@mui/material";
import { useLocation } from "react-router-dom";
import theme from "../../theme";
import {
  all,
  coffee,
  snack,
  tea,
  iceBlended,
  atHome,
} from "../../products-data";
import { addProduct } from "../../redux/cartRedux";

import "./productPage.scss";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});
  const location = useLocation();
  const dispatch = useDispatch();

  const categories = location.pathname.split("/")[1];
  const productId = location.pathname.split("/")[2];
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

  useEffect(() => {
    data.map((item) => {
      if (item.id === Number(productId)) {
        setProduct(item);
      }
    });
  }, [data, productId, product]);

  const handleQuantity = (type) => {
    if (type === "inc") {
      setQuantity((prev) => prev + 1);
    } else if (type === "dec" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleSizeClassname = (size) => {
    switch (size) {
      case "Nhỏ":
        return "icon sm";
      case "Vừa":
        return "icon md";
      case "Lớn":
        return "icon lg";
      default:
        return "icon";
    }
  };

  const { name, price, salePrice, img, id } = product;

  const handleClick = () => {
    dispatch(addProduct({ name, price, salePrice, img, quantity }));
    console.log("add to cart", id, name);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" className="container">
        <Breadcrumbs aria-label="breadcrumb" className="breadcrumb">
          <Link color="inherit" href="/menu/all" className="breadcrumb-link">
            Menu
          </Link>
          <Link
            color="inherit"
            href={`/menu/${product.cate}`}
            className="breadcrumb-link"
          >
            {heading}
          </Link>
          <p className="breadcrumb-current">Product</p>
        </Breadcrumbs>
        <div className="product-info">
          <div className="left">
            <img
              src={`/image/${product.img}`}
              alt={`product's thumbnail`}
              className="img"
            />
          </div>
          <div className="right">
            <h1 className="heading">{product.name}</h1>
            <p className="price">
              {product.salePrice ? product.salePrice : product.price}.000đ
            </p>
            <div className="quantity-container">
              <h3>Số lượng:</h3>
              <div className="quantity-wrapper">
                <RemoveCircle
                  className="icon"
                  onClick={() => {
                    handleQuantity("dec");
                  }}
                />
                <p className="quantity">{quantity}</p>
                <AddCircle
                  className="icon"
                  onClick={() => {
                    handleQuantity("inc");
                  }}
                />
              </div>
            </div>
            {product.size ? (
              <div className="size">
                <h3>Kích thước:</h3>
                {product.size.map((size, index) => {
                  return (
                    <Button
                      variant="contained"
                      className="size-btn"
                      key={index}
                    >
                      <CoffeeIcon className={handleSizeClassname(size)} />
                      <p>{size}</p>
                    </Button>
                  );
                })}
              </div>
            ) : null}
            <div className="cart-wrapper">
              <Button
                variant="contained"
                className="cart-btn"
                onClick={handleClick}
              >
                <ShoppingCart className="icon" />
                <p>Thêm vào giỏ hàng</p>
              </Button>
              <Button
                variant="contained"
                className="cart-btn"
                color="secondary"
              >
                <Store className="icon" />
                <p>Mua tại cửa hàng</p>
              </Button>
            </div>
          </div>
        </div>
        <div className="product-desc">
          <div className="left">
            <h2>Thông Tin</h2>
            <p className="desc">{product.desc}</p>
          </div>
          <div className="right">
            <h2>Câu Chuyện</h2>
            <h3 className="story-header">{product.story}</h3>
            <p className="desc">{product.story}</p>
            <p className="more">Xem thêm</p>
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default ProductPage;
