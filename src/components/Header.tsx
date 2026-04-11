
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

function Header() {
  return (
    <nav>
        <Link to="/" className='text-2xl font-bold text-gray-800'>
        <h3>Shortener</h3>

        </Link>
        <div>
            <Button/>
        </div>
    </nav>
  )
}

export default Header
