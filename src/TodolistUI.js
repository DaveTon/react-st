import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';

const TodolistUI = (props) => {
    return (
        <div>
            <div style={{marginTop: "20px", marginLeft: "20px"}}>
                <Input 
                    style={{width: "360px", marginRight: "8px"}}
                    id="insertArea"
                    placeholder="输入内容"
                    value={props.inputValue}
                    onChange={props.handelInputChange}
                />
                <Button
                    type="primary"
                    placeholder="提 交"
                    onClick={props.handelButtonClick}
                >提 交</Button>
            </div>
            <List
                style={{width: "360px", marginLeft: "20px", marginTop: "8px"}}
                size="small"
                bordered
                dataSource={props.list}
                renderItem={(item, index) => <List.Item onClick={()=>{props.handelDeleteItem(index)}}>{item}</List.Item>}
            />
        </div>
    )
}

export default TodolistUI;