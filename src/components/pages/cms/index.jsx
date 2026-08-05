import Benefits from "@/components/cms_tab/Benefits";
import FAQ from "@/components/faq/faq";
import NavberMain from "@/components/NavberMain";
import { cmsFaqsData } from "@/utils";
import DEVICE_SECTION from "./components/DeviceSection";
import DigitalSignage from "./components/Digital Signage";
import GetStarted from "./components/GetStarted";
import CMS_HERO from "./components/hero";
import LeadingFeatures from "./components/LeadingFeatures";
import { HeroVideoDialogDemo } from "./components/Video_Section";
import WHY_SECTION2 from "./components/WHY_SECTION2";
import MobileApp from "./components/MobileApp";
import Gallery from "@/components/gallery";
import Footer from "@/components/footer";
import CurvedLoop from "@/components/CurvedLoop/CurvedLoop";


function CMS() {
  return (
    <>
      <NavberMain />
      <div className="main_div">
        <CMS_HERO />
        <GetStarted />
        <LeadingFeatures />
        <Benefits />
        <CurvedLoop
          marqueeText="Display Lab ✦ Creative ✦ With ✦ Digital ✦ Business ✦"
          speed={2}
          curveAmount={0}
          direction="left"
          interactive={false}
          className="custom-text-style"
          />
        <HeroVideoDialogDemo />
        <WHY_SECTION2 />
        <DEVICE_SECTION />
        <DigitalSignage />
        {/* <MobileApp /> */}
        <Gallery />
        <FAQ datas={cmsFaqsData} />
      </div>
      <Footer />
    </>
  );
}

export default CMS;
