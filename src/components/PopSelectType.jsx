import { Popup, Tabs, Grid } from 'antd-mobile'
import { useState } from 'react'
import './PopSelectType.scss'

export default function PopSelectType(props) {
    const { visible, setVisible, typeName, setTypeName } = props

    const [typeList] = useState([
        { id: 0, title: '支出', type: 0, list: ['餐饮', '交通', '服饰', '购物'] },
        { id: 1, title: '收入', type: 1, list: ['工资', '奖金', '收红包'] },
        { id: 2, title: '不计入收支', type: 2, list: ['理财', '借还款', '其它'] }
    ])

    const closePop = () => {
        setVisible(false)
    }

    const changeType = (value) => {
        setTypeName(value)
        closePop()
    }

    const renderContent = (list) => {
        return (
            <Grid columns={3} gap={8}>
            {
                list.map((value, index) => {
                    return (
                        <Grid.Item key={index}>
                            <div
                                onClick={() => changeType(value)}
                                className={typeName === value ? 'type-item active' : 'type-item'}
                            >{value}</div>
                        </Grid.Item>
                    )
                })
            }
            </Grid>
        )
    }

    return (
        <Popup
            visible={visible}
            onMaskClick={() => closePop()}
            bodyStyle={{
                minHeight: '55vh',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px'
            }}
        >
            <div className='pop-type-container'>
                <Tabs className='content'>
                    {
                        typeList.map(item => {
                            const { id, title, list } = item
                            return (
                                <Tabs.Tab title={title} key={id}>
                                    { renderContent(list) }
                                </Tabs.Tab>
                            )
                        })
                    }
                </Tabs>
            </div>
        </Popup>
    )
}
