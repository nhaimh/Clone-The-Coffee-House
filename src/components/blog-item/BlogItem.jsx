import React from "react";
import "./blogItem.scss";

const BlogItem = () => {
  return (
    <div className="blog">
      <div className="img-container">
        <img src='//file.hstatic.net/1000075078/article/thecoffehouse_ca_phe_01_b4adbd88db6e4ca3b7c2c5934d1a1ed9_grande.jpg' alt="blog post" className="img" />
      </div>
      <div className="info">
        <p className="date">11/03/2022</p>
        <h4 className="blog-header">CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ... </h4>
        <p className="blog-description">
          Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không...        
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
