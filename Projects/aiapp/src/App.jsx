import './App.css'

function App() {

  return (
    <div className='grid grid-cols-5 h-screen'>
     <div className="sidebar col-span-1 bg-gray-500 p-4">
      <h2>Sidebar</h2>
     </div>
      <div className="main-content col-span-4 p-4">
        <h1>Main Content</h1>
      </div>
    </div>
  )
}

export default App
