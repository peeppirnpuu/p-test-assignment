import React from 'react'
import { Menu } from 'antd'

interface PropTypes {
  history: any
}

const ViewSwitcher: React.SFC<PropTypes> = (props) => {
  const menuItems: string[] = [
    'Overview',
    'Trades',
    'Disputes',
    'Your offers',
    'My team',
    'Trade History'
  ]

  return menuItems.length > 0 ? (
    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} onClick={({ key }) => props.history.push('/')}>
      {menuItems.map((title, index) => <Menu.Item key={index}>{title}</Menu.Item>)}
    </Menu>
  ) : null
}

export default ViewSwitcher
