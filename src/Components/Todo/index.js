import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';


const priorityColorMapping = {
    High: 'red',
    Medium: 'blue',
    Low: 'gray',
  };

const Todo =(props) => {
    const [checked, setChecked] = useState(false);

    const toggleCheckbox = () => {
        setChecked(!checked);
    };


  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {props.name}
      </Checkbox>
      <Tag color={priorityColorMapping[props.prioriry]} style={{ margin: 0 }}>
        {props.prioriry}
      </Tag>
    </Row>
  );
}

export default Todo;