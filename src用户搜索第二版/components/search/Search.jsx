import React, {Component} from "react"

export default class Search extends Component {
    searchRef = React.createRef();
    searchData = () => {
        let {updateKeyWords} = this.props;
        //获取用户输入需要搜索的值；
        let keyWords = this.searchRef.current.value.trim();
        //获取到用户输入以后将keyWords传给父级App因为这个keywords在List里面要用，所以要借住父级这个中间人
        updateKeyWords(keyWords);
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