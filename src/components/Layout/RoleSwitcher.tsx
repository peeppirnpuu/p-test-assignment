import React from 'react';
import { Switch } from 'antd';

import { SessionState } from '../../store/session/types';
import { withSession } from '../../containers/Session';

interface Props {
  session: SessionState;
  changeRole: Function;
}

const RoleSwitcher: React.SFC<Props> = (props) => {
  const { session } = props

  const checkedValue: string = 'Seller';
  const unCheckedValue: string = 'Buyer';

  return (
    <Switch
      checkedChildren={checkedValue}
      unCheckedChildren={unCheckedValue}
      defaultChecked={session.role === checkedValue.toLowerCase()}
      onChange={(checked: boolean) => props.changeRole(checked ? checkedValue.toLowerCase() : unCheckedValue.toLowerCase())}
    />
  );
}

export default withSession(RoleSwitcher);
