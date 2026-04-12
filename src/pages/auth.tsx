import { useSearchParams } from "react-router-dom"

export default function auth() {
  const [searchParams] = useSearchParams()
  return (

    <div>
      <h1>
        {searchParams.get("CreateNew")? "Hold up, lets login first...": "Login / Signup"}
      </h1>
      
    </div>
  )
}
