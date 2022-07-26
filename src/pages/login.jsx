import { useEffect, useState } from "react"

// Hook 可以让你不编写 class 的情况下使用state以及其他的react特性
// Hook 可以让你在函数组件里“钩入” React state 及生命周期等特性的函数
// Hook 不能在 class 组件中使用
// 自定义 Hook
export default function Login() {
    // 添加内部state, 这个初始 state 参数只有在第一次渲染时会被用到
    // 可以传参初始化, 惰性初始 state
    const [title, changeTitle] = useState('登录')

    // 给函数组件增加了操作副作用的能力
    // 它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途
    // 只不过被合并成了一个 API
    // React 在完成对 DOM 的更改后运行你的“副作用”函数
    // React 会在组件卸载的时候执行清除操作 执行 return () => {}
    // useEffect 第二个参数, 它是 effect 所依赖的值数组
    useEffect(() => {
        console.log('componentDidMount')
    }, [title])

    return (
        <div onClick={() => changeTitle('切换了')} className="index-container">{title}</div>
    )
}
