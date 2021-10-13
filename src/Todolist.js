import React, { Component } from 'react';
import './resource/css/index.css';

class Todolist extends Component{
    render(){
        return (
            <div>
                <div>
                    <input />
                    <button>提交</button>
                </div>
                <ul>
                    <li>1</li>
                </ul>
            </div>
        )
    }
}

export default Todolist;