export const SeriesCards = ({props}) =>{
    return (
        <li key={props.curElm.id}>
          <div>
            <img src={props.curElm.img_url} alt="Logo" width="40%" height="40%" />
          </div>
          <h1>Name: {props.curElm.name}</h1>
          <h3>Rating: {props.curElm.rating}</h3>
          <p>Summary: {props.curElm.description}</p>
          <p>Genre: {props.curElm.genre}</p>
          <p>Cast: {props.curElm.cast}</p>
          <button>Watch Now</button>
        </li>
      );
}