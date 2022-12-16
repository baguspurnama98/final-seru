import { useState } from "react";
import ModalDetailResident from "./ModalDetailResident";

export default function UnitPage() {
  const [tes, setTes] = useState(false);

  return (
    <>
      {tes && <ModalDetailResident tes={tes} />}
      <button
        onClick={() => setTes(true)}
        class="bg-gray-700 mr-5 mt-20 text-white px-3 py-1 rounded-sm shadow-md"
      >
        Add
      </button>
    </>
  );
}
