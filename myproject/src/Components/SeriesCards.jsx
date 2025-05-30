export const SeriesCard = ( {data} ) => {
    // destructing the data object to extract properties
    const {img_url,name,rating,description,genre,cast} = data;
  return (
    <li>
      <div>
        <img src={img_url} alt="Logo" width="40%" height="40%" />
      </div>
      <h1>Name: {name}</h1>
      <h3>Rating: {rating}</h3>
      <p>Summary: {description}</p>
      <p>Genre: {genre}</p>
      <p>Cast: {cast}</p>
      <button>Watch Now</button>
    </li>
  );
};
