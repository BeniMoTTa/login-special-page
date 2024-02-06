import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(10, "Nome mínimo de 10 caracteres")
    .max(50, "Nome máximo de 60 caracteres"),

  email: z
    .string()
    .email("Email inválido")

    .max(100, "Tamanho máximo de 100 caracteres"),
  password: z
    .string()

    .min(8, "Tamanho mínimo de 8 caracteres")
    .max(30, "Tamanho máximo de 30 caracteres"),

  phone: z.string().max(20, "Tamanho máximo de 20 caracteres"),
  photo: z.string(),
});

export type RegisterData = z.infer<typeof registerSchema>;
