import React from "react";
import { CityLogo } from "../ui/Icons";

const Footer = () => {
  return (
    <footer className="bck_blue">
      <div className="footer_logo">
        <CityLogo width="70px" height="70px" />
      </div>
      <div className="footer_discl">
        Manchester city 2018.All rights reserved Powered By Serge Shalo.
      </div>
    </footer>
  );
};

export default Footer;
