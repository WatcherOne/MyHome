import { Popup } from 'antd-mobile'
import './PopSelectType.scss'

export default function PopSelectType(props) {
    const { visible, setVisible } = props

    return (
        <Popup
            visible={visible}
            onMaskClick={() => setVisible(false)}
            bodyStyle={{
                minHeight: '40vh',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px'
            }}
        >
            <div className='pop-type-container'>
                <span>ceshi</span>
            </div>
        </Popup>
    )
}
