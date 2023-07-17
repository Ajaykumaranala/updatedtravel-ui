import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import aboutimg from "../Assests/night.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={aboutimg}
        title="Service"
        btnclass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}
export default Service;
