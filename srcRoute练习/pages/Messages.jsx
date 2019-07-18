import React, {Component} from "react";
import {Link,Route} from "react-router-dom";
import Detail from "./Detail";
export default class Messages extends Component {
    state={messages:[]};
    componentDidMount() {
        this.timeId=setTimeout(()=>{
            this.setState({messages:[
                    {mid:1,content:'message1'},
                    {mid:2,content:'message2'},
                    {mid:3,content:'message3'},
                    {mid:4,content:'message4'},
                ]})
        },2000)
    }
    componentWillUnmount() {
        clearTimeout(this.timeId);
    }
    pushShow=(path)=>{
        this.props.history.push(path)
    }
    replaceShow=(path)=>{
        this.props.history.replace(path)
    }
    render() {
        let {messages}=this.state;
        return (
            <div>
                <ul>
                    {
                        messages.map((item)=>{
                            return <li key={item.mid}>
                                <Link to={`/home/message/detail/${item.mid}`}>{item.content}</Link>&nbsp;&nbsp;
                                <button onClick={()=>{return this.pushShow(`/home/message/detail/${item.mid}`)}}>push查看</button>&nbsp;&nbsp;
                                <button onClick={()=>{return this.replaceShow(`/home/message/detail/${item.mid}`)}}>replace查看</button>
                            </li>
                        })
                    }
                </ul>
                <button>回退</button>
                <hr/>
                <Route path="/home/message/detail/:id" component={Detail}/>
            </div>
        )
    }

}