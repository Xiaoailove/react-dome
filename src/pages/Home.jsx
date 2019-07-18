import React, {Component} from "react"
import {Route,Redirect} from "react-router-dom";//NavLink
import HomeNews from './HomeNews';
import HomeMessage from './HomeMessage';
import MyLink from '../component/MyLink'
export default class Home extends Component {
    componentWillUnmount() {
        console.log('我是Home组件将要被卸载了');
    }
    render() {
        return  (
            <div>
                <h2>我是Home组件内容</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyLink  to="/home/news">News</MyLink>
                        </li>
                        <li>
                            <MyLink to="/home/message">Message</MyLink>
                        </li>
                    </ul>
                    <Route path='/home/news' component={HomeNews}/>
                    <Route path='/home/message' component={HomeMessage}/>
                    <Redirect to='/home/news'/>
                </div>
            </div>
        )
    }
}