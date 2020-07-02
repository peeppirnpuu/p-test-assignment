import React from 'react';
import { Layout, List, Avatar } from 'antd';

import { TradeType } from '../../store/trades/types';

interface Props {
  tradeItems: TradeType[];
  selectedTradeIndex: number | void;
  openTrade: Function;
}

const TradeItems: React.SFC<Props> = (props) => {
  return (
    <Layout.Sider width={300} className="site-layout-background ant-layout-sider-light">
      <List
        itemLayout="horizontal"
        dataSource={props.tradeItems}
        renderItem={(item, index) => (
          <List.Item onClick={() => {
            props.openTrade(index);
          }}>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{item.buyerUsername}</a>}
              description={<span>{item.paymentMethod} {props.selectedTradeIndex === index && ('active')}</span>}
            />
          </List.Item>
        )}
      />
    </Layout.Sider>
  );
}

export default TradeItems;
