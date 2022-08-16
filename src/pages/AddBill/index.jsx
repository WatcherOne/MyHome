import { NavBar, Swiper, Input } from 'antd-mobile'
import { UnorderedListOutline } from 'antd-mobile-icons'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import mockList from '@/mock/list'
import TypeList from '@/pages/TypeManage/typeList'
import Calculator from '@/components/Calculator'
import './index.scss'

const Parameter = () => {
    return (
        <div className='param-list'>
            <div className='remark-cost'>
                <Input />
                <div className='show-cose income-c'>88.36</div>
            </div>
            <div className='date'>2022-08-16</div>
        </div>
    )
}

export default function AddBill() {
    const navigate = useNavigate()

    const [navType, setNavType] = useState(0)
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
                                <div className='item-icon'></div>
                                <div className='item-name'>{name}</div>
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

    const operateIcon = <UnorderedListOutline onClick={() => navigate(`/typeSort/${navType}`)} />

    return (
        <div className="add-bill-container">
            <NavBar onBack={() => navigate(-1)}>新增账单</NavBar>
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
            </TypeList>
            <Parameter />
            <Calculator billType={navType} />
        </div>
    )
}
