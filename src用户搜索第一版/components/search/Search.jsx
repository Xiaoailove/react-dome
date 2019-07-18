import React, {Component} from "react"
import axios from "axios";
export default class Search extends Component {
    searchRef=React.createRef();
    searchData=()=>{
        //获取用户输入需要搜索的值；
        let keyWords=this.searchRef.current.value.trim();
        //获取到用户输入以后更新状态让loading显示直接发送请求
        let {updateAppSearch}=this.props;
        updateAppSearch({
            isLoading:true,
            isFirst:false,
            users:[],
            err:''
        })
        const url=`https://api.github.com/search/users?q=${keyWords}`;
        axios.get(url)
            .then((result)=>{
                let users=result.data.items;
                updateAppSearch({
                    isLoading:false,
                    isFirst:false,
                    users,
                    err:''
                })
            })
            .catch((err)=>{
                updateAppSearch({
                    isLoading:false,
                    isFirst:false,
                    users:[],
                    err:err.toString()
                })
            })
    }
    render() {
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