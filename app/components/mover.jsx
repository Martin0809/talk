import React from 'react'
var x,y;
class Mover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
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
        return (
            <div ref="swaper" className="move-swap" onMouseMove = {(e) => this.mover(e)} >
                <div className="move-swap__back" style={{bottom: this.state.bt,right:this.state.rt}}></div>
                { this.props.children }
            </div>
    )
    }
}

export default Mover;