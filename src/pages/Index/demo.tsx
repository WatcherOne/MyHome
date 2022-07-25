// 所有 React 组件都必须像纯函数一样保护它们的 props 不被更改
// 组件是有状态组件还是无状态组件属于组件实现的细节
// return null 可以隐藏组件,不进行任何渲染,但是不影响组件周期函数
// 组件不能绑定事件, 只能作为 props 传入组件
// 并没有发现需要使用继承来构建组件层次的情况
import React from 'react'

// 函数式组件
function Title (props:any) {
    // React.Fragment === template (vue)
    // 短语法 <>...</>
    return (
        <div className='title'>{props.name}</div>
    )
}

interface indexState {
    title:string
}

// 类组件
class Index extends React.Component<any, indexState> {
    // ref 绑定 this.$divElement.current 获得DOM节点
    // 默认情况下，你不能在函数组件上使用 ref 属性，因为它们没有实例
    $divElement = React.createRef<HTMLDivElement>()

    constructor(props:any) {
        // 将 props 传递到父类的构造函数中, Class 组件应该始终使用 props 参数来调用父类的构造函数
        super(props)
        this.state = {
            title: '首页'
        }
        // 为了在回调中使用 `this`, 这个绑定是必不可少的
        this.changeTitle = this.changeTitle.bind(this)
    }

    // 周期函数位置 + 方法位置
    componentDidMount() {}

    changeTitle = () => {
        console.log(this.state.title)
        this.setState({ title: '测试' })
    }

    render() {
        return (
            <div ref={this.$divElement} onClick={this.changeTitle} className="index-container">
                <Title name={this.state.title}></Title>
            </div>
        )
    }
}

export default Index
