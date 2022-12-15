import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">ini landing, titis</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </>
  );
}
