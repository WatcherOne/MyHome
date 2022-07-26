import './LoadingPage.scss'
import { UndoOutline } from 'antd-mobile-icons'

export function LoadingPage() {
    return (
        <div className='loading-page-container'>
            <div className="box">
                <UndoOutline className="icon" />
                <span className="title">Loading...</span>
            </div>
        </div>
    )
}
