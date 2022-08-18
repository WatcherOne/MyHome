import { useContext } from 'react'
import { BillTypeContext } from './provider'
import Calculator from '@/components/Calculator'

export default function PartCalulator () {
    console.log('计算器外部')
    const { billType } = useContext(BillTypeContext)

    // return useMemo(() => <Calculator type={billType}></Calculator>, [billType])
    return (
        <Calculator type={billType}></Calculator>
    )
}
