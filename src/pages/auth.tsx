import { useSearchParams } from "react-router-dom"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Login from "@/components/Login"
import Signup from "@/components/Signup"

export default function Auth() {
  const [searchParams] = useSearchParams()
  return (

    <div>
      <h1>
        {searchParams.get("CreateNew")? "Hold up, lets login first...": "Login / Signup"}
      </h1>
      <Tabs defaultValue="login" className="w-[400px] flex flex-col ">
  <TabsList>
    <TabsTrigger value="login">Login</TabsTrigger>
    <TabsTrigger value="signup">SignUp</TabsTrigger>
  </TabsList>
  <TabsContent value="login"><Login/> </TabsContent>
  <TabsContent value="signup"><Signup/></TabsContent>
</Tabs>
    </div>
  )
}
