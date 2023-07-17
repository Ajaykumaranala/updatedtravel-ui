import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Main from "../Assests/12.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={Main}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        butntext="Travel Plan"
        url="/"
        btnclass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}
export default Home;
