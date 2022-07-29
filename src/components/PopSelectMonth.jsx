import moment from 'moment'
import { Popup, Grid } from 'antd-mobile'
import { useEffect, useMemo, useRef, useState } from 'react'
import PopHeader from './PopHeader'
import './PopSelectMonth.scss'

export default function PopSelectMonth(props) {
    const { visible, setVisible, selectedDate = moment.format('YYYY年M月'), setDate } = props

    const selectedYear = useMemo(() => {
        return selectedDate.split('年')[0]
    }, [selectedDate])
    const selectedMonth = useMemo(() => {
        const monthStr = selectedDate.split('年')[1]
        return monthStr.substr(0, monthStr.length - 1)
    }, [selectedDate])

    const wrapper = useRef(null)

    useEffect(() => {
        if (visible) {
            if (wrapper.current) {
                setTimeout(() => wrapper.current.scrollTop = 0)
            }
        }
    }, [visible])

    const closePop = () => {
        setVisible(false)
    }

    const initMonthList = () => {
        let i = 36
        let result = []
        while (i--) {
            const before = moment().subtract(i, 'months')
            result.push(before.format('YYYY-M'))
        }
        return result
    }
    const handleMonthToObj = (list) => {
        let result = {}
        list.forEach(date => {
            const dateArr = date.split('-')
            const year = dateArr[0]
            const month = dateArr[1]
            if (result[year]) {
                result[year].push(month)
            } else {
                result[year] = [month]
            }
        })
        return result
    }
    const [monthYearMonth] = useState(() => {
        return handleMonthToObj(initMonthList())
    })

    const getActiveMonth = (year, month) => {
        return year === selectedYear && month === selectedMonth
    }

    const changeDate = (year, month) => {
        setDate(`${year}年${month}月`)
        closePop()
    }

    const renderMonthList = (monthList, year) => {
        return (
            <Grid columns={4} gap={8}>
                {
                    monthList.map((month, index) => {
                        return (
                            <Grid.Item key={index}>
                                <div
                                    className={getActiveMonth(year, month) ? 'month-item active' : 'month-item'}
                                    onClick={() => changeDate(year, month)}
                                >{month}月</div>
                            </Grid.Item>
                        )
                    })
                }
            </Grid>
        )
    }

    const renderYearList = () => {
        return Object.keys(monthYearMonth).reverse().map(year => {
            const monthList = monthYearMonth[year] || []
            return (
                <div className='date-item' key={year}>
                    <div className='year-item'>{year}年</div>
                    { renderMonthList(monthList, year) }
                </div>
            )
        })
    }

    return (
        <Popup
            visible={visible}
            onMaskClick={() => setVisible(false)}
            bodyStyle={{
                height: '60vh',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px'
            }}
        >
            <div className='pop-month-container'>
                <PopHeader title="请选择月份" closePop={closePop}></PopHeader>
                <div ref={wrapper} className='date-content'>
                    { renderYearList() }
                </div>
            </div>
        </Popup>
    )
}
