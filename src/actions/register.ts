"use server";

import * as z from "zod";
import bcrypt from 'bcrypt';
import { db } from '@/lib/db'
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

export const registerAction = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Inválid credentials!" };
    };

    const { email, name, password } = validatedFields.data;

    const hashPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return { error: "Email already in use!" };
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hashPassword,
        }
    })

    // Verification token email


    return { success: "User created!" };
}
