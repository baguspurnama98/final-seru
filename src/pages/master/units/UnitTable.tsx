
import { Row, Table } from 'antd'
import { useDispatch } from 'react-redux'
import AppButton from '../../../ict/AppButton'
import AppTable from '../../../ict/AppTable'


const UnitTableComponent = (props:any) => {
    const columns = [
        {
            title: "Floor",
            dataIndex: 'floor',
            key: 'floor'
        },
        {
            title: "Unit",
            dataIndex: 'unitCode',
            key: 'unitCode'
        },
        {
            title: "Status",
            dataIndex: 'status',
            key: 'status'
        },
        {
            title: "Price",
            dataIndex: 'sellPrice',
            key: 'sellPrice'
        },
        {
            title: "Rental Price",
            dataIndex: 'rentPrice',
            key: 'rentPrice'
        },
        {
            title: "Rental Schema",
            dataIndex: 'rentSchema',
            key: 'rentSchema'
        },
        {
            title: "Resident",
            dataIndex: 'resident',
            key: 'resident',
            render: (resident:any) => <p>{resident.fullName}</p>
        },
        {
            title: "Details",
            align: 'center',
            width: "100",
            render: () => {
                return (
                    <Row justify="center">
                        <AppButton
                            type='link'
                            className='button-noborder bg-blue-500 px-2 py-1 text-white rounded-xl'
                            onClick={() => console.log('oke')
                            }
                            title="Detail"
                        />
                    </Row>
                )
            }
        },

    ]

    
    return (
        
            <AppTable data={props.units} columns={columns} />
       
    )
}

export default UnitTableComponent