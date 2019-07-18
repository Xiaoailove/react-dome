import React, {Component} from "react";
import Search from "./components/search/Search";
import List from "./components/list/List";
export default class App extends Component {
    state={
        keyWords:''
    }
    //更新状态的方法
    updateKeyWords=(keyWords)=>{
        this.setState({keyWords})
    }
    render() {
        return (
            <div className="container">
            <Search updateKeyWords={this.updateKeyWords}/>
            <List keyWords={this.state.keyWords}/>
            </div>
        )
    }
}

