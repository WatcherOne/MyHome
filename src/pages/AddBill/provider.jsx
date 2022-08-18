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

export const BillContext = createContext(null)

export default function BillProvider ({ children }) {
    console.log('222')

    const [billObj, setBillObj] = useState(defaultValue)

    const value = useMemo(() => {
        const setBillType = (billType) => {
            setBillObj({ ...billObj, billType })
        }

        const setBillRemark = (billRemark) => {
            setBillObj({ ...billObj, billRemark })
        }

        return {
            billObj,
            setBillType,
            setBillRemark
        }
    }, [billObj])

    return (
        <BillContext.Provider value={value}>{ children }</BillContext.Provider>
    )
}
