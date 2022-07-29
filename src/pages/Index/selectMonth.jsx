import moment from 'moment'
import { useState } from 'react'
import { ClockCircleOutline } from 'antd-mobile-icons'
import PopSelectMonth from '../../components/PopSelectMonth'

export default function SelectDate() {    
    const [visible, setVisible] = useState(false)
    const [selectedDate, setDate] = useState(() => {
        return moment().format('YYYY年M月')
    })

    return (
        <div className="select-filter-container">
            <div className="filter-name">{selectedDate}</div>
            <div onClick={() => setVisible(true)} className="filter-icon">
                <ClockCircleOutline />
            </div>
            <PopSelectMonth
                visible={visible}
                setVisible={setVisible}
                selectedDate={selectedDate}
                setDate={setDate}
            />
        </div>
    )
}
