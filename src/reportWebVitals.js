/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2022-07-20 15:14:17
 * Description: 量和跟踪站点上的实际用户性能
*************************************************************/

const reportWebVitals = onPerfEntry => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            getCLS(onPerfEntry)
            getFID(onPerfEntry)
            getFCP(onPerfEntry)
            getLCP(onPerfEntry)
            getTTFB(onPerfEntry)
        })
    }
}

export default reportWebVitals
