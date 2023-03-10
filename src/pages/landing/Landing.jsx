import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/apartment-hero.svg";

export default function LandingPage() {
  return (
    <>
      <div className="container max-w-5xl mx-auto grid md:grid-cols-2 sm:grid-cols-1 py-24">
        <div className="my-auto">
          <h1 className="font-bold font-sans text-5xl pb-3 text-blue-900">
            Mandiri Apartment
          </h1>
          <div className="text-3xl font-bold pb-10">Daan Mogot City</div>
          {!localStorage.getItem("token") && (
            <Link
              to="/login"
              className="py-4 px-16 bg-blue-700 hover:bg-blue-500 font-bold text-2xl rounded-md text-white drop-shadow-3xl"
            >
              Login
            </Link>
          )}
        </div>
        <div>
          <img src={logo} alt="ilustration-laslesvpn" />
        </div>
      </div>
    </>
  );
}
