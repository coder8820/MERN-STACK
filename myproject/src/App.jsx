import { Cards } from "./Components/Cards"

export const App = () =>{
  return(
    <div>
      <h1>My Movie App</h1>
      <h2>Top Rated Movies</h2>
      <Netflix/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
    </div>
  )
}


const Netflix = () =>{
  return(
    <div>
      <h1>Netflix</h1>
      <Cards/>
    </div>
  )
}