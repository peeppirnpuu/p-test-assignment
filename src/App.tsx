import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './stylesheets/main.scss';

import { withSession } from './containers/Session';
import Layout from './components/Layout/Layout';
import Trades from './containers/Trades';

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={withSession(Trades)} />
          <Route exact path="/trade/:tradeId" component={withSession(Trades)} />
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
