import { useNavigate } from 'react-router-dom'
import { NavBar } from 'antd-mobile'
import BillProvider from './provider'
import PartTypeList from './partTypeList'
import PartParam from './partParam'
import PartCalulator from './PartCalculator'
import './index.scss'
import { useMemo } from 'react'

export default function AddBill() {
    console.log('AddBill')

    const navigate = useNavigate()

    // const [state, setState] = useState(defaultValue)
    // const PartTypeList = useMemo(() => <PartTypeList></PartTypeList>, [state.billType])

    return (
        <div className="add-bill-container">
            <NavBar onBack={() => navigate(-1)}>新增账单</NavBar>
            {/* <BillAPIContext.Provider value={api}>
                <BillTypeContext.Provider value={state.billType}>
                    <BillParamContext.Provider value={state.billRemark}>
                        {}
                    </BillParamContext.Provider>
                </BillTypeContext.Provider>
            </BillAPIContext.Provider> */}
            <BillProvider>
                <PartTypeList></PartTypeList>
                <PartParam></PartParam>
                <PartCalulator></PartCalulator>
            </BillProvider>
        </div>
    )
}
