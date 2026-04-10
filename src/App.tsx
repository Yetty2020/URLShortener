
import {createBrowserRouter} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
function App() {

  const router = createBrowserRouter([
    {
      element: <AppLayout/>,
      children: []
    }
  ])
  return (
    <div>
      
      
    </div>
  )
}

export default App
