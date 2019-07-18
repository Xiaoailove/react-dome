import React, {Component} from "react";
import {NavLink} from "react-router-dom"

export default class MyLink extends Component {

    render() {
        let item=this.props
        return <NavLink className="list-group-item " activeClassName="demo" {...item}></NavLink>
    }

}