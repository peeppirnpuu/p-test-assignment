import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Layout as AntdLayout, Row, Col } from 'antd';

import { changeRole } from '../store/session/actions'
import { SessionState } from '../store/session/types';
import { RootState } from '../store';

import Header from '../components/Layout/Header';
import RoleSwitcher from '../components/Layout/RoleSwitcher';
import ViewSwitcher from '../components/Layout/ViewSwitcher';

interface Props {
  children: React.ReactNode;
  session: SessionState;
  changeRole: Function;
}

const Layout: React.SFC<Props> = (props) => {
  const { session } = props;
  const { role } = session;

  return (
    <AntdLayout>
      <Header />
      <Row>
        <Col span={20}>
          <ViewSwitcher />
        </Col>
        <Col span={4}>
          <RoleSwitcher onChange={(role: string) => props.changeRole(role)} />
          Your role is {role}
        </Col>
      </Row>
      {props.children}
    </AntdLayout>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    session: state.session
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    changeRole
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
