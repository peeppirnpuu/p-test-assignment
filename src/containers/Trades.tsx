import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Layout } from 'antd';

import {
  openTrade,
  postChatMessage,
  deleteTrade
} from '../store/trades/actions'
import { TradeState } from '../store/trades/types';
import { SessionState } from '../store/session/types';
import { RootState } from '../store';

import TradeContent from '../components/Trade/TradeContent';
import TradeInfo from '../components/Trade/TradeInfo';
import TradeList from '../components/Trade/TradeList';

interface Props {
  trades: TradeState;
  openTrade: Function;
  postChatMessage: Function;
  deleteTrade: Function;
  session: SessionState;
  changeRole: Function;
}

const Trades: React.SFC<Props> = (props) => {
  const { trades, session } = props
  const { items, selectedTradeIndex } = trades
  const selectedTrade = typeof selectedTradeIndex == 'number' && items[selectedTradeIndex]

  return (
    <Layout>
      {items.length > 0 && (
        <TradeList
          tradeItems={items}
          selectedTradeIndex={selectedTradeIndex}
          openTrade={props.openTrade} />
      )}

      {selectedTrade && (
        <TradeContent
          trade={selectedTrade}
          postChatMessage={(message: string) => props.postChatMessage(selectedTradeIndex, message)}
          deleteTrade={() => props.deleteTrade(selectedTradeIndex)} />
      )}

      {selectedTrade && (
        <TradeInfo
          trade={selectedTrade}
          role={session.role} />
      )}
    </Layout>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    trades: state.trades
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    openTrade,
    postChatMessage,
    deleteTrade
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Trades)
