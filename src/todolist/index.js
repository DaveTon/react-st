import React from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actions';

const Todolist = (props) => {
    const { value, list, handelChange, handelClickAdd } = props;
    return (
        <div>
            <input 
                placeholder='请输入'
                value={value}
                onChange={handelChange}
            />
            <button
                onClick={handelClickAdd}
            >提交</button>
            <ul>
                {
                    list.map((item, index)=>{
                        return(
                            <li
                                key={index}
                            >{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const mapState = (state) => ({
    value: state.todo.value,
    list: state.todo.list
})

const mapDispatch = (dispatch) => ({
    handelChange(e){
        const value = e.target.value;
        dispatch(actions.changeInputValue(value))
    },

    handelClickAdd(){
        dispatch(actions.addValueList())
    }
})


export default connect(mapState, mapDispatch)(Todolist);