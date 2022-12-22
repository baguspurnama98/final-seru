
import { Row } from 'antd'
import { useDispatch } from 'react-redux'
import AppButton from '../../../@ict/AppButton'
import TableUnits from '../../../@ict/AppTable'


const UnitTableComponent = () => {
    const dispatch: any = useDispatch()

    const columns = [
        {
            title: "Floor",
            dataIndex: 'floor',
            key: 'floor'
        },
        {
            title: "Unit",
            dataIndex: 'unit',
            key: 'unit'
        },
        {
            title: "Status",
            dataIndex: 'status',
            key: 'status'
        },
        {
            title: "Price",
            dataIndex: 'price',
            key: 'price'
        },
        {
            title: "Rental Price",
            dataIndex: 'rentalPrice',
            key: 'rentalPrice'
        },
        {
            title: "Rental Schema",
            dataIndex: 'rentalSchema',
            key: 'rentalSchema'
        },
        {
            title: "Resident",
            dataIndex: 'resident',
            key: 'resident'
        },
        {
            title: "Details",
            align: 'center',
            width: "100",
            render: (item: any) => {
                return (
                    <Row justify="center">
                        <AppButton
                            type='link'
                            className='button-noborder'
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
        <div>
            <TableUnits data={ } />
        </div>
    )
}

export default UnitTableComponent