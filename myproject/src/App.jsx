import { Cards } from "./Components/Cards"
import { Condition } from "./Components/Conditional"

export const App = () =>{
  return(
    <>
      <h1>My Movie App</h1>
      <h2>Top Rated Movies</h2>
      <Cards/>
      <Condition/>
    </>
  )
}
