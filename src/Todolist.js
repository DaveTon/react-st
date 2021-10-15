import React, { Component } from 'react';
import Todoitem from './Todoitem';
import './resource/css/index.min.css';

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
        return (
            <div>
                <div>
                    <label className="label" htmlFor="insertArea">请输入: </label>
                    <input 
                        id="insertArea"
                        className="input"
                        placeholder="输入内容"
                        value={this.state.inputValue}
                        onChange={this.handelInputChange}
                    />
                    <button
                        className="button"
                        onClick={this.handelButtonClick}
                    >提 交</button>
                </div>
                <ul className="list">{this.getTodoItem()}</ul>
            </div>
        )
    }
    getTodoItem(){
        return this.state.list.map((item,index)=>{
            return(
                <Todoitem 
                    item={item}
                    index={index}
                    key={item}
                    handelDeleteItem={this.handelDeleteItem}
                />
            )
        })
    }
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