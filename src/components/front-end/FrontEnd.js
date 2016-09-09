import React from 'react';
import Parllex from '../common/Parllex.js';
export default class FrontEnd extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return ( <Parllex
              background='http://feelgrafix.com/data/nature-wallpaper/nature-wallpaper-15.jpg'
              body='http://immediateentourage.com/ie/wp-content/uploads/2011/11/Hot+Air+Balloon2-375x375.png'
              text='Front End'
            /> );
  }

}
