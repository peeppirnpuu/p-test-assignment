import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import _ from 'lodash';

import {
  postChatMessage,
  deleteTrade
} from '../store/trades/actions'
import { TradeState } from '../store/trades/types';
import { SessionState } from '../store/session/types';
import { RootState } from '../store';

import TradeContent from '../components/Trade/TradeContent';
import TradeInfo from '../components/Trade/TradeInfo';
import TradeList from '../components/Trade/TradeList';

interface PropTypes {
  match: any,
  location: any,
  history: any,
  trades: TradeState;
  postChatMessage: Function;
  deleteTrade: Function;
  session: SessionState;
  changeRole: Function;
}

interface StateTypes {
  selectedTradeId: string | void;
}

class Trades extends React.PureComponent<PropTypes, StateTypes> {
  constructor(props: any) {
    super(props)

    this.state = {
      selectedTradeId: undefined
    }
  }

  componentDidMount() {
    const { tradeId } = this.props.match.params

    if (tradeId) this.setState({selectedTradeId: tradeId})
  }

  componentDidUpdate() {
    const { tradeId } = this.props.match.params

    if (tradeId) this.setState({selectedTradeId: tradeId})
  }

  render() {
    const { trades, session } = this.props
    const { selectedTradeId } = this.state
    const { items } = trades
    const selectedTrade = typeof selectedTradeId == 'string' && _.find(items, {id: selectedTradeId})

    return (
      <Layout>
        {items.length > 0 && (
          <TradeList
            tradeItems={items}
            selectedTradeId={selectedTradeId} />
        )}

        {selectedTrade && (
          <TradeContent
            trade={selectedTrade}
            postChatMessage={(message: string) => this.props.postChatMessage(selectedTradeId, message)}
            deleteTrade={() => this.props.deleteTrade(selectedTradeId)} />
        )}

        {selectedTrade && (
          <TradeInfo
            trade={selectedTrade}
            role={session.role} />
        )}
      </Layout>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    trades: state.trades
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    postChatMessage,
    deleteTrade
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Trades)
