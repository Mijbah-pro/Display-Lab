import Footer from "@/components/footer";
import NavberMain from "@/components/NavberMain";
import GroceryAlt from "./components/GroceryAlt";
import GroceryCMS from "./components/GroceryCMS";
import GroceryContact from "./components/GroceryContact";
import GroceryHardware from "./components/GroceryHardware";
import GrocerySimpleSetup from "./components/GrocerySimpleSetup";
import GrocerySolutions from "./components/GrocerySolutions";
import GroceryHero from "./components/GroceryHero";

function Grocery() {
    return ( <>
    <NavberMain />
    <GroceryHero />
    <GrocerySolutions />
    <GroceryCMS />
    <GroceryHardware />
    <GroceryAlt />
    <GrocerySimpleSetup />
    <GroceryContact />
    <Footer />

    </> );
}

export default Grocery;