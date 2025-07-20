import { useEffect, useState } from "react";
import "./Pokemon.css";

export const HowToFetchApi = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((responce) => responce.json())
    .then((data) => setApiData(data))
    .catch((error) => console.log("Error fetching data:", error));
  }, []);
  return (
    <div className="container effect-container">
      <ul>
        data:
        {apiData.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};
