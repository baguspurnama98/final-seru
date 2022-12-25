import { Row, Table } from "antd";
import { useDispatch } from "react-redux";
import AppButton from "../../../ict/AppButton";
import AppTable from "../../../ict/AppTable";
import { Link } from "react-router-dom";

export const formatRupiah = (formUnit: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(formUnit);
};

const UnitTableComponent = (props: any) => {
  const columns = [
    {
      title: "Floor",
      dataIndex: "floor",
      key: "floor",
    },
    {
      title: "Unit",
      dataIndex: "unitCode",
      key: "unitCode",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => <span className="uppercase">{status}</span>,
    },
    {
      title: "Price",
      dataIndex: "sellPrice",
      key: "sellPrice",
      render: (sellPrice: number) => formatRupiah(sellPrice),
    },
    {
      title: "Rental Price",
      dataIndex: "rentPrice",
      key: "rentPrice",
      render: (rentPrice: number) => formatRupiah(rentPrice),
    },
    {
      title: "Rental Schema",
      dataIndex: "rentSchema",
      key: "rentSchema",
      render: (rentSchema: string) => (
        <span className="uppercase">{rentSchema}</span>
      ),
    },
    {
      title: "Resident",
      dataIndex: "resident",
      key: "resident",
      render: (resident: any) => (
        <>
          {!resident && "-"}
          {resident && (
            <Link
              to={`/resident/${resident.id}`}
              className="text-blue-500 hover:text-blue-600"
            >
              {resident.fullName}
            </Link>
          )}
        </>
      ),
    },
    {
      title: "Details",
      align: "center",
      dataIndex: ["status", "id"],
      key: "actions",
      width: "100",
      render: (status: string, row: any) => {
        //function(text, record, index)
        return (
          <>
            {["sold", "rented"].includes(row["status"]) && "-"}
            {!["sold", "rented"].includes(row["status"]) && (
              <Row justify="center">
                <Link
                  to={`/unit/${row["id"]}`}
                  className="button-noborder bg-blue-500 px-2 py-1 text-white rounded-xl"
                >
                  Detail
                </Link>
              </Row>
            )}
          </>
        );
      },
    },
  ];

  return <AppTable data={props.units} columns={columns} />;
};

export default UnitTableComponent;
