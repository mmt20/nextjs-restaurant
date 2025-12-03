import { IoMdRestaurant } from "react-icons/io";
import { auth, signOut } from "@/auth";

import styles from "./nav-bar.module.css";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";

const { navBar, lang, logo, btn, btnLogin, btnRegister } = styles;

const Navbar = async () => {
  const session = await auth();

  return (
    <nav className={`${navBar} w-100`}>
      <div className="container d-flex justify-content-between">
        <Link href={"/"} style={{ textDecoration: "none" }}>
          <IoMdRestaurant className={logo} />
        </Link>

        <div>
          <ThemeToggle className={lang} />
          {session?.user ? (
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/login" });
              }}
              style={{ display: "inline" }}
            >
              <button type="submit" className={`${btn} ${btnLogin}`}>
                Logout
              </button>
            </form>
          ) : (
            <>
              <Link href="/login">
                <button className={`${btn} ${btnLogin}`}>login</button>
              </Link>
              <Link href="/signup">
                <button className={`${btn} ${btnRegister}`}>signup</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
