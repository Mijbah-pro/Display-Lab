import Footer from "../footer";
import NavberMain from "../NavberMain";
import AvailableSizes from "./availableSizes";
import DetailsHero from "./detailsHero";
import DetailsTechnical from "./detailsTechnical";
import KeyFeatures from "./keyFeatures";
import RWInstallation from "./rWInstallations";
import { products_details_all_data } from "@/utils/products_details_data";

function Detail({ productName }) {
  const productData = products_details_all_data[productName] || products_details_all_data["1"];

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
