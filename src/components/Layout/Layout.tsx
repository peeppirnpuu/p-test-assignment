import React from 'react';
import { Layout as AntdLayout, Row, Col } from 'antd';

import Header from './Header/Header';
import RoleSwitcher from './RoleSwitcher/RoleSwitcher';
import ViewSwitcher from './ViewSwitcher/ViewSwitcher';

interface Props {
  children: React.ReactNode;
}

const Layout: React.SFC<Props> = (props) => {
  return (
    <AntdLayout>
      <Header />
      <Row>
        <Col span={20}>
          <ViewSwitcher />
        </Col>
        <Col span={4}>
          <RoleSwitcher />
          {/* // TODO: Use RoleSwitcher to change role in chat */}
        </Col>
      </Row>
      {props.children}
    </AntdLayout>
  );
}

export default Layout;
