import React from 'react';
import ParallaxComponent from 'react-parallax-component';
import './_glow.scss';
export default class Parllex extends React.Component {

  constructor(props){
    super(props);
    this.containerStyle = {
      height: '200px',
      backgroundImage: 'url(' + this.props.background + ')',
      width: '100%',
      backgroundPosition: '10px 10px',
      position: 'relative'
    };

    this.textStyle = {
      position: 'absolute',
      left: '50%',
      top: '40%',
      transform: 'translate(-50%,-50%)',
      zIndex: '200'
    };

    this.bodyStyle = {
      position: 'absolute',
      left: '40%',
      top: '50%',
      height: '180px',
      transform: 'translate(-50%,-50%)'
    };

    this.state = {
      containerStyle: this.containerStyle,
      textStyle: this.textStyle,
      bodyStyle: this.bodyStyle
    }
  }

  handleMouseMove(mouse) {
    let nextContainerStyle = Object.assign({},this.state.containerStyle);
    let nextTextStyle = Object.assign({},this.state.textStyle);
    let nextBodyStyle = Object.assign({},this.state.bodyStyle);
    let force = 0.05;
    let x = -100 + mouse.screenX*force;
    let y = -400 + mouse.screenY*force;
    nextContainerStyle.backgroundPosition = x+'px '+y+'px';
    nextTextStyle.left = (50 - x/50 )+'%';
    nextBodyStyle.left = (45 - x/20 ) + '%';
    this.setState({
      containerStyle: nextContainerStyle,
      textStyle: nextTextStyle,
      bodyStyle: nextBodyStyle
     });
  }

  render() {
    return (
      <div style={this.state.containerStyle} onMouseMove={this.handleMouseMove.bind(this)} >
        <h2  style={this.state.textStyle} className=' white-text lighten-5 glow' >{this.props.text}</h2>
        <img
          src={this.props.body}
          style={this.state.bodyStyle}
          />
      </div>
    );
  }

}
