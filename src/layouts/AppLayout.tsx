
import Header from './../components/Header'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div>
      <main className='min-h-screen container'>
        {/* Header */}
        <Header/>
        
          {/*  whtever page is active will be redered here */}
          <Outlet/>
           </main>

        {/* Footer */}
        <div className='p-10 text-center bg-gray-800 mt-10 text-white'>
          Copyright @ Adetoro Fatihah
        </div>
     
      
      
    </div>
  )
}
