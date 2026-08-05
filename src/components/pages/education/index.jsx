import Footer from "@/components/footer";
import EducationCMS from "./components/EducationCms";
import EducationContact from "./components/EducationContact";
import EducationHero from "./components/EducationHero";
import EducationSetup from "./components/EducationSetup";
import EducationSolutions from "./components/EducationSolutions";
import EducationHardware from "./components/EducationHardware";
import EducationStarts from "./components/EducationStarts";
import NavberMain from "@/components/NavberMain";



function Education() {
    return ( 
        <>
        <NavberMain />
        <EducationHero />
        <EducationStarts />
        <EducationCMS />
        <EducationSolutions />
        <EducationHardware />
        <EducationSetup />
        {/* FAQ */}
        <EducationContact />
        <Footer />
        </>
     );
}

export default Education;