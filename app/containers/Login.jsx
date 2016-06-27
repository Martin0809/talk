import React from 'react'
import { browserHistory } from 'react-router'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickName: '' 
    };
  }

  handerChangeNickName(nickName) {
    this.setState({
      nickName: nickName
    });
  }

  handerJoin() {
    localStorage.nickName = this.state.nickName;
    localStorage.userId = new Date().getTime();
    browserHistory.push('/chat')
  }

  render() {
    const { nickName } = this.state;

    return (
      <div className="login-wrapper">
        <div className="login-container">
          <p className="login-logo">Talk</p>
          <input className="login-nickname" type="text" placeholder="请输入昵称" value={ nickName } onChange={ (e) => this.handerChangeNickName(e.target.value) }/>
          <button className="login-btn"  onClick={ () => this.handerJoin() }>开始聊天</button>
        </div>
      </div>
    )
  }
}
