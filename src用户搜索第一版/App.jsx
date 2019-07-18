import React, {Component} from "react";
import Search from "./components/search/Search";
import List from "./components/list/List";
export default class App extends Component {
    //定义状态
    state={
        isLoading:false,
        isFirst:true,
        users:[],
        err:''
    };
    //更新状态的方法
    updateAppSearch=({isLoading,isFirst,users,err})=>{
    this.setState({
        isLoading,
        isFirst,
        users,
        err,
    })
    }
    render() {
        return (
            <div className="container">
            <Search updateAppSearch={this.updateAppSearch}/>;
            <List appState={this.state}/>
            </div>
        )
    }
}

