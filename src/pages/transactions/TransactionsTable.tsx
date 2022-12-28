import { Row } from "antd";
import AppTable from "../../ict/AppTable";
import { Link } from "react-router-dom";
import React from "react";
import { Transaction } from "../../model/transaction";

export const formatRupiah = (formUnit: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(formUnit);
};

const TransactionTableComponent: React.FC<{ transactions: Transaction[] }> = (
  props
) => {
  const columns = [
    {
      title: "#",
      key: "index",
      render: (_: string, __: any, index: number) => <>{index + 1}</>,
    },
    {
      title: "Floor",
      dataIndex: "floor",
      key: "floor",
      render: (_: any, { unit }: any) => <>{unit.floor}</>,
    },
    {
      title: "Unit",
      dataIndex: "unitCode",
      key: "unitCode",
      render: (_: any, { unit }: any) => <>{unit.unitCode}</>,
    },
    {
      title: "Resident",
      dataIndex: "resident",
      key: "resident",
      render: (_: any, { resident }: any) => (
        <>
          <Link to={`/resident/${resident.id}`}>{resident.fullName}</Link>
        </>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_: any, { unit }: any) => (
        <>
          <span className="uppercase">{unit.status}</span>
        </>
      ),
    },
    {
      title: "Price",
      key: "priceOri",
      render: (_: string, { unit }: any) => {
        return (
          <>
            <span>
              {formatRupiah(
                unit.schema === "rented" ? unit.rentPrice : unit.sellPrice
              )}
            </span>
          </>
        );
      },
    },
    {
      title: "Transaction Price",
      dataIndex: "price",
      key: "price",
      render: (price: number) => formatRupiah(price),
    },
    {
      title: "Profit",
      dataIndex: "profit",
      key: "profit",
      render: (text: number) => formatRupiah(text),
    },
    {
      title: "Transaction Date",
      dataIndex: "transactionDate",
      key: "transactionDate",
    },
    {
      title: "Rental Schema",
      dataIndex: "schema",
      key: "schema",
    },
    {
      title: "Start Date",
      dataIndex: "rentStartDate",
      key: "rentStartDate",
      render: (_: any, { schema }: any) => <>{schema === "rent" ? _ : "-"}</>,
    },
    {
      title: "End Date",
      dataIndex: "rentEndDate",
      key: "rentEndDate",
      render: (_: any, { schema }: any) => <>{schema === "rent" ? _ : "-"}</>,
    },
    {
      title: "Billing Date",
      dataIndex: "billingDate",
      key: "billingDate",
      render: (_: any, { schema }: any) => <>{schema === "rent" ? _ : "-"}</>,
    },

    {
      title: "Actions",
      align: "center",
      key: "actions",
      width: "100",
      render: (status: string, row: any) => {
        return (
          <Row justify="center">
            <Link
              to={`/transactions/${row["id"]}`}
              className="button-noborder bg-blue-500 px-5 py-1 text-white rounded-md"
            >
              Detail
            </Link>
          </Row>
        );
      },
    },
  ];

  return <AppTable rowKey="id" data={props.transactions} columns={columns} />;
};

export default TransactionTableComponent;
