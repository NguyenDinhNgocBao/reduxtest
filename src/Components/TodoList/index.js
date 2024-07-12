import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { todoRemainingSelector } from '../../redux/selectors';
const TodoList = () => {
    const dispatch = useDispatch();

    const [todoName, setTodoName] = useState("");
    const [priority, setPriority] = useState("Medium");

    const todoList = useSelector(todoRemainingSelector)//Lấy list todo ở reducer để hiển thị

    const handelAddButtonClick = () => {
      //dispatch
      dispatch(addTodo({
        id: uuidv4(),
        name: todoName,
        priority:priority,
        completed: false
      }))

      setPriority("Medium")
      setTodoName("")
    }

    
    const handleOnChangeName = (e) => {
      setTodoName(e.target.value)
    }
    const handleOnChangePriority = (value) => {
      setPriority(value)
    }

    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
          <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
            {/*<Todo name='Learn React' prioriry='High' />
            <Todo name='Learn Redux' prioriry='Medium' />
            <Todo name='Learn JavaScript' prioriry='Low' />*/}
            {todoList.map(todo =>  <Todo key={todo.id} name={todo.name} prioriry={todo.priority} />)}
          </Col>
          <Col span={24}>
            <Input.Group style={{ display: 'flex' }} compact>
              <Input value={todoName} onChange={handleOnChangeName}/>
              <Select defaultValue="Medium" value={priority} onChange={handleOnChangePriority}>
                <Select.Option value='High' label='High'>
                  <Tag color='red'>High</Tag>
                </Select.Option>
                <Select.Option value='Medium' label='Medium'>
                  <Tag color='blue'>Medium</Tag>
                </Select.Option>
                <Select.Option value='Low' label='Low'>
                  <Tag color='gray'>Low</Tag>
                </Select.Option>
              </Select>
              <Button type='primary' onClick={handelAddButtonClick}>
                Add
              </Button>
            </Input.Group>
          </Col>
        </Row>
      );
}

export default TodoList;