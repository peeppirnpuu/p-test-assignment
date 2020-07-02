import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './stylesheets/main.scss';

import Layout from './components/Layout/Layout';
import Trades from './containers/Trades';

function App() {
  return (
    <Layout>
      <Trades />
    </Layout>
  );
}

export default App;
