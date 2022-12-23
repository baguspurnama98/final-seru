import { TableProps, Table, TablePaginationConfig } from 'antd';
import clsx from 'clsx';
import React from 'react'

interface Props extends TableProps<any> {
    data: any[]
    columns: any[]
    className?: string
    pagination?: false | TablePaginationConfig | undefined
}

const AppTable: React.FC<Props> = ({
    data, columns, className, pagination, ...rest
}) => {
    return (
        <Table
            className={clsx('table-responsive', className)}
            columns={columns}
            pagination={pagination}
            dataSource={data}
            {...rest}
        />
    )
}

AppTable.defaultProps = {
    data: [],
    pagination: false,
    className: ""
}

export default AppTable