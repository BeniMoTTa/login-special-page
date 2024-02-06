import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  name: z.string().max(127),
  email: z.string().email().max(127),
  password: z
    .string()
    .max(60)
    .regex(/.*[A-Z].*/, { message: "Precisa ter uma letra maiúscula*" })
    .regex(/.*[a-z].*/, { message: "Precisa ter uma letra minúscula*" })
    .regex(/.*\d.*/, { message: "Precisa conter um número*" }),
  phone: z.string().max(11),
  user_color: z.string(),
});

export type UserData = z.infer<typeof userSchema>;
