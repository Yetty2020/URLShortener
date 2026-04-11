
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

function Header() {
    const navigate = useNavigate()
    const user = false//dummy will be  implemented later on
  return (
    <nav className='py-4 flex items-center justify-between '>
        <Link to="/" className='text-2xl font-bold text-gray-800'>
        <h3>Shortener</h3>

        </Link>
        <div>
            {
                !user ? (
                    <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuGroup>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem>Team</DropdownMenuItem>
      <DropdownMenuItem>Subscription</DropdownMenuItem>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>
                ) : (
                    <Button onClick={() => {navigate("/auth")}} variant='outline'>Login</Button>

                )
            }
            
        </div>
    </nav>
  )
}

export default Header
