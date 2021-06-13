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

function FunctionButton() {
    function HandleClick() {
        prompt("function button clicked")
    }

    return(
        <button onClick={HandleClick}>I'm a button by function</button>
    )
}

export default EventBinding
export {FunctionButton}