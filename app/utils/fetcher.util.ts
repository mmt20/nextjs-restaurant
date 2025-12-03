/* eslint-disable @typescript-eslint/no-explicit-any */
import { auth } from "@/app/auth";

export const fetcher = async ({ url, options, method = "Get" }: { url: string; options?: any; method?: string }) => {
  const session: any = await auth();

  return fetch(`${process.env.BASE_URL}/${url}` as string, {
    method,
    headers: {
      ...options?.headers,
      Authorization: "Bearer " + session?.user?.accessToken || "",
    },
    ...options,
  });
};
