import React from "react";

import "./HomePage.scss";

import Banner from "../../components/banner/Banner";
import BackToTop from "../../components/back-to-top/BackToTop";

const HomePage = () => {
  return (
    <div className="homepage">
      <Banner />

      <div className="banner__ideal">
        <div>Vì lý tưởng sống bền vững</div>
        <div>
          Sau khi trải nghiệm rất nhiều đồ uống với sản phẩm này, bạn sẽ dần
          nhận ra thế giới đang chuyển mình hoà nhập với cuộc sống bền vững
        </div>
      </div>
      <div className="banner__">

      </div>

      <BackToTop iconSize={32} />
    </div>
  );
};

export default HomePage;
