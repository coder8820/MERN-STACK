import "./index.css";
import { EventProps } from "./Components/EventProps";

export const App = () => {
  return (
    <>
      <div className="relative">
        {/* <EventHandling/> */}
        {/* <h1 className="logo fixed top-0 left-0 right-0">Netflix Series</h1> */}
        {/* <NetflixSeries /> */}
        <EventProps/>
      </div>
    </>
  );
};
