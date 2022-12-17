import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../../assets/Spinner";
import { loginUser } from "../../stores/auth/auth-slice";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(!loading);
    dispatch(loginUser({ username, password })).then((res) => {
      if (res.payload.token) {
        navigate("/home");
      } else {
        setLoading(false);
        setErrorLogin(true);
      }
    });
  };

  return (
    <>
      <div className="flex justify-center self-center  z-10">
        <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
          <div className="mb-4">
            <h3 className="font-semibold text-2xl text-gray-800">Login</h3>
            <p className="text-gray-500">Please sign in to your account.</p>
          </div>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 tracking-wide">
                Email
              </label>
              <input
                className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type="text"
                placeholder="mail@gmail.com"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setErrorLogin(false);
                }}
              />
            </div>
            <div className="space-y-2">
              <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                Password
              </label>
              <input
                className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorLogin(false);
                }}
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center items-center bg-blue-700 hover:bg-blue-500 text-gray-100 p-3  rounded-full tracking-wide font-bold text-lg shadow-lg cursor-pointer transition ease-in duration-500"
                disabled={username === "" || password === ""}
              >
                {loading && <Spinner />}
                <span>Login</span>
              </button>
              <div className="text-center m-0">
                {errorLogin && (
                  <span className="text-red-600 text-sm">
                    Login Gagal! Silahkan coba kembali
                  </span>
                )}
              </div>
            </div>
          </form>
          <div className="pt-5 text-center text-gray-400 text-xs"></div>
        </div>
      </div>
    </>
  );
}
