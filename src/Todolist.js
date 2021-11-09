import React from 'react'
import {connect} from 'react-redux';

const Todolist = (props) => {
    const {inputValue, list, handelInputChange, handelBtnClick, handekDeleteItem} = props
    return(
        <div>
            <div>
                <input 
                    value={inputValue} 
                    onChange={handelInputChange}
                />
                <button onClick={handelBtnClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item,index)=>{
                        return <li onClick={handekDeleteItem} key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
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
        },
        handekDeleteItem(index){
            const action={
                type: "HANDEL_DELETE_ITEM",
                index
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);