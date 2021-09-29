import React, { useEffect } from 'react';
import { Col, Row, Card, Typography } from 'antd';
import Clock from '@assets/images/icons/clock.svg';
import Bell from '@assets/images/icons/bell.svg';
import Calendar from '@assets/images/icons/calendar.svg';
import Smile from '@assets/images/icons/smile.svg';
import { useAppDispatch, useCustomerSelectorHook } from '@hooks';
import { getAverageAges as getAverage } from '@redux/actions/customer';

const { Title, Text } = Typography;

export const Cards: React.FC = () => {
  const dispatch = useAppDispatch();
  const { getAverageAges }: any = useCustomerSelectorHook();
  const { response } = getAverageAges;

  useEffect(() => {
    dispatch(getAverage());
  }, [dispatch]);

  return (
    <Row gutter={[32, 32]}>
      <Col xs={24} md={12} lg={6}>
        <Card className="card-dashboard">
          <Row align="middle">
            <div className="rounded bg-primary">
              <img src={Clock} alt="Clock" />
            </div>
            <div className="ant-ml-2">
              <Title level={3}>{response?.data?.average || 0}</Title>
              <Text>Average age of customers</Text>
            </div>
          </Row>
        </Card>
      </Col>
      <Col xs={24} md={12} lg={6}>
        <Card className="card-dashboard">
          <Row align="middle">
            <div className="rounded bg-secondary">
              <img src={Bell} alt="Bell" />
            </div>
            <div className="ant-ml-2">
              <Title level={3}>06</Title>
              <Text>Lorem Ipsum</Text>
            </div>
          </Row>
        </Card>
      </Col>
      <Col xs={24} md={12} lg={6}>
        <Card className="card-dashboard">
          <Row align="middle">
            <div className="rounded bg-primary-dark">
              <img src={Calendar} alt="Calendar" />
            </div>
            <div className="ant-ml-2">
              <Title level={3}>02</Title>
              <Text>Lorem Ipsum</Text>
            </div>
          </Row>
        </Card>
      </Col>
      <Col xs={24} md={12} lg={6}>
        <Card className="card-dashboard">
          <Row align="middle">
            <div className="rounded bg-contrast">
              <img src={Smile} alt="Smile" />
            </div>
            <div className="ant-ml-2">
              <Title level={3}>01</Title>
              <Text>Lorem Ipsum</Text>
            </div>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};
