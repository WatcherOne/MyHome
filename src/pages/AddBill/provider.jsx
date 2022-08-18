import { createContext, useMemo, useState } from 'react'
import moment from 'moment'

const nowDate = moment().format('yyyy-MM-dd')

const defaultValue = {
    // 默认值
    billType: 0,
    billDate: nowDate,
    billRemark: '',
    billCost: 0
}

export const BillAPIContext = createContext(null)
export const BillTypeContext = createContext(null)
export const BillParamContext = createContext(null)

export default function BillProvider ({ children }) {
    console.log('provider')

    const [state, setState] = useState(defaultValue)

    const api = useMemo(() => {
        const setBillType = (billType) => {
            setState({ ...state, billType })
        }

        const setBillRemark = (billRemark) => {
            setState({ ...state, billRemark })
        }

        return {
            setBillType,
            setBillRemark
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <BillAPIContext.Provider value={api}>
            <BillTypeContext.Provider value={{ billType: state.billType }}>
                <BillParamContext.Provider value={{ billRemark: state.billRemark }}>{ children }</BillParamContext.Provider>
            </BillTypeContext.Provider>
        </BillAPIContext.Provider>
    )
}
