import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUnitByFilter,
  getUnits,
  sortUnits,
} from "../../../stores/master/units-slice";
import ModalUnit from "./modal/ModalUnit";
import ModalDetailUnit from "./modal/ModalDetailUnit";
import UnitList from "./UnitList";
import ModalResident from "../residents/ModalResident";
import ResidentList from "../residents/ResidentList";
import { fetchResidents } from "../../../stores/master/resident-slice";

function UnitPage() {
  const [showModal, setShowModal] = useState(false);
  const [showModalDetail, setShowModalDetail] = useState(false);
  const [showModalResident, setShowModalResident] = useState(false);
  const [dataSelected, setDataSelected] = useState(undefined);
  const [refreshKey, setRefreshKey] = useState(0);

  const [filter, setFilter] = useState({
    doFilter: false,
    floor: 0,
    status: "",
    rentSchema: "",
  });

  const [sort, setSort] = useState({
    doSort: false,
    order: "asc", //desc
    price: "sell",
  });

  const { units } = useSelector((store) => store.units);
  const { residents } = useSelector((store) => store.residents);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      if (filter.doFilter === false) {
        if (sort.doSort === true) {
          dispatch(sortUnits(sort)).then((res) => {
            setSort({ ...sort, doSort: false });
            setLoading(false);
          });
        } else {
          dispatch(getUnits()).then(() => setLoading(false));
        }
      } else {
        dispatch(getUnitByFilter(filter)).then(() => {
          setFilter({ ...filter, doFilter: false });
          setLoading(false);
        });
      }
    }
  }, [dispatch, refreshKey, filter, setFilter, setLoading, loading]);

  useEffect(() => {
    dispatch(fetchResidents());
  }, [refreshKey]);

  const resetFilter = () => {
    setLoading(true);
    setFilter({
      doFilter: false,
      floor: 0,
      status: "",
      rentSchema: "",
    });
    setRefreshKey(refreshKey + 1);
  };

  const handleDetailClicked = (id) => {
    setShowModalDetail(true);
    setDataSelected(units[id]);
  };

  const handleOnChangeFilter = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleFilter = (e) => {
    e.preventDefault();
    setFilter({ ...filter, doFilter: true });
    setLoading(true);
    setRefreshKey(refreshKey + 1);
  };

  const handleSort = (e) => {
    e.preventDefault();
    setSort({ ...sort, doSort: true });
    setLoading(true);
    setRefreshKey(refreshKey + 1);
  };

  const handleOnChangeSort = (e) => {
    setSort({ ...sort, [e.target.name]: e.target.value });
  };

  return (
    <>
      {showModal && (
        <ModalUnit
          setShowModal={setShowModal}
          setRefreshKey={setRefreshKey}
          refreshKey={refreshKey}
          loading={loading}
          setLoading={setLoading}
        />
      )}
      {showModalDetail && (
        <ModalDetailUnit
          dataSelected={dataSelected}
          setShowModalDetail={setShowModalDetail}
        />
      )}
      {showModalResident && (
        <ModalResident
          setShowModalResident={setShowModalResident}
          setRefreshKey={setRefreshKey}
          refreshKey={refreshKey}
        />
      )}

      <div className="overflow-x-auto">
        <div className="min-w-screen min-h-screen  flex  bg-white font-sans">
          <div className="w-full px-20 my-10">
            <div className="flex justify-around my-2">
              <div className="flex space-x-4">
                <div className="border p-2 rounded-lg ">
                  <h4 className="text-center font-bold">
                    Filter Data Unit Apartment
                  </h4>

                  <form onSubmit={handleFilter}>
                    <div className="flex space-x-2">
                      <div>
                        <label className="text-gray-800 text-sm font-bold">
                          Floor
                        </label>
                        <input
                          name="floor"
                          type="number"
                          className="mb-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-500 rounded border"
                          placeholder="Ex: 10"
                          onChange={handleOnChangeFilter}
                        />
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
                          <option>Choose</option>
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
                          <option>Choose</option>
                          <option value="daily">Daily</option>
                          <option value="weekly">Weekly</option>
                          <option value="monthly">Monthly</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex space-x-2 justify-center items-center">
                      <button
                        type="submit"
                        className="bg-rose-400 py-1 my-1 px-3 rounded-lg text-white hover:bg-rose-500"
                      >
                        Filter Data
                      </button>
                      <button
                        onClick={resetFilter}
                        className="bg-emerald-600 py-1 px-3 rounded-lg text-white hover:bg-emerald-700"
                      >
                        Reset Filter
                      </button>
                    </div>
                  </form>
                </div>

                <div className="border p-4 rounded-lg ">
                  <h4 className="text-center font-bold">Sort Data By Price</h4>
                  <form className="text-center" onSubmit={handleSort}>
                    <div className=" grid grid-cols-2 gap-2">
                      <select
                        className="p-2 w-full bg-white  text-sm rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
                        name="price"
                        onChange={handleOnChangeSort}
                      >
                        <option value="">Choose</option>
                        <option value="sellPrice">Sell Price</option>
                        <option value="rentPrice">Rent Price</option>
                      </select>
                      <select
                        className="p-2 w-full bg-white  text-sm rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
                        name="order"
                        onChange={handleOnChangeSort}
                      >
                        <option value="">Choose</option>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                      </select>
                    </div>
                    <button className="text center bg-blue-300 py-1 px-2 rounded-lg w-full hover:bg-blue-600 mt-2">
                      Sort
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <h1 className="text-bold font-bold text-xl my-7">
                Apartment Unit List
              </h1>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowModal(true);
                }}
                className="py-3 px-8  bg-blue-700 hover:bg-blue-500 font-bold text-md rounded-md text-white drop-shadow-3xl self-center"
              >
                Add Unit
              </button>
            </div>

            <div className="bg-white shadow-md ">
              <UnitList
                loading={loading}
                units={units}
                handleDetailClicked={handleDetailClicked}
              />
            </div>
            <br />
            <br />
            <hr className="w-full border-gray-300"></hr>
            <div className="flex justify-between">
              <h1 className="text-bold font-bold text-xl my-7">
                Resident List
              </h1>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowModalResident(true);
                }}
                className="py-3 px-8  bg-blue-700 hover:bg-blue-500 font-bold text-md rounded-md text-white drop-shadow-3xl self-center"
              >
                Add Resident
              </button>
            </div>
            <div className="bg-white shadow-md rounded">
              <ResidentList loading={loading} residents={residents} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UnitPage;
