import { Popup, Calendar } from 'antd-mobile'

export default function PopSelectDate(props) {
    const { visible, setVisible } = props

    return (
        <Popup
            visible={visible}
            onMaskClick={() => setVisible(false)}
            bodyStyle={{
                minHeight: '55vh',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px'
            }}
        >
            <div className='pop-date-container'>
                <Calendar
                    selectionMode='single'
                    renderLabel={date => {}}
                />
            </div>
        </Popup>
    )
}
