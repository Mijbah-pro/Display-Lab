import Footer from "@/components/footer";
import ContactUsForm from "@/components/Form/contact_us";
import NavberMain from "@/components/NavberMain";

function page() {
  return (
    <>
      <NavberMain />
      {/* FORM */}
      <ContactUsForm />
      <Footer />
    </>
  );
}

export default page;
