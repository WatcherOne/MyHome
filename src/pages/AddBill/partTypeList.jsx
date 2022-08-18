import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Swiper } from 'antd-mobile'
import { UnorderedListOutline } from 'antd-mobile-icons'
import { BillAPIContext, BillTypeContext } from './provider'
import TypeList from '@/pages/TypeManage/typeList'
import mockList from '@/mock/list'

export default function PartTypeList () {
    console.log('partTypeList')

    const navigate = useNavigate()
    const { setBillType } = useContext(BillAPIContext)
    const { billType } = useContext(BillTypeContext)

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
    const operateIcon = <UnorderedListOutline onClick={() => navigate(`/typeSort/${billType}`)} />

    return (
        <>
            <TypeList
                rightIcon={operateIcon}
                navType={billType}
                changeNavType={setBillType}>
                <Swiper
                    onIndexChange={(index => setBillType(index))}
                    indicator={() => null}
                    className='type-list-content'
                >{swiperItem}</Swiper>
            </TypeList>
        </>
    )
}
