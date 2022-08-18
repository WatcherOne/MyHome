import { useContext } from 'react'
import { Input } from 'antd-mobile'
import { BillContext } from './provider'

export default function PartParam () {
    console.log('Parameter')

    const { billObj, setBillRemark } = useContext(BillContext)
    const { billRemark, billDate } = billObj

    return (
        <div className='param-list'>
            <div className='remark-cost'>
                <Input
                    value={billRemark}
                    onChange={(value) => setBillRemark(value)}
                    placeholder='请输入备注信息'
                />
                <div className='show-cose income-c'>88.36</div>
            </div>
            <div className='date'>{billDate}</div>
        </div>
    )
}
