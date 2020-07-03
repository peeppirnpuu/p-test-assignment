import React from 'react';
import { Avatar, Button, Col, Layout, Statistic, Row } from 'antd';

import { TradeType } from '../../store/trades/types';

interface Props {
  trade: TradeType;
}

const TradeInfo: React.SFC<Props> = (props) => {
  const { trade } = props
  const { buyerUsername } = trade

  return (
    <Layout.Sider width={300} className="site-layout-background ant-layout-sider-light padding-top--25 text-align--center">
      <h2>You are trading with <strong>{buyerUsername}</strong></h2>
      <h3>Started 23 minutes ago</h3>

      <div className="padding-top--25">
        <Button type="primary" shape="round" size="large">
          Release bitcoins
        </Button>
      </div>

      <Row gutter={[0, 24]} className="padding-top--50">
        <Col span={12}>
          <Statistic title={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />} value="+37" suffix="/ -1" />
        </Col>
        <Col span={12}>
          <Statistic title="# of trades" value={4} />
        </Col>
        <Col span={12}>
          <Statistic title="Trade status" value="PAID" />
        </Col>
        <Col span={12}>
          <Statistic title="Trade hash" value="45aFD3Rr" />
        </Col>
        <Col span={12}>
          <Statistic title="Amount USD" value="25.00" />
        </Col>
        <Col span={12}>
          <Statistic title="Amount BTC" value="0.0023424" />
        </Col>
      </Row>
    </Layout.Sider>
  );
}

export default TradeInfo;
