
import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCards";
// import "../Components/Netflix.css";
import style from '../Components/Netflix.module.css';

export const NetflixSeries = () => {

  
  return (
    <div className={style.container}>
      <h1 className={style.card_heading}>List of Best Netflix Series:</h1>
      <ul className={`${style.grid} ${style.grid_three_cols }`}>
        {seriesData.map((curElm) => (
          <SeriesCard key={curElm.id} data={curElm} />
        ))}
      </ul>
    </div>
  );
};
