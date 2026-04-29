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
import Error from "./Error"
import { useState } from "react"

function Login() {
  // to set initial state for the form data
  const [formData, setFormData] = useState({email: "", password: ""})

  // to handle input change
  const handleInputChange = (e) =>{
    const {name, value} = e.target
    setFormData((prevState)=>({
      ...prevState, [name]: value

    }))

  }
  return (
   <Card>
  <CardHeader>
    <CardTitle>Login</CardTitle>
    <CardDescription>Login to your account if you already have one</CardDescription>
    
  </CardHeader>
  <CardContent>
    <div>
      <Input name="email" type="email" placeholder="Email" onChange={handleInputChange} />
      <Error message={"Please enter a valid email address"}/>

    </div>
    
   <div>
     <Input name="password" type="password" placeholder="Enter Password" onChange={handleInputChange}  />
     <Error message={"Please enter a valid email address"}/>
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
