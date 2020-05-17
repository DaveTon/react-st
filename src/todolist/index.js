import React from 'react';
import { connect } from 'react-redux';

const Todolist = (props) => {
    return (
        <div>Hello</div>
    )
}

const mapState = (state) => ({
    value: state.todo.value,
    list: state.todo.list
})

const mapDispatch = (dispatch) => ({

})


export default connect(mapState, mapDispatch)(Todolist);