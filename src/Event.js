/*
React事件绑定：
1. 语法与DOM原生事件类似
2. on+事件名={事件处理函数}
3. 小驼峰命名法：onMouseEnter, onClick, onFocus...
*/

import React from "react";

class EventBinding extends React.Component {
    HandleClick = () => {
        prompt("class button clicked")
    }

    render() {
        return (
            <button onClick={this.HandleClick}>I'm a button by class</button>
        )
    }
}
/*
用函数的方式返回组件也是一样，可以对组件绑定事件
还可通过事件对象（e）来控制事件触发时的行为，事件处理函数的参数就是一个事件对象
React的事件对象也被称作合成事件对象，在各个浏览器中的表现均相同
 */
function FunctionButton() {
    function HandleClick(e) {
        e.preventDefault();
        prompt("function link clicked")
    }

    return(
        <a href={"baidu.com"} onClick={HandleClick}>I'm a link created by a function</a>
    )
}

export default EventBinding
export {FunctionButton}