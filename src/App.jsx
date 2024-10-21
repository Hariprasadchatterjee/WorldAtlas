import { Suspense,lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
const Country = lazy( ()=>import("./Pages/Country"))
const EachCountryDetails = lazy( ()=>import("./Layout/Ui/EachCountryDetails"))
// import Country from "./Pages/Country";
import Error from "./Layout/Ui/Error";
import Loader from "./Layout/Ui/Loader";
// import EachCountryDetails from "./Layout/Ui/EachCountryDetails";


const App = () =>{

  const router= createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/Contact",
        element:<Contact/>
      },
      {
        path:"/Country",
        element: <Suspense fallback={<Loader/>}><Country/></Suspense> 
      },
      {
        path:"/Country/:id",
        element: <Suspense fallback={<Loader/>}><EachCountryDetails/></Suspense> 
      },
    ]
  }
])

  return(
   <RouterProvider router={router}></RouterProvider>
  )
}

export default App;