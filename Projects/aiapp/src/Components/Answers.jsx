import { useEffect, useState } from "react";
import { checkHeading, replaceHeadingStars } from "../helper";

// eslint-disable-next-line no-unused-vars
const Answers = ({ans,index}) => {
  const [heading, setHeading] = useState(null);
  const [answer, setAnswer] = useState(ans);

  useEffect(() =>{
    if(checkHeading(ans)){
      setHeading(true);
      setAnswer(replaceHeadingStars(ans));
    }
  },[ans])


  return (
    <div>
      {
        heading ? <h2 className="text-pink-700 text-white text-left mt-2">{answer}</h2> : <p className="text-zinc-300 text-left mt-2">{answer}</p>
      }
    </div>
  )
}

export default Answers
