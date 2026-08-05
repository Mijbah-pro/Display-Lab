import NavberMain from "@/components/NavberMain";
import Footer from "@/components/footer";
import AdvertisementAnalytics from "./components/AdvertisementAnalytics";
import AdvertisementCampaignTypes from "./components/AdvertisementCampaignTypes";
import AdvertisementHero from "./components/AdvertisementHero";
import AdvertisementJourney from "./components/AdvertisementJourney";
import AdvertisementNetwork from "./components/AdvertisementNetwork";
import AdvertisementPackages from "./components/AdvertisementPackages";
import AdvertisementPlacements from "./components/AdvertisementPlacements";
import AdvertisementPlatform from "./components/AdvertisementPlatform";
import AdvertisementRevenue from "./components/AdvertisementRevenue";
import AdvertisementStats from "./components/AdvertisementStats";
import AdvertisementTemplate from "./components/AdvertisementTemplate";
import AdvertisementTestimonial from "./components/AdvertisementTestimonial";
import AdvertisementVenue from "./components/AdvertisementVenue";
import AdvertisementVibrantBand from "./components/AdvertisementVibrantBand";
import AdvertisementVideo from "./components/AdvertisementVideo";
import AdvertisementWorks from "./components/AdvertisementWorks";
import AdvertisementHowItWorks from './components/AdvertisementHowItWorks';
function Advertisement() {
  return (
    <>
      <NavberMain/>
      <AdvertisementHero />
      <AdvertisementStats />
      <AdvertisementVibrantBand />
      <AdvertisementCampaignTypes />
      <AdvertisementJourney />
      <AdvertisementAnalytics />
      <AdvertisementTemplate />
      <AdvertisementRevenue />
      <AdvertisementTestimonial />
      <AdvertisementVenue />
      <AdvertisementHowItWorks />
      <AdvertisementWorks />
      <AdvertisementPlacements />
      <AdvertisementNetwork />
      <AdvertisementPlatform />
      <AdvertisementPackages />
      <AdvertisementVideo />
      {/* Contact us SAME us a education */}
      <Footer />
    </>
  );
}

export default Advertisement;
