import m1 from "../Assests/1.jpg";
import m2 from "../Assests/2 (1).jpg";
import m3 from "../Assests/3.jpg";
import m4 from "../Assests/4.jpg";
import "./Destination.css";
import DestinationData from "./DestinationData";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot , within a time frame.</p>
      <DestinationData
        heading="Taal Volcano,Batangas"
        className="first-des"
        text="Taal Volcano is a complex stratovolcano in the province of Batangas, Philippines, on an island in Taal Lake. It is one of the provincial symbols of Batangas, appearing on the new provincial seal and flag. The nearest moderately large town, and the usual base for trips to the volcano, is Tagaytay in Cavite province."
        img1={m1}
        img2={m2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Mt.Daguldul , Batangas"
        text="Located at the coastal mountain range of San Juan to Lobo, Batangas, lies the famously hikeable mountain called Mt. Daguldol which stands at 670 MASL. San Juan is being famous for its white sand Laiya beach for which you can have refreshing swimming at Laiya beach sidetrip after the climb."
        img1={m3}
        img2={m4}
      />
    </div>
  );
};
export default Destination;
