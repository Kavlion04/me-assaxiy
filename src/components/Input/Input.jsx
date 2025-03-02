import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Select, Space } from 'antd';
import { t } from "i18next";

const App2 = ({ value, onChange, width }) => (
  <Space direction="vertical" size="middle">
    <Space.Compact style={{ width }}>
      <Input value={value} onChange={onChange} placeholder={t("Поиск...")} />
      <Button type="primary">{t("Искать")}</Button>
    </Space.Compact>
  </Space>
);

export default App2;