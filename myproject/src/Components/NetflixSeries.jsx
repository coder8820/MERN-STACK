import seriesData from "../api/seriesData.json";

export function NetflixSeries() {
  return (
    <ul>
      {seriesData.map((curElm) => {
        return (
          <li key={curElm.id}>
            <div>
              <img src={curElm.img_url} alt="Logo" width="20%" height="20%" />
            </div>
            <h1>Name: {curElm.name}</h1>
            <h3>Rating: {curElm.rating}</h3>
            <p>Summary: {curElm.description}</p>
            <p>Genre: {curElm.genre}</p>
            <p>Cast: {curElm.cast}</p>
            <button>Watch Now</button>
          </li>
        );
      })}
    </ul>
  );
}
