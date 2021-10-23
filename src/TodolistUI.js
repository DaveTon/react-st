import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';

// const data = [
//     'Racing car sprays burning fuel into crowd.',
//     'Japanese princess to wed commoner.',
//     'Australian walks 100km after outback crash.',
//     'Man charged over missing wedding girl.',
//     'Los Angeles battles huge wildfires.',
//   ];

class TodolistUI extends Component{
    render(){
        const {inputValue, list, handelInputChange, handelButtonClick, handelDeleteItem} = this.props;
        return (
            <div>
                <div style={{marginTop: "20px", marginLeft: "20px"}}>
                    <Input 
                        style={{width: "360px", marginRight: "8px"}}
                        id="insertArea"
                        placeholder="输入内容"
                        value={inputValue}
                        onChange={handelInputChange}
                    />
                    <Button
                        type="primary"
                        placeholder="提 交"
                        onClick={handelButtonClick}
                    >提 交</Button>
                </div>
                <List
                    style={{width: "360px", marginLeft: "20px", marginTop: "8px"}}
                    size="small"
                    bordered
                    dataSource={list}
                    renderItem={(item, index) => <List.Item onClick={()=>{handelDeleteItem(index)}}>{item}</List.Item>}
                />
            </div>
        )
    }
}

export default TodolistUI;