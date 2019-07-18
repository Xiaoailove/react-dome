import React, {Component} from "react";
import {Route,Redirect} from "react-router-dom";
import MyLink from "../component/MyLink";
import News from "./News";
import Messages from "./Messages";

export default class Home extends Component {

    render() {
        return  (
            <div>
                <h2>Home组件内容</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyLink  to="/home/news">News</MyLink>
                        </li>
                        <li>
                            <MyLink to="/home/message">Message</MyLink>
                        </li>
                    </ul>
                    <Route path="/home/news" component={News}/>
                    <Route path="/home/message" component={Messages}/>
                    <Redirect to="/home/news"/>
                </div>
            </div>
        )
    }

}