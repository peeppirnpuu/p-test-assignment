import React from 'react';
import Moment from 'react-moment';
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
  currentMessage: string;
}

class TradeChat extends React.PureComponent<PropTypes, StateTypes> {
  constructor(props: any) {
    super(props)

    this.state = {
      currentMessage: ''
    }
  }

  componentDidMount() {
    const { messages } = this.props;

    const unreadMessages = messages.map(message => message.id);
    if (unreadMessages) this.props.markMessagesRead(unreadMessages);
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    const { messages, readMessages } = this.props;

    const unreadMessages = _.difference(messages.map(message => message.id), readMessages);
    if (unreadMessages) this.props.markMessagesRead(unreadMessages);
  }

  render() {
    const { messages } = this.props;
    const { currentMessage } = this.state;

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
                className={className(item.author === 'seller')}
                // actions={item.actions}
                author={item.author}
                avatar={item.avatar}
                content={item.content}
                datetime={<Moment unix format="HH:mm D MMMM YYYY">{item.timestamp}</Moment>}
              />
            </li>
          )}
        />

        {/* // Use design system's Search component, as inline enter button is not included with Input component */}
        <Search
          placeholder="Type your message..."
          value={currentMessage}
          onChange={(e) => this.setState({currentMessage: e.target.value})}
          onSearch={(value) => {
            this.props.postChatMessage(value);
            this.setState({currentMessage: ''});
          }}
          enterButton="Send" />
      </React.Fragment>
    );
  }
}

export default TradeChat;
