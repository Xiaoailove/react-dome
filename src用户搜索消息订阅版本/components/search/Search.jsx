import React, {Component} from "react";
import axios from "axios";
import PubSub from 'pubsub-js';
export default class Search extends Component {
    searchRef = React.createRef();
    searchData = () => {
        //let {updateKeyWords} = this.props;
        //获取用户输入需要搜索的值；
        let keyWords = this.searchRef.current.value.trim();
        //获取到用户输入以后将keyWords传给父级App因为这个keywords在List里面要用，所以要借住父级这个中间人
        //updateKeyWords(keyWords);
        //拿到状态之后先将状态更新为loading出现的页面,因此需要发送更新状态的消息，让那边订阅消息的人收到
        PubSub.publish('updateAppState',{isLoading:true, isFirst:false, users:[], err:''});
        const url=`https://api.github.com/search/users?q=${keyWords}`;
        axios.get(url)
            .then((result)=>{
                console.log(result);
                let users=result.data.items;
                if ((JSON.stringify(users)==='[]')) {
                    PubSub.publish('updateAppState',{isLoading:false, isFirst:false, users:[], err:''});
                }else {
                    PubSub.publish('updateAppState',{isLoading:false, isFirst:false, users:users, err:''});
                }

            })
            .catch((err)=>{
                PubSub.publish('updateAppState',{isLoading:false, isFirst:false, users:[], err:err.toString()});
            })

    }
    render()
    {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" ref={this.searchRef}/>
                    <button onClick={this.searchData}>Search</button>
                </div>
            </section>
        )
    }
}