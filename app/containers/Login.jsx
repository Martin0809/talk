import React from 'react'
import { browserHistory } from 'react-router'
import { Button } from 'antd';
import { Input } from 'antd';

var x,y;

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
    if(x==undefined){
      x =  event.target.offsetWidth*0.5;
      y =  event.target.offsetHeight*0.5;
    }


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

        <div className="loginBox">
          <h3>Welcome Talk</h3>
          <div><Input type="text" placeholder="nickName" value={ nickName } onChange={ (e) => this.handerChangeNickName(e.target.value) }/></div>
          <Button type="primary" size="large" onClick={ () => this.handerJoin() }>加入Talk</Button>
        </div>
      </div>
    )
  }
}
