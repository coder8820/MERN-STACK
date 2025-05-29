export function Cards() {
    const name = "Queen of Tear";
    const rating = 8.3;
    const summary = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi repellendus, voluptatem nemo ea sint cupiditate ab omnis in unde quis, perspiciatis nulla quo aperiam esse laborum veritatis sit eligendi dignissimos distinctio, deserunt qui minima recusandae earum. Reiciendis vero culpa optio.";
    const genre = () =>{
        return "Action, Adventure, Drama";
    }
    const age = 14;

    let isAllowed = age >= 18 ? "watch this movie" : "You are not allowed";

    return (
    <div>
     <div>
        <img src="images.jpeg" alt="Logo" width='20%' height='20%' />
      </div>
      <h1>Name: {name}</h1>
      <h3>Rating: {rating}</h3>
      <p>Summary: {summary}</p>
      <p>Genre: {genre()}</p>
      {/* <button>{age <= 18 ? "Not Allowed": "Watch Now"}</button> */}
      <button>{isAllowed}</button>
    </div>
  );
}