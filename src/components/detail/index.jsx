import Footer from "../footer";
import NavberMain from "../NavberMain";
import AvailableSizes from "./availableSizes";
import DetailsHero from "./detailsHero";
import DetailsTechnical from "./detailsTechnical";
import KeyFeatures from "./keyFeatures";
import RWInstallation from "./rWInstallations";
import { products_details_all_data } from "@/utils/products_details_data";

function Detail({ productName }) {
// Gracefully handle undefined/null productName or slug mismatches
  const productData =
    products_details_all_data[productName] ||
    Object.values(products_details_all_data).find(
      (p) => p.product_name.toLowerCase() === productName?.toLowerCase()
    ) ||
    products_details_all_data[1];
  console.log("productData", productData); // log

  return (
    <>
      <NavberMain />
      <div className="main_div">
        <DetailsHero productData={productData} />
        <DetailsTechnical productData={productData} />
        <KeyFeatures productData={productData} />
        <AvailableSizes productData={productData} />
        <RWInstallation productData={productData} />
      </div>
      <Footer />
    </>
  );
}

export default Detail;
