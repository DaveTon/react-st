import React, { Component } from 'react'
import connect from 'react-redux';

class Todolist extends Component{
    render(){
        return(
            <div>
                <div>
                    <input placeholder={this.props.inputValue} />
                    <button>提交</button>
                </div>
                <ul>
                    <li>Hello</li>
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = () => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);