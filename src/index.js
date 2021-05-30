/* Web应用使用React需要导入两个包：
 * 1. React：基础包
 * 2. ReactDOM：用于在web中渲染React组件的包，如果是手机应用，则可用ReactNative包
 */
import React from 'react'
import ReactDOM from 'react-dom'

/*
 * 导入css文件，设置样式
 */
import './index.css'

/*
 * JSX中使用JS的方式：
 * 定义变量
 */
let timestamp = Date.now()

/*
 * 条件渲染
 * 除了if-else之外还可以用三元表达式（'?:'）、逻辑与运算符来进行条件判断
 */
const greeting = () => {
    if (timestamp % 2 === 0) {
        return 'Jankee'
    } else {
        return 'Vivi'
    }
}

/*
 * 创建数组
 */
const songs = [
    {id: 1, name: 'numb'},
    {id: 2, name: 'from the inside'},
    {id: 3, name: 'the messenger'}
]

/*
 * React用JSX的方式定义组件
 * JSX = JavaScript XML，类似HTML的描述性语言，便于生成组件
 * 注意：
 * 1. JSX的属性名采用小驼峰式，如className
 * 2. JSX的属性名与HTML中的属性并不完全对应，要注意特例，如class(HTML) -> className(JSX)
 * 3. JSX中不含子元素的标签可以直接用'/>'结尾，而不需要写开始标签和结束标签，如：<span></span> -> <span/>
 * 4. JSX组件最好用小括号()包裹，避免JavaScript的语法错误
 */
const title = (
    <div>
        <h1 className={'title'}>
            Hello&nbsp;

            {/* JSX中行内样式处理：添加style属性
              * 属性值是JavaScript表达式，因此要用一对{}括起来；
              * 而该表达式是一个对象，对象也是用{}括起来的
              * 这种方式将结构与样式混合在了一起，不推荐使用*/}

            <em style={{color: 'skyblue'}}>
                {/*
                  * JSX中使用JavaScript表达式，只需用{}包裹即可
                  */}
                {greeting()}
            </em>
            <span/>!
        </h1>
        <p>My favorite songs are:</p>
        {/**/}
        <ul>
            {/*
              * 渲染列表数据
              * 使用数组的map方法
              * 渲染列表时要添加key属性，key属性的值要保证唯一
              * 原则：map()遍历谁，就给谁加key属性。因为key属性就是为了区分列表中各个项的
              * 尽量避免使用索引号作为key
              */}

            {songs.map(
                //另一种渲染样式的方式是使用类名，就像HTML文件中的一样，给组件指定一个className，然后在css文件中描述它的样式
                item => <li key={item.id} className={'favSongList'}>
                    {item.name}
                </li>
            )}
        </ul>
    </div>
)

/*
 * 通过函数的方式添加组件：
 * 1. 函数首字母要大写
 * 2. 函数一定要有返回值，返回一个JSX结构，如果返回值为null则不渲染
 */

/*function Hello() {
    return (
        <div>这是我的第一个组件！</div>
    )
}*/
const Hello = () => <div>这是用箭头函数生成的组件</div>



ReactDOM.render(title, document.getElementById('root'))
//在渲染函数声明的组件时，只需将元素写成函数名标签
ReactDOM.render(<Hello />, document.getElementById('d1'))