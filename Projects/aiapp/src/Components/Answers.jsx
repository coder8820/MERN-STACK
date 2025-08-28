import { useEffect, useState } from "react";

// eslint-disable-next-line no-unused-vars
const Answers = ({ans,key}) => {
  const [heading, setHeading] = useState(null);

  useEffect(() =>{
    if(checkHeading(ans)){
      setHeading(true);
    }
  },[ans])

  function checkHeading(str){
    const headingRegex = /^(What|How|Why|Explain|Define|Describe|List|Summarize|Compare|Contrast|Discuss|Evaluate|Analyze|Identify|Outline|Review|Assess|Clarify|Illustrate|Interpret|Justify|Recommend|Suggest)\b/i;
    return headingRegex.test(str);
  }

  return (
    <div>
      {
        heading ? <h2 className="text-pink-700 text-left text-lg mt-2">{ans}</h2> : <p className="text-zinc-300 text-left mt-2">{ans}</p>
      }
    </div>
  )
}

export default Answers
