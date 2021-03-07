import React from "react";
import { RiArrowUpSFill } from "react-icons/ri";

import "./BackToTop.scss";

const BackToTop = ({ iconSize }) => {
  return (
    <div className="back-to-top">
      <RiArrowUpSFill size={iconSize} color="white" />
      <span class="back-to-top__text">BACK TO TOP</span>
    </div>
  );
};

export default BackToTop;
