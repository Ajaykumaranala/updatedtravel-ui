import TripData from "./TripData";
import Trip1 from "../Assests/5.jpg";
import Trip2 from "../Assests/6.jpg";
import Trip3 from "../Assests/8.jpg";

import "./Tripstyles.css";
function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p> You can discover unique destinations using googles maps</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="Indonesia is climatically comfortable throughout the year, though the best time to visit is from April to October. The peak tourist season lasts from July to August, though April to September are the best months to visit. Even though this is the rainy season, you will bag great deals since this is lean tourist season"
        />
        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences. The capital, Kuala Lumpur, is home to colonial buildings, busy shopping districts "
        />
        <TripData
          image={Trip3}
          heading="Trip in France"
          text="France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. The country is also renowned for its wines and sophisticated cuisine."
        />
      </div>
    </div>
  );
}
export default Trip;
