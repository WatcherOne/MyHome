import { NavBar, Popup } from 'antd-mobile'
import { QuestionCircleOutline, UnorderedListOutline, MoreOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'
import PopHeader from '@/components/PopHeader'
import { useEffect, useRef, useState } from 'react'
import mockList from '@/mock/list'
import './index.scss'

export default function TypeList() {
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
                stopPropagation={['click', 'touchStart', 'touchMove', 'touchEnd']}
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
    const renderTypeList = () => {
        return [0, 1, 2].map(index => {
            return (
                <div className='type-list' key={index}>
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
            )
        })
    }

    // 左右滑动
    const listContainer = useRef(null)
    const [rootWidth, setRootWidth] = useState(0)
    useEffect(() => {
        listContainer.current && setRootWidth(listContainer.current.clientWidth)
    }, [listContainer])
    const [moveStart, setMoveStart] = useState()
    const [moveEnd, setMoveEnd] = useState()
    const [moveLeft, setMoveLeft] = useState(0)
    const slideStart = (e) => {
        const { pageX, clientX } = e.touches[0]
        setMoveStart(pageX || clientX)
    }
    const slideMove = (e) => {
        const { pageX, clientX } = e.touches[0]
        setMoveEnd(pageX || clientX)
        const distance = (pageX || clientX) - moveStart
        moveListContainer(distance + moveLeft)
    }
    const slideEnd = () => {
        const distance = moveEnd - moveStart
        if (Math.abs(distance) > 150) {
            // 向右滑动
            if (distance > 0) {
                if (moveLeft === -rootWidth * 2) {
                    setListContainer(distance + moveLeft, -rootWidth)
                    changeNav(1)
                } else {
                    setListContainer(distance + moveLeft, 0)
                    changeNav(0)
                }
            // 向左滑动
            } else {
                if (moveLeft === 0) {
                    setListContainer(distance + moveLeft, -rootWidth)
                    changeNav(1)
                } else {
                    setListContainer(distance + moveLeft, -rootWidth * 2)
                    changeNav(2)
                }
            }
        } else {
            setListContainer(distance + moveLeft, moveLeft)
        }
    }
    const moveListContainer = (distance) => {
        listContainer.current.style = `transform: translate3d(${distance}px, 0px, 0px)`
    }
    const setListContainer = (currentPosition, targetPosition) => {
        const differ = targetPosition - currentPosition
        const count = Math.abs(differ)
        let start = currentPosition
        for (let i = 0; i <= count; i++) {
            listContainer.current.style = `transform: translate3d(${start}px, 0px, 0px)`
            differ > 0 ? start++ : start--
        }
    }

    const changeNav = (type) => {
        setNavType(type)
        setListContainer(moveLeft, -rootWidth * type)
        setMoveLeft(-rootWidth * type)
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

    return (
        <div className="type-list-container">
            <NavBar right={rightIcon()} onBack={() => navigate(-1)}>分类管理</NavBar>
            <div className='type-list-box'>
                <div className="type-list-nav">
                    <div ref={navWrapper} className='btns'>
                        <div onClick={() => changeNav(0)} className={`nav-btn ${navType === 0 ? 'active' : ''}`}>支出</div>
                        <div onClick={() => changeNav(1)} className={`nav-btn ${navType === 1 ? 'active' : ''}`}>收入</div>
                        <div onClick={() => changeNav(2)} className={`nav-btn ${navType === 2 ? 'active' : ''}`}>不计入收支</div>
                    </div>
                    <div className='order'>
                        <UnorderedListOutline onClick={() => navigate(`/typeSort/${navType}`)} />
                    </div>
                    <div ref={moveWrapper} className="move"></div>
                </div>
                <div
                    ref={listContainer}
                    onTouchStart={slideStart}
                    onTouchMove={slideMove}
                    onTouchEnd={slideEnd}
                    className='type-list-content'
                >
                    { renderTypeList() }
                    { popOperate() }
                </div>
            </div>
        </div>
    )
}
