import "./App.css";

function App() {
  return (
    <div className="grid grid-cols-5 h-screen">
      <div className="sidebar col-span-1 bg-zinc-700 p-4">
        <h2>Sidebar</h2>
      </div>
      <div className="main-content col-span-4 p-4">
        <h1>Main Content</h1>
        <div className="container h-110 border border-zinc-800 my-4 rounded-lg overflow-y-auto"></div>
        <div className="bg-zinc-800 flex m-auto w-1/2 text-white p-4 rounded-lg">
          <input type="text" placeholder="How can i assist you today!" className="w-full outline-none" />
          <button className="">Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
