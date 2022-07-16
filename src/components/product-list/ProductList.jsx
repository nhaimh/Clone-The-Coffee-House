import Product from "../product-item/Product";
import Grid from "@mui/material/Grid";

import "./productList.scss";

const ProductList = ({ data }) => {
  return (
    <Grid container>
      {data.map((product, index) => {
        return (
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Product
              key={index}
              id={product.id}
              name={product.name}
              price={product.price}
              salePrice={product.salePrice}
              img={product.img}
              cate={product.cate}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductList;
