import React, { useEffect, useState } from "react";
import ProductView from "../Products/ProductView";
import ProductModel from "../ProductModel";
import AddView from "../AddView";
import Popup from "../Popup";
import Header from "../../Layout/Header";
import ColorTabs from "../Tabs";
import StatCard from "../StatCard/StatCard";
import Footer from "../../Layout/Footer";

const Hero = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <Header />
      <ProductModel />
      <ColorTabs />
      <div
        className="flex justify-center
      mt-9"
      >
        <Popup />
      </div>
      {products.length > 0 ? (
        <ProductView products={products} />
      ) : (
        <div>Loading .....</div>
      )}

      <StatCard />
      <AddView />
      <Footer />
    </div>
  );
};

export default Hero;
