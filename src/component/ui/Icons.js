import React from "react";
import { Link } from "react-router-dom";

import mcitylogo from "../../resources/images/logos/manchester_city_logo.png";

export const CityLogo = props => {
  return (
    <div
      className="img_cover"
      style={{
        width: props.width,
        height: props.height,
        background: `url(${mcitylogo}) no-repeat`
      }}
    />
  );
};
