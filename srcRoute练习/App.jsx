import React, {Component} from "react";
import {Route,Redirect} from "react-router-dom"
import MyLink from "./component/MyLink";
import About from "./pages/About";
import Home from "./pages/Home";
export default class App extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <MyLink to="/about">About</MyLink>
                            <MyLink to="/home">Home</MyLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Route path="/about" component={About}/>
                                <Route path="/home" component={Home}/>
                                <Redirect to="/home/news"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}