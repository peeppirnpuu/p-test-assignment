import React from 'react';
import { Layout } from 'antd';

import { TradeType } from '../../store/trades/types';

interface Props {
  trade: TradeType;
}

const TradeInfo: React.SFC<Props> = (props) => {
  const { trade } = props
  const { buyerUsername } = trade

  return (
    <Layout.Sider width={300} className="site-layout-background ant-layout-sider-light">
      You are trading with <strong>{buyerUsername}</strong>
    </Layout.Sider>
  );
}

export default TradeInfo;
