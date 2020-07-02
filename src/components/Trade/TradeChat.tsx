import React from 'react';
import { Comment, Input, List } from 'antd';
import classnames from 'classnames';
import _ from 'lodash';

import { ChatItemType } from '../../store/trades/types';

const { Search } = Input;

interface PropTypes {
  messages: ChatItemType[];
  readMessages: any[];
  postChatMessage: Function;
  markMessagesRead: Function;
}

interface StateTypes {
}

class TradeChat extends React.PureComponent<PropTypes, StateTypes> {
  constructor(props: any) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    const { messages } = this.props;

    const unreadMessages = messages.map(message => message.id);
    if (unreadMessages) this.props.markMessagesRead(unreadMessages);
  }

  componentDidUpdate() {
    const { messages, readMessages } = this.props;

    const unreadMessages = _.difference(messages.map(message => message.id), readMessages);
    if (unreadMessages) this.props.markMessagesRead(unreadMessages);
  }

  render() {
    const { messages } = this.props;

    const className = (isAdmin: boolean) => classnames({
      'ant-comment--reverse': isAdmin
    });

    return (
      <React.Fragment>
        <List
          className="comment-list"
          header={`${messages.length} replies`}
          itemLayout="horizontal"
          dataSource={messages}
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

        <Search placeholder="Type your message..." onSearch={value => this.props.postChatMessage(value)} enterButton="Send" />
        {/* // Use design system's Search component, as inline enter button is not included with Input component */}
      </React.Fragment>
    );
  }
}

export default TradeChat;
