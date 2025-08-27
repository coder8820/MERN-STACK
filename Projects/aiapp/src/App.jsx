import { useState } from "react";
import "./App.css";
import { URL } from "./const.js";
import Answers from "./Components/Answers.jsx";
// const api = "AIzaSyDTmhVVg9q-VLTOt0S7EJRlHZvjA8IVIO4";
function App() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState(undefined);

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
    let response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    let data = await response.json();
    data = data.candidates[0].content.parts[0].text;
    let finalData = data.split("\n").map((item) => item.trim());
    finalData = finalData.filter((item) => item !== "");

    setResult(finalData);
    setQuestion("");

  };

  return (
    <div className="grid grid-cols-5 h-screen">
      <div className="sidebar col-span-1 bg-zinc-700 p-4">
        <h2>Sidebar </h2>
      </div>
      <div className="main-content col-span-4 p-8">
        <h1 className="text-pink-600 text-center m-auto text-3xl">Welcome! to ChatGPT(v4)</h1>
        <div className="container h-120 border border-zinc-800 my-4 px-3 rounded-lg overflow-y-auto">
          <div className="text-white">
            <ul>
              {result &&
                result.map((item, index) => (
                  <li key={index} className="p-2 text-left border-zinc-800">
                    <Answers ans={item} />
                  </li>
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
            className="cursor-pointer px-2 bg-zinc-600 rounded-4xl"
          >
            Ask
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
