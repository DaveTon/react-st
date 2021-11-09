import React, { Component } from 'react'
import {connect} from 'react-redux';

class Todolist extends Component{
    render(){
        return(
            <div>
                <div>
                    <input 
                        value={this.props.inputValue} 
                        onChange={this.props.handelInputChange}
                    />
                    <button onClick={this.props.handelBtnClick}>提交</button>
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
    return {
        handelInputChange(e){
            const action={
                type: "CHANGE_INPUT_VALUE",
                value: e.target.value
            }
            dispatch(action)
        },
        handelBtnClick(){
            const action={
                type:"ADD_INPUT_VALUE"
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);