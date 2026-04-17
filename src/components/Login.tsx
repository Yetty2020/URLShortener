import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { BeatLoader } from "react-spinners"

function Login() {
  return (
   <Card>
  <CardHeader>
    <CardTitle>Login</CardTitle>
    <CardDescription>Login to your account if you already have one</CardDescription>
    
  </CardHeader>
  <CardContent>
    <div>
      <Input name="email" type="email" placeholder="Email" />

    </div>
    
   <div>
     <Input name="password" type="password" placeholder="Enter Password" />
   </div>
   
  </CardContent>
  <CardFooter>
  <Button variant="outline">{true? <BeatLoader color="red" size={10} /> : "Login"}</Button>
    <CardAction>Card Action</CardAction>
  </CardFooter>
</Card>
  )
}

export default Login
