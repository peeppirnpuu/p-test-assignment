import React from 'react';
import { Switch } from 'antd';

interface Props {
}

const RoleSwitcher: React.SFC<Props> = (props) => {
  return (
    <Switch
      checkedChildren="Admin"
      unCheckedChildren="User"
      defaultChecked
    />
  );
}

export default RoleSwitcher;
