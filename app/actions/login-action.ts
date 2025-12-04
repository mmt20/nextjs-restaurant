"use server";

import { loginType } from "@/app/validations/loginSchema";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function loginAction(
  prevState: { error?: string; message?: string } | undefined,
  formData: loginType
): Promise<{ error?: string; message?: string; succeeded?: boolean }> {
  try {
    await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });

    return {
      succeeded: true,
      message: "Login successfully.",
    };
  } catch (error) {
    if (error instanceof AuthError && error.type === "CredentialsSignin") {
      return { error: "Invalid email or password" };
    }
    return { error: "Something went wrong" };
  }
}
