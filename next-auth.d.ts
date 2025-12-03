import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface User {
    id: string;
    email: string;
    firstName?: string;
    accessToken?: string;
  }

  interface Session {
    accessToken?: string;
    user: {
      id: string;
      email: string;
      firstName?: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email: string;
    firstName?: string;
    accessToken?: string;
  }
}
