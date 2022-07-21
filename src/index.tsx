import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/common.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'

// 老版本方式
// 1. 去掉 hydrate 注水API, 改成配置项(SSR的HTML结构) [新版本 ReactDOM.render 则直接不再具有复用 SSR 内容的功能?]
// 2. 没必要把 container 传给 render
// import ReactDOM from 'react-dom'
// ReactDOM.render(
//     <App />,
//     document.getElementById('root') as HTMLElement
// )

const container = document.getElementById('root') as HTMLElement

const root = ReactDOM.createRoot(container, {})

// 大多数应用中, 只会调用一次render
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

reportWebVitals()
