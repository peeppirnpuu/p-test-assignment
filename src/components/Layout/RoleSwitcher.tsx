import React from 'react';
import { Switch } from 'antd';

import { SessionState } from '../../store/session/types';
import { withSession } from '../../containers/Session';

interface Props {
  session: SessionState;
  changeRole: Function;
}

const RoleSwitcher: React.SFC<Props> = (props) => {
  const checkedValue: string = 'Admin';
  const unCheckedValue: string = 'User';

  return (
    <Switch
      checkedChildren={checkedValue}
      unCheckedChildren={unCheckedValue}
      defaultChecked
      onChange={(checked: boolean) => props.changeRole(checked ? checkedValue.toLowerCase() : unCheckedValue.toLowerCase())}
    />
  );
}

export default withSession(RoleSwitcher);
