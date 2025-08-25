import { createBrowserRouter } from "react-router-dom";
const App =() => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/movies",
      element: <Movies/>,
    }
  ])

  return(
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;