import React, { PureComponent } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Layout } from 'antd';

import {
  openTrade,
  postChatMessage,
  deleteTrade
} from '../store/trades/actions'
import { TradeType } from '../store/trades/types';
import { RootState } from '../store';

import TradeContent from '../components/Trade/TradeContent';
import TradeInfo from '../components/Trade/TradeInfo';
import TradeList from '../components/Trade/TradeList';

interface Props {
  trades: {
    items: TradeType[],
    selectedTradeIndex: number | void
  };
  openTrade: Function;
  postChatMessage: Function;
  deleteTrade: Function;
}

const Trade: React.SFC<Props> = (props) => {
  const { trades } = props
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
          trade={selectedTrade} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Trade)
