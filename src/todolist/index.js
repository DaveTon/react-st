import React from 'react';
import { connect } from 'react-redux';

const Todolist = (props) => {
    const { value } = props;
    return (
        <div>
            <input 
                placeholder='请输入'
                value={value}
            />
            <button>提交</button>
            <ul>
                <li>item</li>
            </ul>
        </div>
    )
}

const mapState = (state) => ({
    value: state.todo.value,
    list: state.todo.list
})

const mapDispatch = (dispatch) => ({

})


export default connect(mapState, mapDispatch)(Todolist);