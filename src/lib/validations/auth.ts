import * as z from "zod"

//to define the login schema
export const loginSchema = z.object({
    email: z.email("Please enter a valid email address."),
    password: z.string().min(8, "Password must be at least 8 characters long.").max(20, "Password should not be more than 20 characters")


})

//to extract the inferred type
export type LoginData = z.infer<typeof loginSchema>