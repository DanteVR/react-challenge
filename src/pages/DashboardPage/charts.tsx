/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Card } from 'antd';
import { Column } from '@ant-design/charts';
import { config } from './extra/charts';

export const Charts: React.FC = () => {
  return (
    <Card title="Lorem Ipsum">
      <Column {...config} />
    </Card>
  );
};
