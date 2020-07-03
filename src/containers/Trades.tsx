import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Empty, Layout } from 'antd';
import _ from 'lodash';

import {
  postChatMessage,
  markTradeAsPaid,
  deleteTrade
} from '../store/trades/actions'
import { TradeState } from '../store/trades/types';
import { SessionState } from '../store/session/types';
import { RootState } from '../store';

import TradeContent from '../components/Trade/TradeContent';
import TradeInfo from '../components/Trade/TradeInfo';
import TradeList from '../components/Trade/TradeList';

interface Props {
  match: any;
  location: any;
  history: any;
  trades: TradeState;
  markTradeAsPaid: Function;
  markMessagesRead: Function;
  postChatMessage: Function;
  deleteTrade: Function;
  session: SessionState;
  changeRole: Function;
}

const Trades: React.SFC<Props> = (props) => {
  const { match, trades, session } = props
  const { tradeId } = match.params
  const { items } = trades
  const selectedTrade = typeof tradeId == 'string' && _.find(items, {id: tradeId})
  const readMessages = session.role === 'seller' ? session.seenMessagesByRole.seller : session.seenMessagesByRole.buyer

  return (
    <Layout>
      {items.length > 0 && (
        <TradeList
          tradeItems={items}
          selectedTradeId={tradeId}
          readMessages={readMessages} />
      )}

      {selectedTrade ? (
        <TradeContent
          trade={selectedTrade}
          readMessages={readMessages}
          markMessagesRead={props.markMessagesRead}
          postChatMessage={(message: string) => props.postChatMessage(tradeId, message, session.role)}
          deleteTrade={() => props.deleteTrade(tradeId)} />
      ) : (
        <Empty className="margin--auto" />
      )}

      {selectedTrade && (
        <TradeInfo
          trade={selectedTrade}
          markTradeAsPaid={props.markTradeAsPaid} />
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
    postChatMessage,
    markTradeAsPaid,
    deleteTrade
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Trades)
