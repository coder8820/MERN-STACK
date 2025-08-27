import { useState } from "react";
import "./App.css";
import {URL} from "./const.js"
// const api = "AIzaSyDTmhVVg9q-VLTOt0S7EJRlHZvjA8IVIO4";
function App() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState(undefined);

 const payload = {
    "contents": [
      {
        "parts": [
          {
            "text": question
          }
        ]
      }
    ]
  }

  const askQuestion = async () => {
    let response = await fetch(URL, {
      method: "POST",
      body:JSON.stringify(payload),
    });
    const data = await response.json();
    const answer = data.candidates[0].content.parts[0].text;

    setResult(answer);

    console.log("Answer received:", answer);
    // console.log("Question asked:", question);
  }

  return (
    <div className="grid grid-cols-5 h-screen">
      <div className="sidebar col-span-1 bg-zinc-700 p-4">
        <h2>Sidebar </h2>
      </div>
      <div className="main-content col-span-4 p-10">
        <h1>Main Content</h1>
        <div className="container h-120 border border-zinc-800 my-4 rounded-lg overflow-y-auto">
          <p className="p-4 text-white mx-2 my-2">{result}</p>
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
          className="cursor-pointer px-2 bg-zinc-600 rounded-4xl">
            Ask
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
