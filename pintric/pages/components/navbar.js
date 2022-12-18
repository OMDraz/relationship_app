import Link from "next/link";

export const Navbar = () => {
  return (
    <div>
      <Link id="login" href="/login">
        Login
      </Link>
      <Link id="signup" href="/signup">
        Signup
      </Link>
    </div>
  );
};
