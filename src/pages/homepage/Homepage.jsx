import { Button, Container, Grid, ThemeProvider } from "@mui/material";
import BlogItem from "../../components/blog-item/BlogItem";
import ProductList from "../../components/product-list/ProductList";
import { all } from "../../products-data";

import hcmStore1 from "../../assets/img/hcm-store-1.jpg";
//import hcmStore2 from "../../assets/img/hcm-store-2.jpg";
import headline from "../../assets/img/promo-headline.svg";
import promo1 from "../../assets/img/dau-tay-man-muoi.png";
import promo2 from "../../assets/img/xoai-aloe-vera.png";
import promo3 from "../../assets/img/da-tuyet-yuzu.png";
import promo4 from "../../assets/img/da-tuyet-man-muoi.png";
import banner from "../../assets/img/banner.png";
import theme from "../../theme";

import "./homepage.scss";

const Homepage = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="homepage">
        <img src={banner} alt="Tet Holiday banner" className="banner" />
        <Grid container className="container">
          <div className="collections">
            <ProductList data={all} />
          </div>
        </Grid>
        <Grid container className="new-products">
          <Grid item lg={12} md={6} sm={12} xs={12} className="wrapper">
            <img src={headline} alt="hibicus-tea" className="headline" />
            <p className="promo-desc">
              Được chiết xuất từ 100% hoa Hibiscus tự nhiên, không chứa caffeine
              cùng topping trái cây đa dạng, Hi-Tea Healthy là lựa chọn cho
              những ai muốn chăm sức khoẻ và yêu chiều bản thân. Nay có thêm 4
              vị mới cực hấp dẫn kèm topping Aloe Vera ngon ngất ngây, đẹp đắm
              say.
            </p>
            <p className="promo-cta">Thử đi chờ chi!</p>
            <div className="product-wrapper">
              <img
                src={promo1}
                alt="Hi-Tea Dâu Tây Mận Muối Aloe Vera"
                className="product-img"
              />
              <div className="product-info">
                <h3 className="product-title">
                  Hi-Tea Dâu Tây Mận Muối Aloe Vera
                </h3>
                <p className="product-desc">
                  Sự kết hợp độc đáo giữa 3 sắc thái hương vị khác nhau: trà hoa
                  Hibiscus chua thanh, Mận muối mặn mặn và Dâu tây tươi Đà Lạt
                  cô đặc ngọt dịu. Ngoài ra, topping Aloe Vera tươi mát, ngon
                  ngất ngây, đẹp đắm say, hứa hẹn sẽ khuấy đảo hè này.
                </p>
                <Button variant="contained" className="btn">
                  Thử ngay
                </Button>
              </div>
            </div>
            <div className="product-container">
              <div className="product-wrapper-vertical">
                <img
                  src={promo2}
                  alt="Hi-Tea Xoài Aloe Vera"
                  className="product-img"
                />
                <div className="product-info">
                  <h3 className="product-title">Hi-Tea Xoài Aloe Vera</h3>
                  <p className="product-desc">
                    Vị ngọt thanh, thơm phức từ xoài chín mọng kết hợp cùng vị
                    chua đặc trưng của trà hoa Hibiscus tự nhiên, sẽ khiến bạn
                    khó lòng quên được thức uống “chân ái” này. Đặc biệt,
                    topping Aloe Vera tự nhiên không chỉ nhâm nhi vui miệng mà
                    còn giúp bạn “nâng tầm nhan sắc”.
                  </p>
                  <Button variant="contained" className="btn">
                    Thử ngay
                  </Button>
                </div>
              </div>
              <div className="product-wrapper-vertical">
                <img
                  src={promo3}
                  alt="Hi-Tea Đá Tuyết Yuzu Aloe Vera"
                  className="product-img"
                />
                <div className="product-info">
                  <h3 className="product-title">
                    Hi-Tea Đá Tuyết Yuzu Aloe Vera
                  </h3>
                  <p className="product-desc">
                    Vị chua tươi mát của trà hoa Hibiscus, cùng đá tuyết Yuzu
                    (quýt Nhật) chua dịu sẽ trở nên hài hòa hơn nhờ topping Aloe
                    Vera giòn ngọt, sẽ khiến bạn thích thú ngay lần chạm môi đầu
                    tiên.
                  </p>
                  <Button variant="contained" className="btn">
                    Thử ngay
                  </Button>
                </div>
              </div>
              <div className="product-wrapper-vertical">
                <img
                  src={promo4}
                  alt="Hi-Tea Đá Tuyết Mận Muối Aloe Vera"
                  className="product-img"
                />
                <div className="product-info">
                  <h3 className="product-title">
                    Hi-Tea Đá Tuyết Mận Muối Aloe Vera
                  </h3>
                  <p className="product-desc">
                    “Have a mặn mà” và chua chua từ Mận muối xay cùng đá tuyết,
                    hoà quyện với vị trà hoa Hibiscus chua dịu và chút ngọt
                    thanh tao bởi topping Aloe Vera, Hi-Tea Đá Tuyết Mận Muối
                    Aloe Vera là thức uống “must try” để đánh tan cơn khát mùa
                    hè.
                  </p>
                  <Button variant="contained" className="btn">
                    Thử ngay
                  </Button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <div className="store">
          <div className="left">
            <h2 className="header">The Coffee House  Vinh Lotte Mart</h2>
            <p className="description">
            Nhà mới Nghệ An toạ lạc tại Lotte Mart (TP. Vinh), nằm bên cạnh những con phố sầm uất nhộn nhịp là không gian ấm cúng và hương vị quen thuộc từ Nhà, mang đến nhiều cung bậc cảm xúc cho những buổi hẹn hò cùng bạn bè.
            </p>
            <Button variant="contained" className="btn">
              Tìm hiểu thêm
            </Button>
          </div>
          <div className="right">
            <img src={hcmStore1} alt="store" className="store-img" />
          </div>
          
        </div>
        <div className="blogs">
          <h2 className="header">Chuyện Cà phê và Trà</h2>
          <Container maxWidth="lg">
            <div className="topic">
              <h3 className="topic-header">Coffeeholic</h3>
              <div className="topic-list">
                <BlogItem />
                <BlogItem />
                <BlogItem />
              </div>
            </div>
            <div className="topic">
              <h3 className="topic-header">Coffeeholic</h3>
              <div className="topic-list">
                <BlogItem />
                <BlogItem />
                <BlogItem />
              </div>
            </div>
            <div className="topic">
              <h3 className="topic-header">Coffeeholic</h3>
              <div className="topic-list">
                <BlogItem />
                <BlogItem />
                <BlogItem />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Homepage;
