import React from 'react'
import { browserHistory } from 'react-router'

import faceImg from '../images/face.jpg'

const socket = io.connect('http://localhost:3000');

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      messages: []
    };
  }

  componentWillMount() {
    if (!localStorage.nickName || !localStorage.userId) {
      browserHistory.replace('/login');
    }
  }

  componentDidMount() {
    const Rthis = this;

    socket.on('receive message', function (msg) {
      Rthis.state.messages.push(msg);
      Rthis.setState({messages: Rthis.state.messages})
    });

    socket.on('news', function (msg) {
      Rthis.state.messages.push(msg);
      Rthis.setState({messages: Rthis.state.messages})
    });
  }

  changeValue(val) {
    this.setState({value: val});
  }

  sendMessage() {
    if (this.state.value) {
      socket.emit('send message', { type: 'msg', msg: this.state.value });
      this.refs.msgInput.value = '';
      this.changeValue('');
    }
  }

  render() {
    const { messages } = this.state;

    return (
      <div className="chat">
        <div className="sidebar">
        </div>
        <div className="session">
          <div className="session-header">
            头部
          </div>
          <div className="session-content">
            <p>聊天记录：</p>
            {
              messages.length > 0 && messages.map(function (item, index) {
                switch (item.type) {
                  case 'news':
                    return <p className="news" key={ index }>{ item.msg }</p>;

                  case 'msg':
                    return (
                      <div className="message" key={ index }>
                        <img className="message-face" src={ faceImg } />
                        <div className="message-box">
                          <p className="message-nickname">新用户</p>
                          <p className="message-bubble">{ item.msg }</p>
                        </div>
                      </div>
                    );

                  default:
                    return;
                }
              })
            }
          </div>
          <div className="session-footer">
            <input ref="msgInput" className="sender-input" type="text" onChange={ (e) => this.changeValue(e.target.value) }/>
            <button className="sender-btn" onClick={ () => this.sendMessage() }>发 送</button>
          </div>
        </div>
      </div>
    )
  }
}
