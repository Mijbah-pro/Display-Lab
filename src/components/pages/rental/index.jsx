import Footer from "@/components/footer";
import NavberMain from "@/components/NavberMain";
import Rental_Hero from "./components/Rental_Hero";
import RentalDivision from "./components/RentalDivision";
import RentalOffer from "./components/RentalOffer";
import Rental_division_service_model from "./components/Rental_division_service_model";
import RentalUseCase from "./components/RentalUseCases";
import Transparent from "./components/Transparent";
import Rental_Creative from "./components/Rental_Creative";
import Rental_Choose_Us from "./components/Rental_Choose_Us";
import Rental_Analytics from "./components/Rental_Analytics";
import Rental_Started from "./components/Rental_Started";




function Rental() {
  return (
    <>
      <NavberMain />
      <div className="main_div">
        <Rental_Hero />
        <RentalDivision />
        <RentalOffer />
        <Rental_division_service_model />
        <RentalUseCase />
        <Transparent />
        <Rental_Creative />
        <Rental_Choose_Us />
        <Rental_Analytics />
        <Rental_Started />
      </div>
      <Footer />
    </>
  );
}

export default Rental;
