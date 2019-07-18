import React, {Component} from "react";
import Item from '../item/Item';
import axios from "axios";
export default class List extends Component {
    //第二种方法将状态放到list里面，因为list里面用到的状态最多；
    state={
        isLoading:false,
        isFirst:true,
        users:[],
        err:''
    };
    componentWillReceiveProps({keyWords}) {
        console.log(keyWords);
        this.setState({
            isLoading:true,
            isFirst:false,
            users:[],
            err:''
        });
        const url=`https://api.github.com/search/users?q=${keyWords}`;
        axios.get(url)
            .then((result)=>{
                console.log(result);
                let users=result.data.items;
                this.setState({
                    isLoading:false,
                    isFirst:false,
                    users,
                    err:''
                })
        })
            .catch((err)=>{
                this.setState({
                    isLoading:false,
                    isFirst:false,
                    users:[],
                    err:err.toString()
                })
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

