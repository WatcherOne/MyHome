import React from 'react'
import { useEffect, useRef } from 'react'
import './typeList.scss'

export default function TypeList(props) {
    const { rightIcon, navType, changeNavType, children } = props

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
        <div className='type-list-box'>
            <div className="type-list-nav">
                <div ref={navWrapper} className='btns'>
                    <div onClick={() => changeNavType(0)} className={`nav-btn ${navType === 0 ? 'active' : ''}`}>支出</div>
                    <div onClick={() => changeNavType(1)} className={`nav-btn ${navType === 1 ? 'active' : ''}`}>收入</div>
                    <div onClick={() => changeNavType(2)} className={`nav-btn ${navType === 2 ? 'active' : ''}`}>不计入收支</div>
                </div>
                <div className='order'>
                    { rightIcon }
                    {/* <UnorderedListOutline onClick={() => navigate(`/typeSort/${navType}`)} /> */}
                </div>
                <div ref={moveWrapper} className="move"></div>
            </div>
            {
                React.Children.map(children, child => {
                    return child
                })
            }
            {/* <Swiper
                ref={swiperRef}
                onIndexChange={(index => setNavType(index))}
                indicator={() => null}
                className='type-list-content'
            >{swiperItem}</Swiper>
            { popOperate() } */}
        </div>
    )
}
