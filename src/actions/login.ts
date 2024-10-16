"use server";

import * as z from "zod";
import { LoginSchema } from "@/schemas";

export const loginAction = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Inválid credentials!" };
    };

    return { success: "Email sent!" };
}
