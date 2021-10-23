import React, { Component } from 'react';
// import Todoitem from './Todoitem';
// import axios from 'axios';
import { Input, Button, List} from 'antd';
import 'antd/dist/antd.css';
import store from './store';
import {changeInputValue, addTodoItem, deleteTodoItem} from './store/actionCreatoes';
// import './resource/css/index.min.css';

class Todolist extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        this.handelInputChange=this.handelInputChange.bind(this);
        this.handelButtonClick=this.handelButtonClick.bind(this);
        this.handelDeleteItem=this.handelDeleteItem.bind(this);
        this.handelStoreChange=this.handelStoreChange.bind(this);
        store.subscribe(this.handelStoreChange)
    }
    handelStoreChange(){
        this.setState(store.getState())
    }

    render(){
        return (
            <div>
                <div style={{marginTop: "20px", marginLeft: "20px"}}>
                    <Input 
                        style={{width: "360px", marginRight: "8px"}}
                        id="insertArea"
                        placeholder="输入内容"
                        value={this.state.inputValue}
                        onChange={this.handelInputChange}
                    />
                    <Button
                        type="primary"
                        placeholder="Basic usage"
                        onClick={this.handelButtonClick}
                    >提 交</Button>
                </div>
                <List
                    style={{width: "360px", marginLeft: "20px", marginTop: "8px"}}
                    size="small"
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => <List.Item onClick={this.handelDeleteItem.bind(this,index)}>{item}</List.Item>}
                />
            </div>
        )
    }
    handelInputChange(e){
        const action = changeInputValue(e.target.valeu)
        store.dispatch(action)
    }
    handelButtonClick(){
        const action = addTodoItem()
        store.dispatch(action);
    }
    handelDeleteItem(index){
        const action = deleteTodoItem(index)
        store.dispatch(action);
    }
    // handelDeleteItem(index){
    //     this.setState((prevState)=>{
    //         const list = [...prevState.list];
    //         list.splice(index, 1);
    //         return {list}
    //     })
    // }
}

export default Todolist;