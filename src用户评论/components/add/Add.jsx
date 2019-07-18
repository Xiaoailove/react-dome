import React, {Component} from 'react';
import uuid from 'uuid';
export default class Add extends Component {
    myRef=React.createRef();
    add=() => {
        let {updateState}=this.props;
        //1.获取用户输入的用户名以及评论内容；
        let userName=this.users.value.trim();
        let userContent=this.myRef.current.value.trim();
        //校验用户输入是否合法
        if (userName===''||userContent==='') {
            alert('用户名或评论内容不能为空，请您重新填写');
            return
        }
        //因为数组中最后需要添加的是一个一个的对象，因此这边我们传参也需要是一个对象的形式；
        let obj={userId:uuid(),userName:userName,userContent:userContent}
        //调用更新数组的方法将需要更新的数据传到更新数组的方法中午
        updateState(obj);
        //点击添加完成之后清空当前的输入框
        this.users.value='';
        this.myRef.current.value='';
    }
    render() {
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名" ref={(input) => {this.users=input}}/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容" ref={this.myRef}></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.add}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}