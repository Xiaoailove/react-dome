import React, {Component} from "react"

export default class HomeMessageDetails extends Component {
    state={MessageDetails:[
            {id: 1, title: 'Message001', content: '我爱你, 中国'},
            {id: 2, title: 'Message002', content: '我爱你, 老婆'},
            {id: 3, title: 'Message003', content: '我爱你, 孩子'},
            {id: 4, title: 'Message004', content: '我爱你, 0318'},
        ]};

    render() {
        //console.log(this.props);
        let {id}=this.props.match.params;
        let {MessageDetails}=this.state;
     let  data= MessageDetails.find((item)=>{
            return item.id===id*1
        })
        return(
            <ul>
                <li>ID:{data.id}</li>
                <li>TITLE:{data.title}</li>
                <li>CONTENT:{data.content}</li>
            </ul>
        )
    }

}