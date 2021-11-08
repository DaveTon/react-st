import { Component } from 'react'
import store from './store'

class Todolist extends Component{
    constructor(props){
        super(props)
        this.state = store.getState()
    }
    render(){
        return(
            <div>
                <div>
                    <input placeholder={this.state.inputValue} />
                    <button>提交</button>
                </div>
                <ul>
                    <li>Hello</li>
                </ul>
            </div>
        )
    }
}

export default Todolist;