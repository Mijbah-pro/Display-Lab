"use client";
import { useState, useEffect } from "react";
import NavberMain from "@/components/NavberMain";
import Products from "./components/Products";
import Footer from "@/components/footer";
import Accessories from "./components/Accessories";
import ProductLines from "./components/ProductLines";
import NeedHelp from "./components/NeedHelp";
import ReadyToUpgrade from "./components/ReadyToUpgrade";
import MindMap from "./components/MindMap";
import PowerfulResult from "./components/PowerfulResult";
import ProductCetagoryImage from "@/components/productCetagoryImage";
import ServingBusiness from "./components/Serving_Business";
import ControlEveryScreen from "./components/ControlEveryScreen";
import NeedContentToo from "./components/NeedContentToo";
import Prduct_Hero from "./components/Product_Hero";


function Product() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get("category");
      if (cat) {
        setSelectedCategory(cat);
      }
    }
  }, []);

  const handleCategoryChange = (newCat) => {
    setSelectedCategory(newCat);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (newCat === "all") {
        url.searchParams.delete("category");
      } else {
        url.searchParams.set("category", newCat);
      }
      window.history.replaceState(null, "", url.pathname + url.search);
    }
  };

  return (
    <>
      <NavberMain />

      <Prduct_Hero />

      <ProductCetagoryImage selectedCategory={selectedCategory}
        setSelectedCategory={handleCategoryChange} />
      <Products
        selectedCategory={selectedCategory}
        setSelectedCategory={handleCategoryChange}
      />
      <ProductLines setSelectedCategory={handleCategoryChange} />
      <Accessories />
      <PowerfulResult />
      <NeedHelp />
      <ServingBusiness />
      <MindMap />
      <ControlEveryScreen />
      <NeedContentToo />
      <ReadyToUpgrade />
      <Footer />
    </>
  );
}

export default Product;

