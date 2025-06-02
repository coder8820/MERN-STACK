// import "../Components/Netflix.css";
import style from '../Components/Netflix.module.css';
export const SeriesCard = ({ data }) => {
  // destructing the data object to extract properties
  const { img_url, name, rating, description, genre, cast, watch_url } = data;

  // Inline styles for the rating
  const ratings = {
    color: rating >= 8 ? "green" : rating >= 5 ? "orange" : "red",
    fontWeight: "bold",
    backgroundColor:`${rating >= 8.5 ? "lightgreen" : rating >= 5 ? "lightyellow" : "lightcoral"}`,
    borderRadius: "5px",
    padding: "5px 10px",
  };
  const botton = {
    backgroundColor: rating >= 8 ? "green" : "yellow",
    color:"white",
    fontWeight: "bold",
    
  }
  // const actions = {
  //   color: 'blue',
  //   fontWeight: "bold",
  //   margin: "10px 0",
  // }

  return (
    <li className={style.MainCard}>
      <div>
        <img
          className={style.images}
          src={img_url}
          alt="Logo"
          width="40%"
          height="40%"
        />
      </div>
      <div className={style.content}>
        <h1>Name: {name}</h1>
        <h3>Rating: <span style={ratings}>{rating}</span></h3>
        <p>Summary: {description}</p>
        <p>Genre: {genre.join(", ")}</p>
        <p>Cast: {cast.join(", ")}</p>
        <a href={watch_url} target="_blank">
          <button className={style.card_btn} style={botton}>Watch Now</button>
        </a>
      </div>
    </li>
  );
};
