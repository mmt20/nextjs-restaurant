import { IoMdRestaurant } from "react-icons/io";
import { auth, signOut } from "@/auth";
import Link from "next/link";

import ThemeToggle from "./theme-toggle";
import styles from "./nav-bar.module.css";

const { navBar, logo, lang, btn, btnLogin, btnRegister } = styles;

const Navbar = async () => {
  const session = await auth();
  const user = session?.user;

  return (
    <nav className={navBar}>
      <div className="container d-flex justify-content-between align-items-center">
        <Link href="/" aria-label="Home">
          <IoMdRestaurant className={logo} />
        </Link>

        <div className="d-flex align-items-center">
          <ThemeToggle className={lang} />

          {user ? <UserMenu firstName={user.firstName!} /> : <GuestMenu />}
        </div>
      </div>
    </nav>
  );
};

const UserMenu = ({ firstName }: { firstName: string }) => (
  <>
    <span className="ms-3  fw-bold">Welcome, {firstName}</span>

    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/login" });
      }}
    >
      <button type="submit" className={`${btn} ${btnLogin}`}>
        Logout
      </button>
    </form>
  </>
);

const GuestMenu = () => (
  <>
    <Link href="/login">
      <button className={`${btn} ${btnLogin}`}>Login</button>
    </Link>

    <Link href="/signup">
      <button className={`${btn} ${btnRegister}`}>Signup</button>
    </Link>
  </>
);

export default Navbar;
