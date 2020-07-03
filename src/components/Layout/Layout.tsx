import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout as AntdLayout, Row, Col } from 'antd';

import Header from './Header';
import RoleSwitcher from './RoleSwitcher';
import ViewSwitcher from './ViewSwitcher';

interface Props {
  match: any;
  location: any;
  history: any;
  children: React.ReactNode;
}

const Layout: React.SFC<Props> = (props) => {
  return (
    <AntdLayout>
      <Header />
      <Row>
        <Col span={20}>
          <ViewSwitcher history={props.history} />
        </Col>
        <Col span={4} className="background-color--white display--flex align-items--center justify-content--center">
          <RoleSwitcher />
        </Col>
      </Row>
      {props.children}
    </AntdLayout>
  );
}

export default withRouter(Layout)
