import React, { Fragment } from "react";
import Footer from "./Footer";

const Store = () => {
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
        <h1>Store</h1>
      </div>
      <div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Store;
