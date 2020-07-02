import React, { PureComponent } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Layout } from 'antd';

import { openTrade } from '../store/trades/actions'
import { TradeType } from '../store/trades/types';
import { RootState } from '../store';

import TradeList from '../components/Trade/TradeList';

interface Props {
  trades: {
    items: TradeType[],
    selectedTradeIndex: number | void
  };
  openTrade: Function;
}

const Trade: React.SFC<Props> = (props) => {
  const { trades } = props
  const { items, selectedTradeIndex } = trades

  return (
    <Layout>
      {items.length > 0 && (
        <TradeList
          tradeItems={items}
          selectedTradeIndex={selectedTradeIndex}
          openTrade={props.openTrade} />
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
    openTrade
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Trade)
