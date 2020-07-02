import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, List, Avatar } from 'antd';

import { TradeType } from '../../store/trades/types';

interface Props {
  match: any,
  location: any,
  history: any,
  tradeItems: TradeType[];
  selectedTradeId: string | void;
  openTrade: Function; // TODO: Redundant
}

const TradeItems: React.SFC<Props> = (props) => {
  return (
    <Layout.Sider width={300} className="site-layout-background ant-layout-sider-light">
      <List
        itemLayout="horizontal"
        dataSource={props.tradeItems}
        renderItem={item => (
          <List.Item onClick={() => {
            props.history.push(`/trade/${item.id}`)
          }}>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{item.buyerUsername}</a>}
              description={<span>{item.paymentMethod} {props.selectedTradeId === item.id && ('active')}</span>}
            />
          </List.Item>
        )}
      />
    </Layout.Sider>
  );
}

export default withRouter(TradeItems)
