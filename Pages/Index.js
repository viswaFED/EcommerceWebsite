import React, { Fragment } from "react";
import Footer from "./Footer";
import "./Index.css";
import AvaiableProducts from "./Product"

const Home = () => {
  return (
    <Fragment>
      <AvaiableProducts/>
      <div>
       <Footer/>
      </div>
    </Fragment>
  );
};

export default Home;
