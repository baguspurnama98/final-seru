import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pulse from "../../assets/Pulse";
import { getUnits } from "../../stores/master/units-slice";

function HomePage() {
  const dispatch = useDispatch();
  const loading = useRef(true);
  const token = JSON.parse(localStorage.getItem("token"));
  const { units } = useSelector((store) => store.units);
  const userLogged = JSON.parse(localStorage.getItem("userLogged"));

  const classifyStatus = (status) => {
    return units.filter((item) => item.status === status).length;
  };

  useEffect(() => {
    if (token && loading.current) {
      dispatch(getUnits());
      loading.current = false;
    }
  }, [dispatch, loading, token]);

  return (
    <>
      {token && userLogged && (
        <div className="container max-w-5xl mx-auto pt-20">
          <main>
            <div className="container max-w-4xl">
              <div>
                <h1 className="font-bold text-5xl pb-5">
                  Selamat datang{`, ${userLogged.fullName || ""}`}
                </h1>
                <div className="font-normal text-3xl pb-12">
                  Mandiri Apartment Daan Mogot City
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              {loading.current && <Pulse />}
              {!loading.current && (
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  <div className="flex items-center rounded-xl bg-white p-4 shadow-lg">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                    </div>

                    <div className="ml-4 w-full text-center">
                      <h2 className="font-semibold">
                        {classifyStatus("available")}
                      </h2>
                      <p className="mt-2 text-sm text-gray-500">
                        Unit Tersedia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-orange-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>

                    <div className="ml-4 w-full text-center">
                      <h2 className="font-semibold">
                        {classifyStatus("rented")}
                      </h2>
                      <p className="mt-2 text-sm text-gray-500">Unit Tersewa</p>
                    </div>
                  </div>
                  <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>

                    <div className="ml-4 w-full  text-center">
                      <h2 className="font-semibold">
                        {" "}
                        {classifyStatus("sold")}
                      </h2>
                      <p className="mt-2 text-sm text-gray-500">Unit Terjual</p>
                    </div>
                  </div>
                  <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                    </div>

                    <div className="ml-4 w-full  text-center">
                      <h2 className="font-semibold">
                        {classifyStatus("unavailable")}
                      </h2>
                      <p className="mt-2 text-sm text-gray-500">
                        Unit Tidak Tersedia
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      )}
    </>
  );
}

export default HomePage;
