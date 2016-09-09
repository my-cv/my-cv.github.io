import React from 'react';
export default class BoundingCircle extends React.Component {

  constructor(props){
    super(props);
    let size = this.props.size | '100';
    let position = props.position;
    let circleStyle = {
      height: size+'px',
      width: size+'px',
      margin: '10px',
      position: 'absolute',
      transition: 'all 0.2s',
      left: position.left,
      top: position.top
    };
    this.state = {
      circleStyle: circleStyle
    }
  }

  handleMouseMove(mouse) {

  }

  render() {
    return (<div style={this.state.circleStyle} className='z-depth-1' ></div>);
  }

}
