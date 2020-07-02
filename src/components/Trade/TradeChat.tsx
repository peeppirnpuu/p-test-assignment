import React from 'react';
import { Comment, Input, Tooltip, List } from 'antd';
import classnames from 'classnames';

import { ChatItemType } from '../../store/trades/types';

const { Search } = Input;

interface Props {
  chatItems: ChatItemType[];
  postChatMessage: Function;
}

const TradeChat: React.SFC<Props> = (props) => {
  const { chatItems } = props;

  const className = (isAdmin: boolean) => classnames({
      'ant-comment--reverse': isAdmin
    });

  return (
    <React.Fragment>
      <List
        className="comment-list"
        header={`${chatItems.length} replies`}
        itemLayout="horizontal"
        dataSource={chatItems}
        renderItem={item => (
          <li>
            <Comment
              className={className(item.author === 'admin')}
              // actions={item.actions}
              author={item.author}
              avatar={item.avatar}
              content={item.content}
              datetime={item.timestamp}
            />
          </li>
        )}
      />

      <Search placeholder="Type your message..." onSearch={value => props.postChatMessage(value)} enterButton="Send" />
      {/* // Use design system's Search component, as inline enter button is not included with Input component */}
    </React.Fragment>
  );
}

export default TradeChat;
