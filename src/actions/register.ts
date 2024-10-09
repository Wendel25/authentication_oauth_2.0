"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";

export const registerAction = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Inválid credentials!" };
    };

    return { success: "Email sent!" };
}
