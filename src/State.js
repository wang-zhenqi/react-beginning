/*
函数组件又称为无状态组件，只负责数据的展示，静态
类组件又称为有状态组件，负责更新UI，让页面动起来
状态即应用中的数据，组件内部私有的，只能在组件内使用
state的值是对象，表示一个组件中的多个数据
 */
import React from "react";

class StateShow extends React.Component {
    /*
    以下是标准写法，在构造函数中先调用super，再给state赋值
     */
    /*constructor(props) {
        super(props);
        //初始化state
        this.state = {
            count: 0
        }
    }*/

    //还有简化写法，直接定义state
    state = {
        count: 0
    }

    Add = () => {
        /*
        不要直接修改state中的值，这是错误的，要通过setState来修改！
         */
        //this.state.count++;

        /*
        setState()的作用是：
            1. 更新state
            2. 更新UI
        这是通过数据驱动视图的思想
        setState()的参数是js对象，因此要用{}括起来
        只列出需要更新的state项即可
         */
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                {/*获取状态时，只需this.state.para即可*/}
                <h3>Counter: {this.state.count}</h3>
                <button onClick={this.Add}>+1</button>
            </div>
        )
    }
}

export default StateShow