import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, List, Avatar } from 'antd';
import classnames from 'classnames';
import _ from 'lodash';

import { TradeType } from '../../store/trades/types';

interface Props {
  match: any;
  location: any;
  history: any;
  tradeItems: TradeType[];
  selectedTradeId: string | void;
  readMessages: any[];
}

const TradeItems: React.SFC<Props> = (props) => {
  const { tradeItems, readMessages } = props

  const className = (active: boolean, unread: boolean, paid: boolean) => classnames({
    'ant-list-item--active': active,
    'ant-list-item--unread': unread,
    'ant-list-item--paid': paid
  });

  return (
    <Layout.Sider width={300} className="site-layout-background ant-layout-sider-light">
      <List
        itemLayout="horizontal"
        dataSource={tradeItems}
        renderItem={item => {
          const { items } = item.chat

          const unreadMessages = _.difference(items.map(message => message.id), readMessages);

          return (
            <List.Item
              className={className(props.selectedTradeId === item.id, unreadMessages.length > 0, item.tradeStatusIsPaid)}
              onClick={() => {
                props.history.push(`/trade/${item.id}`);
              }}>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={
                  <div className="ant-list-item-meta-content-title">
                    <small>{item.buyerUsername} <strong>is buying</strong></small>
                  </div>
                }
                description={
                  <div>
                    {item.paymentMethod}<br />
                    <small>{item.amount}USD</small>
                  </div>
                }
              />
            </List.Item>
          )
        }}
      />
    </Layout.Sider>
  );
}

export default withRouter(TradeItems)
