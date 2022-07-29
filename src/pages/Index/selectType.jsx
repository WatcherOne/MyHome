import { useState } from 'react'
import { SystemQRcodeOutline } from 'antd-mobile-icons'
import PopSelectType from '@/components/PopSelectType'

export default function SelectType() {
    const [typeName, setTypeName] = useState()

    const [visible, setVisible] = useState(false)

    return (
        <div className="select-filter-container">
            <div className="filter-name">{typeName || '全部类型'}</div>
            <div onClick={() => setVisible(true)} className="filter-icon">
                <SystemQRcodeOutline />
            </div>
            <PopSelectType
                visible={visible}
                setVisible={setVisible}
                typeName={typeName}
                setTypeName={setTypeName}
            />
        </div>
    )
}
