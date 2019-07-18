import React, {Component} from "react"
export default class extends Component {
    state={details:[
            {id: 1, title: 'Message001', content: '我爱你, 中国'},
            {id: 2, title: 'Message002', content: '我爱你, 老婆'},
            {id: 3, title: 'Message003', content: '我爱你, 孩子'},
            {id: 4, title: 'Message004', content: '我爱你, 0318'},
        ]}
    render() {
        let {details}=this.state;
        let {id}=this.props.match.params;
        let data=details.find((item)=>{
            return item.id===id*1;
        })
        return (
           <ul>
               <li>ID:{data.id}</li>
               <li>TITLE:{data.title}</li>
               <li>CONTENT:{data.content}</li>
           </ul>
        )
    }

}