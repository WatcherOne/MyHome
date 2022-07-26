import { List } from 'antd-mobile'
import { useState } from 'react'
import './index.scss'
import { list } from '../../mock/item'

export default function Index() {
    const [showSetting, changeSetting] = useState(false)

    const renderList = () => {
        return list.map(item => {
            const { id, title, info } = item
            return (
                <List header={title} key={id}>
                    { renderItem(info) }
                </List>
            )
        })
    }

    const renderItem = (info) => {
        return info.map(item => {
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
