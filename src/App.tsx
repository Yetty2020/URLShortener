
import {createBrowserRouter} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/dashboard";
import Auth from "./pages/auth";
import Link from "./pages/link";
import RedirectLandingPage from "./pages/redirectLandingPage";
function App() {

  const router = createBrowserRouter([
    {
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
          path: "/link",
          element: <Link/>
        },
        {
          path: "/",
          element: <RedirectLandingPage/>
        }
      ]
    }
  ])
  return (
    <div>
      
      
    </div>
  )
}

export default App
