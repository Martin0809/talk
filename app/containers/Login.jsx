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
      <div>
        nickName: <input type="text" placeholder="请输入昵称" value={ nickName } onChange={ (e) => this.handerChangeNickName(e.target.value) }/>
        <button onClick={ () => this.handerJoin() }>加入Talk</button>
      </div>
    )
  }
}
