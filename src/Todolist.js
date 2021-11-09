import React, { Component } from 'react'
import {connect} from 'react-redux';

class Todolist extends Component{
    render(){
        return(
            <div>
                <div>
                    <input value={this.props.inputValue} />
                    <button>提交</button>
                </div>
                <ul>
                    {
                        this.props.list.map((item,index)=>{
                            return <li key={index}>{item}</li>
                        })
                    }
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

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);