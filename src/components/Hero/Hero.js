import React from "react";
import ProductView from "../ProductView";
import ProductModel from "../ProductModel";
import AddView from "../AddView";
import Popup from "../Popup";
import Header from "../../Layout/Header";
import ColorTabs from "../Tabs";

const Hero = () => {
  return (
    <div>
      <Header />
      <ColorTabs />
      <ProductModel />
      <AddView />
      <div
        className="flex justify-center
      mt-9"
      >
        <Popup />
      </div>

      <ProductView />
    </div>
  );
};

export default Hero;
