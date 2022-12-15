import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <h1>ini halaman landing</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </>
  );
}
