import React, { useEffect } from 'react';
import { Card, Table } from 'antd';
import { useAppDispatch, useCustomerSelectorHook } from '@hooks';
import { getCustomers as getList } from '@redux/actions/customer';
import { columns } from './extra/columns';

export const Customers: React.FC = () => {
  const dispatch = useAppDispatch();
  const { getCustomers }: any = useCustomerSelectorHook();
  const { loading, response } = getCustomers;

  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  return (
    <Card title="Customers list">
      <Table
        columns={columns}
        size="small"
        rowKey={(record: any) => record.id}
        loading={loading}
        dataSource={response?.results}
      />
    </Card>
  );
};
