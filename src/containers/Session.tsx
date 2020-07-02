import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { changeRole } from '../store/session/actions';
import { SessionState } from '../store/session/types';
import { RootState } from '../store';

interface WrappedProps {
  session?: SessionState;
  changeRole?: Function;
}

export function withSession<P>(WrappedComponent: React.ComponentType<P>) {
  class Session extends React.Component<WrappedProps> {
    public render() {
      return <WrappedComponent {...this.props as P} />
    }
  }

  const mapStateToProps = (state: RootState) => {
    return {
      session: state.session
    }
  }

  const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
      changeRole
    }, dispatch);
  }

  return connect(mapStateToProps, mapDispatchToProps)(Session);
}
