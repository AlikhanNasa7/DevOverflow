import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const SignUpSchema = z.object({
    username: z.string().min(2).max(50),
    email: z.string().includes("@", {message: "You entered not valid email address"}),
    password: z
      .string()
      .min(8, "Password should be at least 8 symbols long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one symbol"),
});

export const SignInSchema = z.object({
    email: z.string().includes("@", {message: "You entered not valid email address"}),
    password: z
      .string()
      .min(8, "Password should be at least 8 symbols long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one symbol"),
});