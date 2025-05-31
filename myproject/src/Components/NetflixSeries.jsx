import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCards";
import "../Components/Netflix.css"

export const NetflixSeries = () => {
  return (
    <div className="container">
      <h1 className="card-heading">List of Best Netflix Series:</h1>
      <ul className="grid grid-three-cols">
        {seriesData.map((curElm) => (
          <SeriesCard key={curElm.id} data={curElm} />
        ))}
      </ul>
    </div>
  );
};
