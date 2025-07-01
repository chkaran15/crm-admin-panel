import z from "zod";

export const signInSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  })
  .refine((data) => data.email && data.password, {
    message: "Email and password are required",
  });

export type SignInSchemaType = z.infer<typeof signInSchema>;
