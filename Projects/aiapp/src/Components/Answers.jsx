import { useEffect, useState } from "react";
import { checkHeading, replaceHeadingStars } from "../helper";

const Answers = ({ans,totalresult,index}) => {
  const [heading, setHeading] = useState(null);
  const [answer, setAnswer] = useState(ans);

  useEffect(() =>{
    if(checkHeading(ans)){
      setHeading(true);
      setAnswer(replaceHeadingStars(ans));
    }
  },[ans])


  return (
    <>
      {
        index === 0 && totalresult>1 ? <span className="2xl">{answer}</span>:
         heading ? <h2 className="text-pink-700 text-white text-left mt-1">{answer}</h2> : <p className="text-zinc-300 text-left">{answer}</p>
      }
    </>
  )
}

export default Answers
