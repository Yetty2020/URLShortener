
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
        <Link to="/" className='text-2xl font-bold text-gray-800'>
        <h3>Shortener</h3>

        </Link>
    </nav>
  )
}

export default Header
