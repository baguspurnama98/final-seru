import { Row, Table } from "antd";

import AppButton from "../../../ict/AppButton";
import AppTable from "../../../ict/AppTable";
import { Link } from "react-router-dom";
import { useDeleteResidentMutation } from "../../../services/residentsApi";

export const formatRupiah = (formUnit: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(formUnit);
};

const ResidentsTableComponent = (props: any) => {
  const [deleteResident] = useDeleteResidentMutation()

  const columns = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      render: (item: string, record: any, index: number) => <>{index + 1}</>,
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Marital Status",
      dataIndex: "maritalStatus",
      key: "maritalStatus",
      render: (text: string) => <span className="capitalize">{text}</span>
    },
    {
      title: "Dependents",
      dataIndex: "dependents",
      key: "dependents",
    },
    {
      title: "Birth Date",
      dataIndex: "birthDate",
      key: "birthDate",
    },
    {
      title: "Manage",
      align: "center",
      key: "actions",
      width: "100",
      render: (status: string, row: any) => {
        return (
          <Row justify="center">
            <Link
              to={`/resident/${row["id"]}`}
              className="button-noborder bg-blue-500 px-2 py-1 text-white rounded-lg"
            >
              Detail
            </Link>
            <AppButton title="Delete" className="bg-red-500 text-white ml-2" onClick={() => deleteResident(row["id"])} />
          </Row>
        );
      },
    },
  ];

  return <AppTable rowKey="id" data={props.units} columns={columns} />;
};

export default ResidentsTableComponent;
