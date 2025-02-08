import { z } from "zod";

export const userSchema = z.object({
  username: z
    .string()
    .min(4, {
      message: "El nombre de usuario tiene que tener 4 caracteres minimo",
    })
    .max(15, {
      message: "El nombre de usuario tiene que tener menos de 15 caracteres",
    }),
  password: z
    .string()
    .min(6, { message: "La contraseña debe tener 6 caracteres minimo" }),
});
