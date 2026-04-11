
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div>
      //whtever page is active will be redered here
      <Outlet/>
      
    </div>
  )
}
