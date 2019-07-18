import React, {Component} from "react"
export default class About extends Component {
    componentWillUnmount() {
        console.log('我是About组件将要被卸载了');
    }

    render() {
        return <h2>我是About的内容</h2>
    }

}