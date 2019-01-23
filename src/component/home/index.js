import React from "react";
import Featured from "./Featured";
import Matches from "../matches";
import MeetPlayers from "../meetplayers";
import Promotion from "../promotion";
import Layout from "../../Hoc/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="bck_blue">
        <Featured />
        <Matches />
        <MeetPlayers />
        <Promotion />
      </div>
    </Layout>
  );
};

export default Home;
