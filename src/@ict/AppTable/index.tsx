import { TableProps, Table, TablePaginationConfig } from 'antd';
import clsx from 'clsx';
import React from 'react'
import { Unit } from '../../@model/units'

interface Props extends TableProps<any> {
    data: any[]
    columns: any[]
    className?: string
    pagination: false | TablePaginationConfig | undefined
}

const TableUnits: React.FC<Props> = ({
    data, columns, className, pagination, ...rest
}) => {
    return (
        <Table
            className={clsx('table-responsive', className)}
            columns={columns}
            pagination={pagination}
            {...rest}
        />

    )

}

TableUnits.defaultProps = {
    data: [],
    pagination: false,
    className: ""
}

export default TableUnits