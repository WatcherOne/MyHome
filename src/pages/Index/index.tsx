import { List } from 'antd-mobile'
import { useState } from 'react'
import './index.scss'
import { list } from '../../mock/item'

// 账单具体信息
interface billInfo {
    id: number
    title: string
    count: number
    from: number
    time: string
    mark: string
}

// 账单分类区段
interface billSection {
    id: number,
    title: string,
    time: string,
    total: string,
    info: billInfo[]
}

export default function Index() {
    const [showSetting, changeSetting] = useState(false)

    const renderList = () => {
        return list.map((item: billSection) => {
            const { id, title, info } = item
            return (
                <List header={title} key={id}>
                    { renderItem(info) }
                </List>
            )
        })
    }

    const renderItem = (info: billInfo[]) => {
        return info.map((item: billInfo) => {
            const { id, title } = item
            return (
                <List.Item onClick={() => changeSetting(true)} key={id}>{title}</List.Item>
            )
        })
    }

    return (
        <div className='index-container'>
            { renderList() }
            { showSetting ? <div>测试</div> : <></> }
        </div>
    )
}
