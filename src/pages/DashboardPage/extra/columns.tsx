/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Tag } from 'antd';
import moment from 'moment';

export const columns = [
  {
    title: 'Firstname',
    dataIndex: 'firstname',
    width: '40%',
  },
  {
    title: 'Lastname',
    dataIndex: 'lastname',
    width: '40%',
  },
  {
    title: 'Birthday',
    dataIndex: '',
    key: 'x',
    width: '20%',
    render: (_: any, record: any): any => {
      return (
        <Tag color="purple">{moment(record.birthday).format('DD/MM/YYYY')}</Tag>
      );
    },
  },
];
