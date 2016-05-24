import React from 'react'
import { Link } from 'react-router'

const socket = io.connect('http://localhost:3000');

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      messages: []
    };
  }

  componentDidMount() {
    const Rthis = this;

    socket.on('send message', function (msg) {
      Rthis.state.messages.push(msg);
      Rthis.setState({messages: Rthis.state.messages})
    });
  }

  changeValue(val) {
    this.setState({value: val});
  }

  sendMessage() {
    socket.emit('send message', { msg: this.state.value });
    this.refs.msgInput.value = '';
    this.changeValue('');
  }

  render() {
    const { messages, value } = this.state;

    return (
      <div>
        <p>im a Chat! <Link to="/login">login</Link></p>
        <p>聊天记录：</p>
        {
          messages.length > 0 && messages.map(function (item, index) {
            return <p key={ index }>{ item.msg }</p>
          })
        }
        <input ref="msgInput" type="text" onChange={ (e) => this.changeValue(e.target.value) }/>
        <button onClick={ () => this.sendMessage() }>发送</button>
      </div>
    )
  }
}
