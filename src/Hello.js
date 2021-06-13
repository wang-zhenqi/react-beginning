/*
将component按照组件放在不同的js文件中：
1. 创建js文件
2. import react
3. 定义组件
4. export该组件
5. 其他页面import该组件
6. 渲染
*/

import React from "react";
class Hello extends React.Component {
    render() {
        return (
            <div>这是我的第一个抽离到js文件中的组件</div>
        )
    }
}

export default Hello;