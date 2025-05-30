import { Cards } from "./Components/NetflixSeries"
import { Condition } from "./Components/Conditional"
import Headers  from "./Components/Header"

export const App = () =>{
  return(
    <>
      <Headers/>
      <Cards/>
      <Condition/>
    </>
  )
}
