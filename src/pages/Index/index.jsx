import { Card, List, SearchBar, Tag } from 'antd-mobile'
import { AlipayCircleFill } from 'antd-mobile-icons'
import SelectType from './selectType'
import SelectMonth from './selectMonth'
import './index.scss'
import { list } from '../../mock/item'

export default function Index() {

    const renderHeader = () => {
        return (
            <>
                <div className='title'>账单本</div>
                <SearchBar style={{ '--background': '#ffffff' }} placeholder='请输入检索内容'/>
                <div className='filter-container'>
                    <SelectType />
                    <SelectMonth />
                </div>
                <div className='count-container'>
                    <div className='income'>收入 ￥45.5元</div>
                    <div className='expend'>支出 ￥56.22元</div>
                </div>
            </>
        )
    }
    
    const renderCardTitle = (item) => {
        const { time } = item
        return (
            <div className='card-header'>
                <div className='time'>{time}</div>
                <div className='expend'>
                    <Tag color="#68d499">出</Tag>
                    <span className='money'>24.00</span>
                    <Tag color="#f1c461">入</Tag>
                    <span className='money'>0.00</span>
                </div>
            </div>
        )
    }

    const renderList = () => {
        return list.map(item => {
            const { id, info } = item
            return (
                <Card
                    title={renderCardTitle(item)}
                    style={{ borderRadius: '5px' }}
                    key={id}
                >
                    <List>
                        { renderItem(info) }
                    </List>
                </Card>
            )
        })
    }

    const renderItem = (info) => {
        return info.map(item => {
            const { id, title, count, time, mark } = item
            return (
                <List.Item key={id}>
                    <div className='bill-item'>
                        <div className='icon'>
                            <AlipayCircleFill />
                        </div>
                        <div className='content'>
                            <div className='count-label'>{title}</div>
                            <div className='count-desc'>
                                <div className='time'>{time}</div>
                                <div className='desc'>{mark}</div>
                            </div>
                        </div>
                        <div className={count > 0 ? 'total income-c' : 'total'}>{count > 0 ? `+${count}` : count}</div>
                    </div>
                </List.Item>
            )
        })
    }

    return (
        <div className='index-container'>
            <div className='header-container'>
                { renderHeader() }
            </div>
            <div className='content-container'>
                { renderList() }
            </div>
        </div>
    )
}
