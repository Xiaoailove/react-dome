import React, {Component} from 'react';
//import ReactDom from 'react-dom';
import './Item.css';
export default class Item extends Component {
    delete=() => {
        //获取需要删除的ID
        let {userName,userId,deleteComments}=this.props;
        if (window.confirm(`确定要删除用户${userName}的评论内容吗`)) {
            deleteComments(userId)
        }
    }
    render() {
        let {userName,userContent}=this.props
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="#1" onClick={this.delete}>删除</a>
                </div>
                <p className="user"><span>{userName}</span><span>说:</span></p>
                <p className="centence">{userContent}</p>
            </li>
        )
    }

}