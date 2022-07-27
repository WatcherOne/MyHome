import {
    SmileOutline,
    PieOutline,
    PayCircleOutline,
    UserCircleOutline
} from 'antd-mobile-icons'

export const leftNavList = [
    { id: 0, title: '首页', icon: <SmileOutline />, link: '/index' },
    { id: 1, title: '统计', icon: <PieOutline />, link: '/login' }
]

export const rightNavList = [
    { id: 2, title: '账单', icon: <PayCircleOutline />, link: '/bill' },
    { id: 3, title: '我的', icon: <UserCircleOutline />, link: '/myself' }
]
