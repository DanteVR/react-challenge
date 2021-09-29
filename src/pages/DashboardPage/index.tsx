import React from 'react';
import { Col, Row } from 'antd';
import { Sidebar } from '@components';
import { Cards } from './cards';
import { Charts } from './charts';
import { Customers } from './customers';

import './index.less';

interface Props {}

export const DashboardPage: React.FC<Props> = () => {
  return (
    <Sidebar>
      <Cards />
      <Row gutter={[32, 32]} className="ant-mt-4">
        <Col xs={24} md={12} lg={12}>
          <Charts />
        </Col>
        <Col xs={24} md={12} lg={12}>
          <Charts />
        </Col>
      </Row>
      <Row className="ant-mt-4">
        <Col span={24}>
          <Customers />
        </Col>
      </Row>
    </Sidebar>
  );
};
