import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

type loginType = z.infer<typeof loginSchema>;

export { loginSchema, type loginType };
