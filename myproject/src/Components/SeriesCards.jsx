import "../Components/Netflix.css";
export const SeriesCard = ({ data }) => {
  // destructing the data object to extract properties
  const { img_url, name, rating, description, genre, cast, watch_url } = data;

  // Inline styles for the rating
  const ratings = {
    color: rating >= 8 ? "green" : rating >= 5 ? "orange" : "red",
    fontWeight: "bold",
    fontSize: "1.2em",
    margin: "10px 0",

  }
  const actions = {
    color: 'blue',
    fontWeight: "bold",
    margin: "10px 0",
  }

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
        <h3 style={ratings}>Rating: {rating}</h3>
        <p>Summary: {description}</p>
        <p style={actions}>Genre: {genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target="_blank">
          <button className="card-btn">Watch Now</button>
        </a>
      </div>
    </li>
  );
};
