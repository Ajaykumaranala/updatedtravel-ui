import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import aboutimg from "../Assests/night.jpg";
import Footer from "../components/Footer";
import Aboutus from "../components/Aboutus";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={aboutimg} title="About" btnclass="hide" />
      <Aboutus />
      <Footer />
    </>
  );
}
export default About;
