import { Cards } from "./Components/NetflixSeries"
import { Condition } from "./Components/Conditional"
import Headers  from "./Components/Header" // Default imported component
import { FooterSection } from "./Components/Footer"

export const App = () =>{
  return(
    <>
      <Headers/>
      <Cards/>
      <Cards/>
      <FooterSection/>
    </>
  )
}
