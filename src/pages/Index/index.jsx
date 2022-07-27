import { useState } from 'react'
import { List, SearchBar } from 'antd-mobile'
import SelectType from './selectType'
import SelectDate from './selectDate'
import './index.scss'
import { list } from '../../mock/item'

export default function Index() {
    const [selectedType, changeType] = useState(null)

    const renderHeader = () => {
        return (
            <div className='header-container'>
                <div className='title'>账单本</div>
                <SearchBar style={{ '--background': '#ffffff' }} placeholder='请输入检索内容'/>
                <div className='filter-container'>
                    <SelectType item={selectedType} />
                    <SelectDate />
                </div>
                <div className='count-container'>
                    <div className='income'>收入 ￥45.5元</div>
                    <div className='expend'>支出 ￥56.22元</div>
                </div>
            </div>
        )
    }

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
                <List.Item key={id}>{title}</List.Item>
            )
        })
    }

    return (
        <div className='index-container'>
            { renderHeader() }
            { renderList() }
        </div>
    )
}
