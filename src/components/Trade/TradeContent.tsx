import React from 'react';
import { Button, Col, Layout, Row, Tooltip } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

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
      <Layout.Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <Row>
          <Col span={4}>
            <Tooltip title="Delete">
              <Button type="default" shape="circle" icon={<DeleteOutlined />} onClick={() => props.deleteTrade()} />
            </Tooltip>
          </Col>
          <Col span={16} className="text-align--center">
            <h2>{paymentMethod}</h2>
            <h3>{trade.buyerUsername} <span className="color--success">+37</span> / <span className="color--danger">-1</span></h3>
          </Col>
          <Col span={4}>
          </Col>
        </Row>

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
