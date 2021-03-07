import React from "react";

import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__background">Banner background</div>

      <div className="banner__content">
        <div className="banner__content-title">
          VÌ CUỘC SỐNG <br />
          BỀN VỮNG
        </div>
        <div className="banner__content-description">
          Sản phẩm được làm từ các nguyên liệu tự nhiên, hoàn toàn thân thiện
          với môi trường và tự phân huỷ ở dưới mọi điều kiện môi trường
        </div>
        <div className="banner__content-button">VỀ CHÚNG TÔI</div>
      </div>
    </div>
  );
};

export default Banner;
