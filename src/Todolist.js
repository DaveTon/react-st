import React, { Component } from 'react';
import './resource/css/index.css';

class Todolist extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }

    render(){
        return (
            <div>
                <div>
                    <input 
                        value={this.state.inputValue}
                        onChange={this.handelInputChange.bind(this)}
                    />
                    <button
                        onClick={this.handelButtonClick.bind(this)}
                    >提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <li
                                    key={item}
                                    onClick={this.handelDeleteItem.bind(this,index)}
                                >{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    handelInputChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }
    handelButtonClick(){
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    handelDeleteItem(index){
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }

}

export default Todolist;