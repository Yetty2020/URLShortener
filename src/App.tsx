
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import Link from "./pages/Link";
import RedirectLandingPage from "./pages/RedirectLandingPage";
function App() {

  const router = createBrowserRouter([
    {
      //every page in the app should go through the AppLayout component
      element: <AppLayout/>,
      children: [
        {
          path: "/",
          element: <LandingPage/>
        },
        {
          path: "/dashboard",
          element: <Dashboard/>
        },
        {
          path: "/auth",
          element: <Auth/>
        },
        {
          path: "/link/:id",
          element: <Link/>
        },
        {
          path: "/:id",
          element: <RedirectLandingPage/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
