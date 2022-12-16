import React from "react";

import pic404 from "../../assets/404.svg";

export default function ErrorPage() {
  return (
    <div className="flex flex-col justify-center mt-32 items-center">
      <div className="">
        <div className="">
          <img alt="..." className="img-fluid text-center " src={pic404} />
          {/* animate-bounce */}
        </div>
        <div>
          <p className="font-bold text-blue-500 text-4xl text-center">
            Oppsss... Halaman Tidak Ditemukan
          </p>
        </div>
      </div>
    </div>
  );
}
