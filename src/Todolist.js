import React, { Component } from 'react';
// import Todoitem from './Todoitem';
// import axios from 'axios';
import { Input, Button, List} from 'antd';
import 'antd/dist/antd.css';
// import './resource/css/index.min.css';

class Todolist extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.handelInputChange=this.handelInputChange.bind(this);
        this.handelButtonClick=this.handelButtonClick.bind(this);
        this.handelDeleteItem=this.handelDeleteItem.bind(this);
    }

    render(){
        const data = [
            'Racing car sprays burning fuel into crowd.',
            'Japanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.',
        ];
        return (
            <div>
                <div style={{marginTop: "20px", marginLeft: "20px"}}>
                    {/* <label className="label" htmlFor="insertArea">请输入: </label> */}
                    <Input 
                        style={{width: "360px", marginRight: "8px"}}
                        id="insertArea"
                        className="input"
                        placeholder="输入内容"
                        value={this.state.inputValue}
                        onChange={this.handelInputChange}
                    />
                    <Button
                        type="primary"
                        placeholder="Basic usage"
                        className="button"
                        onClick={this.handelButtonClick}
                    >提 交</Button>
                </div>
                <List
                    style={{width: "360px", marginLeft: "20px", marginTop: "8px"}}
                    size="small"
                    bordered
                    dataSource={data}
                    renderItem={item => <List.Item>{item}</List.Item>}
                />
                {/* <ul className="list">{this.getTodoItem()}</ul> */}
            </div>
        )
    }
    //借助axios在componentDidMount中发布ajax请求
    // componentDidMount(){
    //     axios.get('/api/todolist')
    //     .then((res)=>{
    //         console.log(res.data)
    //     })
    //     .catch(()=>{alert('error')})
    // }
    // getTodoItem(){
    //     return this.state.list.map((item,index)=>{
    //         return(
    //             <Todoitem 
    //                 item={item}
    //                 index={index}
    //                 key={item}
    //                 handelDeleteItem={this.handelDeleteItem}
    //             />
    //         )
    //     })
    // }
    handelInputChange(e){
        const value = e.target.value;
        this.setState(()=>({
            inputValue: value
        }))
    }
    handelButtonClick(){
        if(this.state.inputValue !== ''){
            this.setState((prevState)=>{
                return{
                    list: [...prevState.list, prevState.inputValue],
                    inputValue: ''
                }
            })
        }else{
            alert('请输入内容')
        }
    }
    handelDeleteItem(index){
        this.setState((prevState)=>{
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list}
        })
    }
}

export default Todolist;