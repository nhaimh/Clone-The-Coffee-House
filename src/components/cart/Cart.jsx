import { useSelector } from "react-redux";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import "./cart.scss";

const Cart = () => {
  const cartQuantity = useSelector((state) => state.cart.quantity);

  return (
    <div className={cartQuantity ? "cart" : "cart empty-cart"}>
      <ShoppingBagIcon className="cart-icon" />
      <div className="cart-quantity">{cartQuantity}</div>
    </div>
  );
};

export default Cart;
