import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { searchTodo } from '../../redux/actions';

const { Search } = Input;

const Filters = () => {
  const dispatch = useDispatch();

  //search
    const [search, setSearch] = useState("")
    const handleOnChangeSearch = (e) => {
      setSearch(e.target.value)
      dispatch(searchTodo(e.target.value)) //Truyền giá trị của input vào action để dispatch đưa đến reducer xử lý
    } 



    return (
        <Row justify='center'>
          <Col span={24}>
            <Typography.Paragraph
              style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
            >
              Search
            </Typography.Paragraph>
            <Search placeholder='input search text' value={search} onChange={handleOnChangeSearch}/>
          </Col>
          <Col sm={24}>
            <Typography.Paragraph
              style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
            >
              Filter By Status
            </Typography.Paragraph>
            <Radio.Group>
              <Radio value='All'>All</Radio>
              <Radio value='Completed'>Completed</Radio>
              <Radio value='Todo'>To do</Radio>
            </Radio.Group>
          </Col>
          <Col sm={24}>
            <Typography.Paragraph
              style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
            >
              Filter By Priority
            </Typography.Paragraph>
            <Select
              mode='multiple'
              allowClear
              placeholder='Please select'
              style={{ width: '100%' }}
            >
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
          </Col>
        </Row>
      );
}

export default Filters;