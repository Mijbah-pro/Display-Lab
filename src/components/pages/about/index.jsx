import NavberMain from "@/components/NavberMain";
import AboutHero from "./components/AboutHero";
import AboutSection from "./components/AboutSection";
import Footer from "@/components/footer";


function AboutUs() {
  return (
    <>
      <NavberMain />
      <div className="main_div">
        <AboutHero />
        <div className="container">
          <div className="px-2 md:px-0">
            <AboutSection />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
