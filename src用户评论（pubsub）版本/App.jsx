import React, {Component} from 'react';
import Add from './components/add/Add';
import List from './components/list/List';
import PubSub from 'pubsub-js'
export default class App extends Component {
    state={
        comments:[]
    };
    //状态在哪儿更新状态的方法就要写在哪儿;如果两个组件共同用到了状态，那么状态就要写在爹里面；
    updateState=(data) => {
      let comments=[...this.state.comments];
      comments.unshift(data);
      //更新状态；
        this.setState({comments});
    };
    componentDidMount() {
       PubSub.subscribe('delete',(msg,data)=>{
           let comments=[...this.state.comments];
           comments.forEach((item,index)=>{
               if (item.userId===data) {
                   comments.splice(index,1)
               }
           })
           this.setState({comments})
       })
    }

    // deleteComments=(userId) => {
    //  let comments=[...this.state.comments];
    //  comments.forEach((item,index)=>{
    //      if (item.userId===userId) {
    //          comments.splice(index,1)
    //      }
    //  })
    //     this.setState({comments})
    // }
    render() {
        let {comments}=this.state;
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                <Add updateState={this.updateState}/>
                <List comments={comments} deleteComments={this.deleteComments}/>
                </div>
            </div>
        )
    }

}