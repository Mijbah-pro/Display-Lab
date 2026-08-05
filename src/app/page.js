import Advertisement_Solutions from "@/components/advertisement";
import CMS_Marketing from "@/components/cms/cms_section_1";
import Count from "@/components/count_client/Count";
import CustomerReviews from "@/components/customer";
import DigitalSignageSolutions from "@/components/DigitalSignageSolutions";
import FAQ from "@/components/faq/faq";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import NavberMain from "@/components/NavberMain";
import ProductSection from "@/components/product";
import ProductsFiveCard from "@/components/ProductsFiveCard/ProductsFiveCard";
import ProductSlider from "@/components/productsSlider/productSlider";
import Rental2 from "@/components/rental2";
import SolutionCard from "@/components/solution_card";
import { homeFaqsData } from "@/utils";
export default function Home() {
  return (
    <>
      <NavberMain />
      <div className="main_div">
        <Hero />
        <DigitalSignageSolutions />
        <CMS_Marketing />
        <SolutionCard />
        <Gallery />
        <ProductSection />
        <ProductsFiveCard />
        <ProductSlider />
        <Advertisement_Solutions />

        {/* <RentalProducts /> */}
        <Rental2 />
        <Count />
        <CustomerReviews />
        <FAQ datas={homeFaqsData} />
      </div>
      <Footer />
    </>
  );
}
