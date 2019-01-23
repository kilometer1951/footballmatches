import React from "react";
import Header from "../component/Header_Footer/Header";
import Footer from "../component/Header_Footer/Footer";

const Layout = props => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
