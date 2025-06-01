import "../Components/Netflix.css";
export const SeriesCard = ({ data }) => {
  // destructing the data object to extract properties
  const { img_url, name, rating, description, genre, cast, watch_url } = data;
  return (
    <li className="MainCard">
      <div>
        <img
          className="images"
          src={img_url}
          alt="Logo"
          width="40%"
          height="40%"
        />
      </div>
      <div className="content">
        <h1>Name: {name}</h1>
        <h3>Rating: {rating}</h3>
        <p>Summary: {description}</p>
        <p>Genre: {genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target="_blank">
          <button className="card-btn">Watch Now</button>
        </a>
      </div>
    </li>
  );
};
