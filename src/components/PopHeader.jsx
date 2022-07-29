import { CloseOutline } from 'antd-mobile-icons'
import './PopHeader.scss'

export default function PopHeader(props) {
    const { title = '弹出框', closePop } = props

    return (
        <div className='pop-top'>
            <div className='icon'>
                <CloseOutline onClick={() => closePop && closePop()} />
            </div>
            <div className='title'>{title}</div>
        </div>
    )
}
