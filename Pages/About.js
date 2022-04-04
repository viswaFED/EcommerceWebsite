import React, { Fragment } from "react";
import Footer from "./Footer";

const About = () => {
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <h1>About</h1>
      </div>
      <div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default About;
