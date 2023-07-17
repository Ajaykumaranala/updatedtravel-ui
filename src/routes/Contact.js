import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import contactimg from "../Assests/2 (1).jpg";
import Footer from "../components/Footer";
import Contactform from "../components/Contactform";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={contactimg}
        title="Contact"
        btnclass="hide"
      />
      <Contactform />

      <Footer />
    </>
  );
}
export default Contact;
