import { NavBar } from 'antd-mobile'
import { useParams, useNavigate } from 'react-router-dom'
import navList from '@/mock/list'
import { useEffect, useRef, useState } from 'react'
import './index.scss'

export default function TypeSort() {
    const navigate = useNavigate()
    const { type = 0 } = useParams()
    const [sortList, setSortList] = useState(() => navList[type])

    const [seat] = useState(() => {
        const seatLi = document.createElement('div')
        seatLi.setAttribute('id', 'no-item')
        seatLi.classList.add('list-item')
        return seatLi
    })
    const wrapper = useRef(null)
    const dragStart = (e) => {
        const target = e.target
        const { offsetLeft, offsetTop } = target
        target.classList.add('is-dragging')
        target.style = `left:${offsetLeft};top:${offsetTop}`
    }
    const dragStart1 = (e) => {
        console.log(1, e)
    }
    const dragEnter = (e) => {
        console.log(2, e)
    }
    const dragMove = (e) => {
        console.log(3, e)
    }
    const dragEnd = (e) => {
        console.log(4, e)
    }

    const renderList = () => {
        return sortList.map(item => {
            const { id, name } = item
            return (
                <div className='list-item' key={id}>
                    <div className='item-icon'></div>
                    <div className='item-name'>{name}</div>
                </div>
            )
        })
    }

    return (
        <div className='type-sort-container'>
            <NavBar onBack={() => navigate(-1)}>分类排序</NavBar>
            <div className='type-sort-box'>
                <div className='header-tip'>长按即可拖动排序</div>
                <div
                    ref={wrapper}
                    onTouchStart={dragStart}
                    onTouchMove={dragMove}
                    onTouchEnd={dragEnd}
                    className='list-container'>
                    { renderList() }
                </div>
            </div>
        </div>
    )
}
