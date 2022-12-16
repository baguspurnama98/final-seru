import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <>
      <div className="flex justify-center self-center  z-10">
        <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
          <div className="mb-4">
            <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
            <p className="text-gray-500">Please sign in to your account.</p>
          </div>
          <div className="space-y-5">
            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700 tracking-wide">
                Email
              </label>
              <input
                className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type="text"
                placeholder="mail@gmail.com"
              />
            </div>
            <div class="space-y-2">
              <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                Password
              </label>
              <input
                className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type="text"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  class="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                />
                <label
                  for="remember_me"
                  class="ml-2 block text-sm text-gray-800"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="text-blue-400 hover:bg-blue-500">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <Link to="/home">
                <button
                  type="submit"
                  className="w-full flex justify-center bg-blue-700 hover:bg-blue-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                >
                  Sign in
                </button>
              </Link>
            </div>
          </div>
          <div class="pt-5 text-center text-gray-400 text-xs"></div>
        </div>
      </div>
    </>
  );
}
