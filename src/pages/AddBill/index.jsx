import { NavBar } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

export default function AddBill() {
    const navigate = useNavigate()

    return (
        <div className="add-bill-container">
            <NavBar onBack={() => navigate(-1)}>新增账单</NavBar>
            <div className='type-list'></div>
        </div>
    )
}
