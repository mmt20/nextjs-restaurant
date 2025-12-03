/* eslint-disable @typescript-eslint/no-explicit-any */
import { auth } from "@/auth";
import axios from "axios";

const axiosBase = axios.create({
  baseURL: process.env.BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL,
});

axiosBase.interceptors.request.use(
  async (config: any) => {
    const session: any = await auth();
    // Use a static default language instead of dynamic getLocale()

    config.headers = {
      ...config.headers,
    };

    if (session?.user?.accessToken) {
      config.headers.Authorization = `Bearer ${session.user.accessToken}`;
    }

    return config;
  },
  (error) => {
    console.error("🚀 ~ axios interceptor error:", error);
    return Promise.reject(error);
  }
);

export default axiosBase;
