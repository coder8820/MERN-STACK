import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCards";

export const NetflixSeries = () => {
  return (
    <ul>
      {seriesData.map((curElm) => (
       <SeriesCard key={curElm.id} data = {curElm}/>
      ))}
    </ul>
  );
}
