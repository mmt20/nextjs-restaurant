"use server";

import { signUpType } from "@/app/validations/signUpSchema";
import axiosBase from "../utils/axios.util";
import axiosErrorHandler from "../utils/axios-error-handler.util";
import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export async function signUpAction(prevState: string | undefined, formData: signUpType) {
  const body = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    password: formData.password,
  };

  try {
    const res = await axiosBase.post("/register", body);
    if (res.status >= 200 && res.status < 300) {
      console.log("🚀 ~ file: singup-actiom.ts ~ signUpAction ~ success");

      // Sign in the user using Auth.js after successful registration
      await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });
    }
  } catch (error: unknown) {
    console.log("🚀 ~ file: singup-actiom.ts ~ signUpAction ~ error:", error);
    return axiosErrorHandler(error);
  }

  // Redirect to home page (must be outside try-catch)
  redirect("/");
}
