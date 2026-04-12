import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const LandingPage = () => {
  // a state to redirect user to auth when they click on the shorten url button
  const [longUrl, setLongUrl] = useState("")
  const navigate = useNavigate()

  const handleShorten = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    // Handle form submission logic here
    if (longUrl){
      navigate(`/auth?CreateNew=${encodeURIComponent(longUrl)}`)
    }
  }
  return (
    <div>
      <h2>The only URL Shortener youll ever need</h2>
      <form onSubmit={handleShorten} >
        <Input placeholder="Enter your long URL" value={longUrl} onChange={(e) =>{
          setLongUrl(e.target.value)
        }}/>
        <Button type="submit" variant="destructive" >Shorten URL</Button>
      </form>
      <Accordion type="multiple" collapsible defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
      
    </div>
  )
}

export default LandingPage
