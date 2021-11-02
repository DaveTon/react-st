import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store';
import TodolistUI from './TodolistUI';
import {getTodoListInit, changeInputValue, addTodoItem, deleteTodoItem} from './store/actionCreatoes';

class Todolist extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        this.handelInputChange=this.handelInputChange.bind(this);
        this.handelButtonClick=this.handelButtonClick.bind(this);
        this.handelDeleteItem=this.handelDeleteItem.bind(this);
        this.handelStoreChange=this.handelStoreChange.bind(this);
    }
    componentDidMount(){
        store.subscribe(this.handelStoreChange);
        const action = getTodoListInit();
        store.dispatch(action);
    }
    handelStoreChange(){
        this.setState(store.getState())
    }
    render(){
        const {inputValue, list} = this.state;
        return (
            <TodolistUI 
                inputValue={inputValue}
                list={list}
                handelInputChange={this.handelInputChange}
                handelButtonClick={this.handelButtonClick}
                handelDeleteItem={this.handelDeleteItem}
            />
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
}

export default Todolist;