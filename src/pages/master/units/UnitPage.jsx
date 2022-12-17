import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUnits } from "../../../stores/master/units-slice";
import ModalUnit from "./ModalUnit";
import ModalDetailUnit from "./ModalDetailUnit";
import UnitList from "./UnitList";

function UnitPage() {
  const [showModal, setShowModal] = useState(false);
  const [showModalDetail, setShowModalDetail] = useState(false);
  const [dataSelected, setDataSelected] = useState(undefined);
  const [refreshKey, setRefreshKey] = useState(0);

  const { userLogged } = useSelector((store) => store.users);
  const { units } = useSelector((store) => store.units);
  const dispatch = useDispatch();
  const loading = useRef(true);

  useEffect(() => {
    if (loading.current) {
      dispatch(getUnits(userLogged.token));
      loading.current = false;
    }
  }, [dispatch, refreshKey, userLogged.token]);

  const handleDetailClicked = (id) => {
    setShowModalDetail(true);
    setDataSelected(units[id]);
  };

  return (
    <>
      {showModal && (
        <ModalUnit
          setShowModal={setShowModal}
          userLogged={userLogged}
          setRefreshKey={setRefreshKey}
          refreshKey={refreshKey}
          loading={loading}
        />
      )}
      {showModalDetail && (
        <ModalDetailUnit
          dataSelected={dataSelected}
          setShowModalDetail={setShowModalDetail}
        />
      )}

      <div className="overflow-x-auto">
        <div className="min-w-screen min-h-screen  flex  bg-white font-sans">
          <div className="w-full px-20 my-10">
            <div className="flex justify-end my-2">
              <button
                onClick={() => setShowModal(true)}
                className="py-4 px-8  bg-blue-700 hover:bg-blue-500 font-bold text-md rounded-md text-white drop-shadow-3xl"
              >
                Add Unit
              </button>
            </div>
            <div className="bg-white shadow-md rounded ">
              <UnitList
                loading={loading}
                units={units}
                handleDetailClicked={handleDetailClicked}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UnitPage;
