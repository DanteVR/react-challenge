import React from 'react';
import { Layout } from 'antd';
import './index.less';

export interface SidebarProps {
  children?: React.ReactNode;
}

const { Content } = Layout;

export const Sidebar: React.FC<SidebarProps> = ({ children }: SidebarProps) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout className="site-layout">
        <Content className="site-layout-content">{children}</Content>
      </Layout>
    </Layout>
  );
};
