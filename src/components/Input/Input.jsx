import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Select, Space } from 'antd';

const App2 = ({ value, onChange, width }) => (
  <Space direction="vertical" size="middle">
    <Space.Compact style={{ width }}>
      <Input value={value} onChange={onChange} placeholder='Поиск' />
      <Button type="primary">Искать</Button>
    </Space.Compact>
  </Space>
);

export default App2;