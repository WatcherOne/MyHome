import { NavBar, Popup, Swiper } from 'antd-mobile'
import { QuestionCircleOutline, UnorderedListOutline, MoreOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'
import PopHeader from '@/components/PopHeader'
import { useEffect, useRef, useState } from 'react'
import mockList from '@/mock/list'
import TypeList from './typeList'
import './index.scss'

export default function TypeManage() {
    const navigate = useNavigate()

    const [visibleTip, setVisibleTip] = useState(false)
    const closePopTip = () => {
        setVisibleTip(false)
    }
    const popTip = () => {
        return (
            <Popup
                visible={visibleTip}
                onMaskClick={() => closePopTip()}
                bodyStyle={{
                    height: '50vh'
                }}
            >
                <PopHeader title="操作指南" closePop={closePopTip} />
                <div className='pop-tip-content'>
                    <div className='title'>排序/修改</div>
                    <div className='content'>点击右上角按钮可以进行排序, 单击分类可修改</div>
                    <div className='title'>保持简洁</div>
                    <div className='content'>建议分类不要设置太详细, 否则会增加操作复杂度</div>
                </div>
            </Popup>
        )
    }

    const rightIcon = () => {
        return (
            <div className='right-icon'>
                <QuestionCircleOutline onClick={() => setVisibleTip(true)} />
                { popTip() }
            </div>
        )
    }

    const [visibleOperate, setVisibleOperate] = useState(false)
    const [selectedTypeName, setTypeName] = useState('')
    const closePopOperate = () => [
        setVisibleOperate(false)
    ]
    const popOperate = () => {
        return (
            <Popup
                visible={visibleOperate}
                onMaskClick={() => closePopOperate()}
                bodyStyle={{
                    height: '40vh'
                }} 
            >
                <div className='operate-list'>
                    <div className='each-operate operate-object'>{selectedTypeName}</div>
                    <div className='each-operate'>修改</div>
                    <div className='each-operate'>排序</div>
                    <div className='each-operate'>删除</div>
                </div>
            </Popup>
        )
    }

    const [navType, setNavType] = useState(0)
    const operateCurrent = (item) => {
        const { name } = item
        setTypeName(name)
        setVisibleOperate(true)
    }
    const changeNavType = (index) => {
        setNavType(index)
        swipeTo(index)
    }
    const swiperItem = [0, 1, 2].map(index => (
        <Swiper.Item key={index}>
            <div className='type-list'>
                {
                    mockList[index].map(item => {
                        const { id, name } = item
                        return (
                            <div className='type-item' key={id}>
                                <div className='item-title'>
                                    <div className='item-icon'></div>
                                    <div className='item-name'>{name}</div>
                                </div>
                                <div className='operate'>
                                    <MoreOutline onClick={() => operateCurrent(item)} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Swiper.Item>
    ))

    const swiperRef = useRef(null)
    const swipeTo = (index) => {
        swiperRef.current?.swipeTo(index)
    }

    const navWrapper = useRef(null)
    const moveWrapper = useRef(null)
    useEffect(() => {
        const navTarget = navWrapper.current
        if (navTarget) {
            const btns = navTarget.querySelectorAll('.nav-btn')
            const left = btns[navType].offsetLeft
            moveWrapper.current.style = `left:${left}px;width:${navType === 2 ? '75' : '40'}px`
        }
    }, [navType])

    const operateIcon = <UnorderedListOutline onClick={() => navigate(`/typeSort/${navType}`)} />

    return (
        <div className="type-list-container">
            <NavBar right={rightIcon()} onBack={() => navigate(-1)}>分类管理</NavBar>
            {/* <div className='type-list-box'>
                <div className="type-list-nav">
                    <div ref={navWrapper} className='btns'>
                        <div onClick={() => changeNavType(0)} className={`nav-btn ${navType === 0 ? 'active' : ''}`}>支出</div>
                        <div onClick={() => changeNavType(1)} className={`nav-btn ${navType === 1 ? 'active' : ''}`}>收入</div>
                        <div onClick={() => changeNavType(2)} className={`nav-btn ${navType === 2 ? 'active' : ''}`}>不计入收支</div>
                    </div>
                    <div className='order'>
                        <UnorderedListOutline onClick={() => navigate(`/typeSort/${navType}`)} />
                    </div>
                    <div ref={moveWrapper} className="move"></div>
                </div>
                <Swiper
                    ref={swiperRef}
                    onIndexChange={(index => setNavType(index))}
                    indicator={() => null}
                    className='type-list-content'
                >{swiperItem}</Swiper>
                { popOperate() }
            </div> */}
            <TypeList
                rightIcon={operateIcon}
                navType={navType}
                changeNavType={changeNavType}>
                <Swiper
                    ref={swiperRef}
                    onIndexChange={(index => setNavType(index))}
                    indicator={() => null}
                    className='type-list-content'
                >{swiperItem}</Swiper>
                { popOperate() }
            </TypeList>
        </div>
    )
}
