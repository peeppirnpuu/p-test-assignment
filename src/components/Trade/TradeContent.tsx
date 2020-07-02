import React from 'react';
import { Layout, Breadcrumb } from 'antd';

import { TradeType } from '../../store/trades/types';
import TradeChat from './TradeChat';

interface Props {
  trade: TradeType;
  readMessages: any[];
  markMessagesRead: Function;
  postChatMessage: Function;
  deleteTrade: Function;
}

const TradeContent: React.SFC<Props> = (props) => {
  const { trade } = props;
  const { paymentMethod, chat } = trade;

  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout.Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <span onClick={() => props.deleteTrade()}>X</span>
        {paymentMethod}

        <TradeChat
          messages={chat.items}
          readMessages={props.readMessages}
          markMessagesRead={props.markMessagesRead}
          postChatMessage={props.postChatMessage} />
      </Layout.Content>
    </Layout>
  );
}

export default TradeContent;
