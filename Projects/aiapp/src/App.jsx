import { useState } from "react";
import "./App.css";
import { URL } from "./const.js";
import Answers from "./Components/Answers.jsx";
// const api = "AIzaSyDTmhVVg9q-VLTOt0S7EJRlHZvjA8IVIO4";
function App() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState([]);
  const [recentHistory, setResentHistory] = useState(JSON.parse(localStorage.getItem('history')) || []);

  const payload = {
    contents: [
      {
        parts: [
          {
            text: question,
          },
        ],
      },
    ],
  };

  const askQuestion = async () => {
    if (question === "") return;
    if(localStorage.getItem('history')){
      let history = JSON.parse(localStorage.getItem('history'));
      history = ([question, ...history]);
      localStorage.setItem("history", JSON.stringify([history]));
    }else{
      localStorage.setItem("history", JSON.stringify([question]));
      setResentHistory([question]);
    }

    let response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    response = await response.json();
    let dataString = response.candidates[0].content.parts[0].text;
    dataString = dataString.split("* ").map((item) => item.trim());
    dataString = dataString.filter((item) => item !== "");


    setResult([
      ...result,
      { type: "q", text: question },
      { type: "a", text: dataString },
    ]);
    setQuestion("");

  };

  return (
    <div className="grid grid-cols-5 h-screen">
      <div className="sidebar col-span-1 bg-zinc-700 p-4">
        <h2>History</h2>
        <input
          type="text"
          placeholder="Search Data"
          className="w-full p-2 rounded-lg outline-none bg-zinc-600 text-white border border-zinc-800"
        />
        <div className="questions">
         <ul>
         {recentHistory.length > 0 && recentHistory.map((item,index) => (
            <li key={index} className="p-1 border border-zinc-800 rounded-lg mb-1 cursor-pointer hover:bg-zinc-600">
              {item}
            </li>
          ))}
         </ul>
        </div>
        <div className="history mt-4">
          <ul>
            <li className="p-2 border border-zinc-800 rounded-lg mb-2 cursor-pointer hover:bg-zinc-600">
              What is AI?
            </li>
            <li className="p-2 border border-zinc-800 rounded-lg mb-2 cursor-pointer hover:bg-zinc-600">
              What is ML?
            </li>
            <li className="p-2 border border-zinc-800 rounded-lg mb-2 cursor-pointer hover:bg-zinc-600">
              What is DL?
            </li>
          </ul>
        </div>
      </div>
      <div className="main-content col-span-4 p-8">
        <h1 className="text-pink-600 text-center m-auto text-3xl">
          Welcome! to ChatGPT(v4)
        </h1>
        <div className="container h-120 border border-zinc-700 my-4 px-3 rounded-lg overflow-y-scroll">
          <div className="text-white">
            <ul>
              {result.map((item, index) => (
                <div key={`${index}-${Date.now()}`}>
                  {item.type === "q" ? (
                    <li className="p-2 px-5 text-right bg-zinc-700 border border-zinc-800 rounded-tl-3xl rounded-br-3xl rounded-bl-3xl my-2 w-fit ml-auto">
                      <Answers ans={item.text} index={index} totalresult={1} type={item.type} />
                    </li>
                  ) : (
                    item.text.map((ansItem, ansIndex) => (
                      <li key={ansIndex} className="p-2 text-left bg-zinc-800 ">
                        <Answers
                          ans={ansItem}
                          index={ansIndex}
                          type={item.type}
                          totalresult={item.text.length}
                        />
                      </li>
                    ))
                  )}
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-zinc-800 flex m-auto w-1/2  text-white p-2 rounded-4xl border border-zinc-600 ">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="How can i assist you today!"
            className="w-full outline-none p-2"
          />
          <button
            onClick={askQuestion}
            className="cursor-pointer px-2 bg-zinc-600 rounded-4xl hover:bg-zinc-700 transition-all duration-300"
          >
            Ask
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
