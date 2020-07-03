import React from 'react';
import { Layout, Menu } from 'antd';

interface Props {
}

const Header: React.SFC<Props> = (props) => {
  const menuItems: string[] = [
    'Buy bitcoins',
    'Sell bitcoins',
    'Wallet',
    'Support',
    'Your account'
  ]

  return (
    <Layout.Header className="header">
      <div className="logo" />
      {menuItems.length > 0 && (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          {menuItems.map((title, index) => <Menu.Item key={index}>{title}</Menu.Item>)}
        </Menu>
      )}
    </Layout.Header>
  );
}

export default Header;
