
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
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from './ui/avatar'
import { LogOut } from 'lucide-react'

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
   <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
  <AvatarBadge className="bg-green-600 dark:bg-green-800" />
</Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuGroup>
      <DropdownMenuLabel>Fatihah Adetoro</DropdownMenuLabel>
       <DropdownMenuSeparator />
  
    
    </DropdownMenuGroup>
   
    <DropdownMenuGroup>
            <DropdownMenuItem>My Links</DropdownMenuItem>
        <DropdownMenuItem className='text-red-400'>
            <LogOut className='mr-2'/>
            Logout</DropdownMenuItem>
   
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
