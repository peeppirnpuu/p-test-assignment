import React from 'react';
import { Menu } from 'antd';

interface Props {
}

const ViewSwitcher: React.SFC<Props> = (props) => {
  const menuItems: string[] = [
    'Overview',
    'Trades',
    'Disputes',
    'Your offers',
    'My team',
    'Trade History'
  ]

  return menuItems.length > 0 ? (
    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} onSelect={({ key }) => alert(key)}>
      {menuItems.map((title, index) => <Menu.Item key={index}>{title}</Menu.Item>)}
    </Menu>
  ) : null;
}

export default ViewSwitcher;
