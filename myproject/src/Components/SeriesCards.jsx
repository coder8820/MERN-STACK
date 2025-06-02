import style from '../Components/Netflix.module.css';
import styled from 'styled-components';
export const SeriesCard = ({ data }) => {

  // destructing the data object to extract properties
  const { img_url, name, rating, description, genre, cast, watch_url } = data;

  const Button = styled.button`
    background-color: ${rating >= 8 ? "green" : "goldenrod"};
    color: white;
    font-weight: bold;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: ${rating >= 8 ? "darkgreen" : "orange"};
    }
    `
  const Span = styled.span`
    color: ${rating >= 8 ? "green" : "goldenrod"};
    font-weight: bold;
    font-size: 1.2em;
    margin-left: 5px;

  `

  // Inline styles for the rating
  const ratings = {
    color: rating >= 8.5 ? "white" : rating >= 5 ? "blue" : "red",
    fontWeight: "bold",
    backgroundColor:`${rating >= 8.5 ? "lightgreen" : rating >= 5 ? "yellow" : "lightcoral"}`,
    borderRadius: "50%",
    padding: "5px 10px",
  };

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
        <h3>Rating: <Span style={ratings}>{rating}</Span></h3>
        <p>Summary: {description}</p>
        <p className='text-3xl font-bold underline text-red-500'>Genre: {genre.join(", ")}</p>
        <p>Cast: {cast.join(", ")}</p>
        <a href={watch_url} target="_blank">
          <Button className='rounded-xl shadow-md/30'>Watch Now</Button>
        </a>
      </div>
    </li>
  );
};
