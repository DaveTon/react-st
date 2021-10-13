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
                    <button>提交</button>
                </div>
                <ul>
                    <li>1</li>
                </ul>
            </div>
        )
    }
    handelInputChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }

}

export default Todolist;