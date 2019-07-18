import React, {Component} from "react"
import Item from '../item/Item'
export default class List extends Component {

    render() {
        let {isLoading,isFirst,users,err}=this.props.appState;
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

