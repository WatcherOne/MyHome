import { useContext } from 'react'
import { BillContext } from './provider'
import Calculator from '@/components/Calculator'

export default function PartCalulator () {
    console.log('计算器外部')
    // const { billType } = useContext(BillContext)
    // console.log(billType)
    // const { billType } = billObj

    return <Calculator></Calculator>
}
