import { useEffect, useState } from "react";
import { checkHeading, replaceHeadingStars } from "../helper";

const Answers = ({ans,totalresult,type,index}) => {
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
         heading ? <span className="text-pink-700 text-white text-left mt-1">{answer}</span> : <span className={type==="q"?"pl-1":'pl-5'}>{answer}</span>
      }
    </>
  )
}

export default Answers
