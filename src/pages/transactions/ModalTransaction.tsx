import React, { useState } from "react";
import { Transaction } from "../../model/master-model";
import {
  useGetUnitsQuery,
  useUpdateUnitMutation,
} from "../../services/unitsApi";
import { useGetResidentsQuery } from "../../services/residentsApi";
import { useCreateTransactionMutation } from "../../services/transactionsApi";
import { Unit } from "../../model/units";
import { Transaction as typeTransaction } from "../../model/transaction";
import Pulse from "../../assets/Pulse";
import AppButton from "../../ict/AppButton";

const ModalTransaction: React.FC<{
  setShowTransactionModal: (status: boolean) => void;
}> = (props) => {
  const [form, setForm] = useState<typeTransaction>(new Transaction());
  const [unitSelected, setUnitSelected] = useState<Unit>();
  const [loading, setLoading] = useState(false);
  const { data: units = [], isLoading } = useGetUnitsQuery({
    floor: '',
    status: "", 
    rentSchema: "",
  });
  const { data: residents = [] } = useGetResidentsQuery();
  const [createTransaction] = useCreateTransactionMutation();
  const [updateUnit] = useUpdateUnitMutation();
  const handleOnChange = (e: any) => {
    if (e.target.name === "schema") {
      setForm({
        ...form,
        price: getPrice(e.target.value, form.unitId!),
        schema: e.target.value,
      });
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

  const getPrice = (schema: string, id: string) => {
    if (schema !== "") {
      const selected = units!.findIndex(
        (item: any) => String(item.id) === String(id)
      );
      setUnitSelected(units[selected]);
      if (schema === "rent") {
        return units[selected].rentPrice;
      } else {
        return units[selected].sellPrice;
      }
    } else {
      return 0;
    }
  };

  const countDays = (start: any, end: any) => {
    start = new Date(start);
    end = new Date(end);
    var Difference_In_Time =
      (end.getTime() - start.getTime()) / (1000 * 3600 * 24);
    return Difference_In_Time;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    let residentFix: any = { ...unitSelected };
    residentFix["residentId"] = form.residentId;
    residentFix["status"] = form.schema === "rent" ? "rented" : "sold";

    const idxResidentSelected = residents.findIndex(
      (item) => String(item.id) === String(form.residentId)
    );
    form["residentId"] = residents[idxResidentSelected].id;
    if (form.schema === "rent") {
      form["profit"] = Number(form.price) - unitSelected!.rentPrice;
      form["period"] = String(countDays(form.rentStartDate, form.rentEndDate));
    } else {
      form["profit"] = Number(form.price) - unitSelected!.sellPrice;
      form["period"] = "-";
    }

    await createTransaction(form);
    await updateUnit(residentFix);
    setLoading(false);
    props.setShowTransactionModal(false);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="py-20 bg-gray-700 bg-opacity-80 opacity-100 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div
          role="alert"
          className="container mx-auto w-11/12 md:w-2/3 max-w-lg opacity-100"
        >
          <div className="relative py-5 px-5 md:px-10 bg-white shadow-md rounded border border-blue-400">
            <div className="flex items-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-blue-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                />
              </svg>

              <h1 className="font-extrabold text-2xl font-sans text-blue-800 ml-3">
                New Transaction
              </h1>
            </div>
            {isLoading ? (
              <div className="text-center">
                <Pulse />
              </div>
            ) : (
              <>
                {!isLoading &&
                units.filter((unit) => unit.status === "available").length ===
                  0 ? (
                  <div className="text-center">
                    Unit tidak Unit yang tersedia. <br /> Tolong Cek Kembali!
                  </div>
                ) : (
                  <>
                    <div>
                      <div className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                        Choose Unit Apartment
                      </div>

                      <select
                        name="unitId"
                        onChange={handleOnChange}
                        className="p-2 text-sm mb-2 w-full bg-white rounded border-2 border-slate-200 "
                      >
                        <option value="">Choose...</option>
                        {units
                          .filter((unit) => unit.status === "available")
                          .map((unit) => (
                            <option key={unit.id} value={unit.id}>
                              {unit.unitCode}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                        Choose Resident
                      </label>
                      <select
                        name="residentId"
                        onChange={handleOnChange}
                        className="p-2 text-sm mb-2 w-full bg-white rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
                      >
                        <option value="">Choose...</option>
                        {residents.map((resident) => (
                          <option key={resident.id} value={resident.id}>
                            {resident.fullName}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                        Choose Schema
                      </label>
                      <select
                        name="schema"
                        onChange={handleOnChange}
                        disabled={!form.unitId}
                        value={form.schema}
                        className="p-2 text-sm mb-2 w-full bg-white rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
                      >
                        <option value="">Choose...</option>
                        <option value="rent">Rent</option>
                        <option value="sell">Sell</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                        Transaction Price
                      </label>
                      <div className="relative mb-2 ">
                        <input
                          name="price"
                          value={form.price}
                          type="number"
                          className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-300 rounded border"
                          onChange={handleOnChange}
                        />
                      </div>
                    </div>

                    {form.schema === "rent" && (
                      <div>
                        <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                          Start Date
                        </label>
                        <div className="relative mb-2">
                          <div className="absolute text-gray-600 flex items-center pr-3 h-full cursor-pointer"></div>
                          <input
                            name="rentStartDate"
                            type="date"
                            className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-300 rounded border"
                            onChange={handleOnChange}
                          />
                        </div>
                        <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                          End Date
                        </label>
                        <div className="relative mb-2">
                          <div className="absolute text-gray-600 flex items-center pr-3 h-full cursor-pointer"></div>
                          <input
                            name="rentEndDate"
                            type="date"
                            className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-300 rounded border"
                            onChange={handleOnChange}
                          />
                        </div>
                        <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                          Billing Date
                        </label>
                        <div className="relative mb-2">
                          <div className="absolute text-gray-600 flex items-center pr-3 h-full cursor-pointer"></div>
                          <input
                            name="billingDate"
                            type="date"
                            className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-300 rounded border"
                            onChange={handleOnChange}
                          />
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                        Transaction Date
                      </label>
                      <div className="relative mb-2">
                        <input
                          name="transactionDate"
                          type="date"
                          className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-300 rounded border"
                          onChange={handleOnChange}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-end w-full space-x-3 mt-4">
                      <button
                        className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-blue-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                        onClick={() => props.setShowTransactionModal(false)}
                        aria-label="close modal"
                      >
                        Cancel
                      </button>

                      <AppButton
                        className="flex justify-center items-center transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-5 text-sm"
                        title="Submit"
                        disabled={!form.unitId}
                        htmlType="submit"
                      />
                    </div>
                  </>
                )}
              </>
            )}
            <button
              className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
              onClick={() => props.setShowTransactionModal(false)}
              aria-label="close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-x"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModalTransaction;
