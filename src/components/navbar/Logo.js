import React from 'react';

export default class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { size : 'small' };
    this.startAnimation();
  }
   componentDidMount() {

  }

  startAnimation (){
    let sagar = this;

    setInterval ( function () {
      sagar.state.size === 'small' ? sagar.setState( { size: 'large' } ) : sagar.setState( { size: 'small' } );
    } , 15*1000 );
  }

  render() {
    let size = this.state.size;
    return (
      <a href="#" className = { 'brand-logo logo-animate ' } > Krishna Sagar R </a>
    );
  }

}
