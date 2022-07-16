import { Link } from "react-router-dom";

import "./product.scss";

const Product = ({ id, name, price, salePrice, img, cate }) => {
  return (
    <div className="product">
      <Link to={`/${cate}/${id}`}>
        <img
          src={"/image/" + img}
          alt={`${name}'s thumbnail`}
          className="img"
        />
      </Link>
      <div className="info">
        <Link to={`/${cate}/${id}`} className="link">
          <p className="name">{name}</p>
        </Link>
        {salePrice ? (
          <>
            <p className="price">{salePrice}.000đ</p>
            <p className="price sale">{price}.000đ</p>
          </>
        ) : (
          <p className="price">{price}.000đ</p>
        )}
      </div>
    </div>
  );
};

export default Product;
