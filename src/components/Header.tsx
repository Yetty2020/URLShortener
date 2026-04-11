
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'

function Header() {
    const navigate = useNavigate()
  return (
    <nav className='py-4 flex items-center justify-between '>
        <Link to="/" className='text-2xl font-bold text-gray-800'>
        <h3>Shortener</h3>

        </Link>
        <div>
            <Button onClick={() => {navigate("/auth")}} variant='outline'>Login</Button>
        </div>
    </nav>
  )
}

export default Header
