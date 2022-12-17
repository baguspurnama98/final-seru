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
  const [filter, setFilter] = useState({
    floor: "2",
    status: "available",
    rentSchema: "daily",
  });
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

  const handleOnChangeFilter = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleFilter = (e) => {
    e.preventDefault();
    console.log(filter);
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
            <div className="flex justify-between my-2">
              <div className="border p-2 rounded-lg">
                <h4 className="text-center font-bold">Filter Data Form</h4>
                <form
                  className=" grid grid-cols-2 gap-2"
                  onSubmit={handleFilter}
                >
                  <div>
                    <label className="text-gray-800 text-sm font-bold">
                      Floor
                    </label>
                    <select
                      name="floor"
                      onChange={handleOnChangeFilter}
                      value={filter.floor}
                      className="p-2  w-full bg-white  text-sm rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
                    >
                      {[...Array(10).keys()].map((item, idx) => (
                        <option key={idx} value={idx + 1}>
                          {item + 1}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-gray-800 text-sm font-bold">
                      Status
                    </label>
                    <select
                      name="status"
                      value={filter.status}
                      onChange={handleOnChangeFilter}
                      className="p-2 w-full bg-white  text-sm rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
                    >
                      <option value="available">Available</option>
                      <option value="unavailable">Unavailable</option>
                      <option value="rented">Rented</option>
                      <option value="sold">Sold</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-gray-800 text-sm font-bold">
                      Rental Schema
                    </label>
                    <select
                      name="rentSchema"
                      value={filter.rentSchema}
                      onChange={handleOnChangeFilter}
                      className="p-2 w-full bg-white  text-sm rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
                    >
                      <option value="Daily">Daily</option>
                      <option value="Weekly">Weekly</option>
                      <option value="Monthly">Monthly</option>
                    </select>
                  </div>
                  <div className="flex justify-center items-center">
                    <button
                      type="submit"
                      className="bg-rose-400 py-2 px-4 rounded-lg text-white hover:bg-rose-500"
                    >
                      Filter Data
                    </button>
                  </div>
                </form>
              </div>

              <button
                onClick={() => setShowModal(true)}
                className="py-3 px-8  bg-blue-700 hover:bg-blue-500 font-bold text-md rounded-md text-white drop-shadow-3xl self-end"
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
