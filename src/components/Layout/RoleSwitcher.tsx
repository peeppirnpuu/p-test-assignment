import React from 'react';
import { Switch } from 'antd';

interface Props {
  onChange: Function;
}

const RoleSwitcher: React.SFC<Props> = (props) => {
  const checkedValue: string = 'Admin';
  const unCheckedValue: string = 'User';

  return (
    <Switch
      checkedChildren={checkedValue}
      unCheckedChildren={unCheckedValue}
      defaultChecked
      onChange={(checked: boolean) => props.onChange(checked ? checkedValue.toLowerCase() : unCheckedValue.toLowerCase())}
    />
  );
}

export default RoleSwitcher;
