import { createBrowserRouter, RouterProvider } from "react-router"
import { Contact } from "./webPages/Contact"
import { Country } from "./webPages/Country"
import { About } from "./webPages/About"
import { Home } from "./webPages/Home"
import { AppLayout } from "./Componenets/AppLayout/AppLayout"
import { CountryDetail } from "./Componenets/UI/CountryDetail"
import { singleCountryApi } from "./Api/SingleCountryApi"
import { Error } from "./webPages/Error"



export const App =()=> {

  const router = createBrowserRouter([
   {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/country/",
        element: <Country />,
      },
      {
        path: "/country/:CountryDetail",
        element: <CountryDetail />,
        loader: singleCountryApi
      },
    ]
   }
  ])

  return (
      <RouterProvider router={router} />
  )
}


  













// useEffect(()=>{
//   const fetchData = async () => {
//     try {
//       let response = await fetch("https://restcountries.com/v3.1/independent?status=true");
//       let res = await response.json();
//       console.log("api is", res[0]);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   fetchData();
// },[])  
// //  this the api which will get through axios and basic setup is completed 

// return <h1>project is about to lunch</h1>