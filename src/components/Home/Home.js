import React from 'react';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = { size: 'small' };
  }

  animateCircle() {
     let vinay = this;
    setInterval( function () {
         vinay.state.size === 'small' ? vinay.setState( { size: 'large' } ) : vinay.setState( { size: 'small' } ) ;
    } , 1000 );
  }

  render() {
    return (
      <div onClick={ () => { this.animateCircle() } } className={ 'circle ' + this.state.size } ></div>
    );
  }


}
