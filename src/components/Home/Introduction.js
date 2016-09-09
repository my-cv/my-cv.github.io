import React from 'react';

export default class Introduction extends React.Component {

 constructor(props) {
   super(props);
   this.state = { text: '' };
   this.animate();
 }

compo

 animate() {
   let charIndex = 0;
   let text = 'Introduction';
   let vm = this;
   setInterval( function() {
     vm.setState({ text: text.slice(0,charIndex++) });
   }, 50 );
 }

  render() {
    return <h1 style={ { transform: ' rotateY(-45deg) rotateX(-45deg) rotateZ(-45deg)' } } >{ this.state.text }</h1>;
  }


}
