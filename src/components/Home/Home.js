import React from 'react';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = { size: 'small', position: 'start' };
    this.sequence = [
      { size: 'small', position: 'start' },
      { size: 'small', position: 'enterd' },
      { size: 'large', position: 'enterd' },
      { size: 'small', position: 'enterd' },
    ];
    this.stateIndex = 0;
  }

 next() {
   ++this.stateIndex;
   return this.sequence[ this.stateIndex ];
 }

  animateCircle() {
    this.setState( this.next() );
  }

  render() {
    return (
      <div onClick={ () => { this.animateCircle() } }
        className={ 'circle ' + this.state.size + ' ' + this.state.position } >
      </div>
    );
  }


}
