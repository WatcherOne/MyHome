import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { EditSFill } from 'antd-mobile-icons'
import { leftNavList, rightNavList } from './navList'
import './index.scss'

export default function BottomNav() {
    const navigate = useNavigate()

    const renderNavItem = (item) => {
        const { id, link, icon, title } = item
        return (
            <NavLink
                to={link}
                key={id}
                className={
                    ({ isActive }) => `nav-item${isActive ? ' active' : ''}`
                }
            >
                <div className='nav-item-icon'>{icon}</div>
                <div className='nav-item-title'>{title}</div>
            </NavLink >
        )
    }

    return (
        <>
            <Outlet />
            <div className="bottom-nav-container">
                <div className='nav-content left-nav'>
                    {leftNavList.map(item => renderNavItem(item))}
                </div>
                <div className='center-operate'>
                    <div className='wrapper'>
                        <div onClick={() => navigate('/addBill')} className='icon-box'>
                            <EditSFill />
                        </div>
                    </div>
                </div>
                <div className='nav-content right-nav'>
                    {rightNavList.map(item => renderNavItem(item))}
                </div>
            </div>
        </>
    )
}
