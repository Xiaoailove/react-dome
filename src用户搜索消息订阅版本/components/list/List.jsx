import React, {Component} from "react";
import Item from '../item/Item';
import PubSub from 'pubsub-js';
//import axios from "axios";
export default class List extends Component {
    //第二种方法将状态放到list里面，因为list里面用到的状态最多；
    state={
        isLoading:false,
        isFirst:true,
        users:[],
        err:''
    };
    componentDidMount() {
        PubSub.subscribe('updateAppState',(msg,{isLoading,isFirst,users,err})=>{
            this.setState({isLoading,isFirst,users,err})
        })
    }
    render() {
        let {isLoading,isFirst,users,err}=this.state;
        if (isFirst) {
           return <h2>请输入您要搜索的内容，随后点击搜索</h2>
        }else if (isLoading) {
            return <h2>Loading......</h2>
        }else if (err) {
            return <h2>{err}</h2>
        } else if((JSON.stringify(users)==='[]')){
           return <h2>网络不稳定</h2>
        }else {
            return (
                <div className="row">
                    {
                        users.map((item)=>{
                            return <Item key={item.login} {...item}/>
                        })
                    }
                </div>
            )
        }
    }

}

