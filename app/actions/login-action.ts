"use server";

import { loginType } from "@/app/validations/loginSchema";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export async function loginAction(
  prevState: { error: string } | undefined,
  formData: loginType
): Promise<{ error: string }> {
  try {
    await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.message || "Invalid credentials" };
    }
    return { error: "Something went wrong" };
  }

  redirect("/");
}
