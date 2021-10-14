import React, { Component } from 'react';

class Todoitem extends Component{
    constructor(props){
        super(props)
        this.deleteItem=this.deleteItem.bind(this);
    }
    render(){
        return(
            <li
                onClick={this.deleteItem}
            >{this.props.item}</li>
        )
    }
    deleteItem(){
        const { handelDeleteItem, index } = this.props;
        handelDeleteItem(index)
    }
}

export default Todoitem;