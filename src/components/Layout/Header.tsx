import React from 'react';
import { NavLink } from 'react-router-dom'
import { Col, Layout, Menu, Row } from 'antd';

import Logo from './Logo'

interface PropTypes {
}

const Header: React.SFC<PropTypes> = (props) => {
  const menuItems: string[] = [
    'Buy bitcoins',
    'Sell bitcoins',
    'Wallet',
    'Support',
    'Your account'
  ]

  return (
    <Layout.Header className="header">
      <Row>
        <Col span={4}>
          <NavLink to="/" className="logo-link">
            <Logo />
          </NavLink>
        </Col>
        <Col span={20}>
          {menuItems.length > 0 && (
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              {menuItems.map((title, index) => <Menu.Item key={index}>{title}</Menu.Item>)}
            </Menu>
          )}
        </Col>
      </Row>
    </Layout.Header>
  );
}

export default Header;
