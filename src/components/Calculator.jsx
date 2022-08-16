import './Calculator.scss'

const renderSeq = (serialArr) => {
    return serialArr.map(seq => (
        <div className="each-box" key={seq}>
            <div className="each-code">{seq}</div>
        </div>
    ))
}

export default function Calculator (props) {
    const { billType } = props

    return (
        <div className="calution-container">
            { renderSeq([1,2,3]) }
            <div className="each-box">
                <div className="each-code">+</div>
            </div>
            { renderSeq([4,5,6]) }
            <div className="each-box">
                <div className="each-code">-</div>
            </div>
            <div className="each-group-3">
                { renderSeq([7,8,9]) }
                <div className="each-box">
                    <div className="each-code">.</div>
                </div>
                <div className="each-box">
                    <div className="each-code">0</div>
                </div>
                <div className="each-box">
                    <div className="each-code">
                        回退
                        {/* <i class="iconfont icontuihui"></i> */}
                    </div>
                </div>
            </div>
            <div className="each-group each-box">
                <div className={`each-code ${billType ? 'income-bg' : 'expend-bg'}`}>完成</div>
            </div>
        </div>
    )
}
