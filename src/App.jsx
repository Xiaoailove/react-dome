import React, {Component} from "react";
import {Route,Redirect,Switch} from "react-router-dom";//NavLink
import About from "./pages/About";
import Home from "./pages/Home";
import MyLink from "./component/MyLink"
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
                            <MyLink  to='/about' >About</MyLink>
                            <MyLink to='/home'>Home</MyLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                               <Switch>
                                   <Route path='/about' component={About} />
                                   <Route path='/home' component={Home} />
                                   <Redirect to='/about'/>
                               </Switch>
                            {/* switch的作用是为了避免注册路由的时候路径写错，浏览器还会继续往下找，
                            造成效率低下*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

