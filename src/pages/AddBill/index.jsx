import { useNavigate } from 'react-router-dom'
import { NavBar } from 'antd-mobile'
import BillProvider from './provider'
import PartTypeList from './partTypeList'
import PartParam from './partParam'
import PartCalulator from './PartCalculator'
import './index.scss'

export default function AddBill() {
    console.log('AddBill')

    const navigate = useNavigate()

    return (
        <div className="add-bill-container">
            <NavBar onBack={() => navigate(-1)}>新增账单</NavBar>
            <BillProvider>
                <PartTypeList></PartTypeList>
                <PartParam></PartParam>
                <PartCalulator></PartCalulator>
            </BillProvider>
        </div>
    )
}
