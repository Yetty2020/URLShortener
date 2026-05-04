import {
  Card,
  CardContent,
  CardDescription,

  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { BeatLoader } from "react-spinners"
import { Controller, useForm } from "react-hook-form"
import {type  LoginData, loginSchema } from "@/lib/validations/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import useFetch from "@/hooks/use-fetch"
import { login } from "@/db/apiAuth"
import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

function Login() {
  // 1. Initialize React Hook Form
  const form = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const {loading, error, data , fn: fnLogin} = useFetch(login)

  //to direct to the dashboard page after successful login
  const navigate = useNavigate()
  const  [searchParams] = useSearchParams();
  const longLink = searchParams.get("createNew")
  


  useEffect(() =>{
    if (error === null && data){
      navigate(`/dashboard?${longLink ? `createNew=${longLink}` : "" }`)

    }
    console.log(data)

  }, [data, error])
  

  // 2. Submit Handler
  const onSubmit = async (data: LoginData) => {
    console.log("Validated Login Data:", data);
    // Trigger your Supabase login here
    await fnLogin(data)
  }

  

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Login to your account</CardDescription>
      </CardHeader>
      
      <CardContent>
        {/* We use a standard HTML form and link it to RHF's handleSubmit */}
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup className="space-y-4">
            
            {/* EMAIL FIELD */}
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Email</FieldLabel>
                  <Input
                    {...field}
                    placeholder="example@gmail.com"
                    aria-invalid={fieldState.invalid}
                  />
                  {/* Shows the Zod error message if the field is invalid */}
                  {fieldState.invalid && (
                    <FieldError>{fieldState.error?.message}</FieldError>
                  )}
                </Field>
              )}
            />

            {/* PASSWORD FIELD */}
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Password</FieldLabel>
                  <Input
                    {...field}
                    type="password"
                    placeholder="••••••••"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError>{fieldState.error?.message}</FieldError>
                  )}
                </Field>
              )}
            />

          </FieldGroup>

         
          <Button type="submit" className="w-full mt-6" variant="outline">
            {loading ? (
              <BeatLoader color="red" size={10} />
            ) : (
              "Login"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default Login