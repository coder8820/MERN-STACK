import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Movies } from "./pages/Movies";
import { Applayout } from "./Components/UI/AppLayout";
const App =() => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/about",
          element: <About/>,
        },
        {
          path: "/contact",
          element: <Contact/>,
        },
        {
          path: "/movies",
          element: <Movies/>,
        }
      ]
    },
    
  
  ])

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <>
  //       <Route path="/" element={<Home/>}/>
  //       <Route path="/about" element={<About/>}/>
  //       <Route path="/contact" element={<Contact/>}/>
  //       <Route path="/movies" element={<Movies/>}/>
  //     </>
  //   )
  // )

  return(
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;