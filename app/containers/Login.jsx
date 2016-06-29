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
  mover(event){
    var x =  event.target.offsetWidth*0.5;
    var y =  event.target.offsetHeight*0.5;

    this.setState({
      bt:(event.pageY-y)*0.05,
      rt:(event.pageX-x)*0.05
    });
  }
  render() {
    const { nickName } = this.state;

    return (
      <div ref="swaper" className="move-swap" onMouseMove = {(e) => this.mover(e)} >
            <div className="move-swap__back" style={{bottom: this.state.bt,right:this.state.rt}}></div>
        nickName: <input type="text" placeholder="请输入昵称" value={ nickName } onChange={ (e) => this.handerChangeNickName(e.target.value) }/>
        <button onClick={ () => this.handerJoin() }>加入Talk</button>
      </div>
    )
  }
}
