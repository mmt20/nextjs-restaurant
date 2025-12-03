import axiosErrorHandler from "../utils/axios-error-handler.util";
import axiosBase from "../utils/axios.util";

export async function signInAction({ email, password }: { email: string; password: string }) {
  try {
    const res = await axiosBase.post("/login", {
      email,
      password,
    });
    const data = await res.data;
    if (res.status >= 200 && res.status < 300) {
      console.log("🚀 ~ file: signin-action.ts ~ signInAction ~ data:", data);
      return {
        success: true,
        data,
      };
    }
  } catch (error: unknown) {
    console.log("🚀 ~ file: signin-action.ts ~ signInAction ~ error:", error);
    return axiosErrorHandler(error);
  }
}
