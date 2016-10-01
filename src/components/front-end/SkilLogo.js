import React from 'react';
import './_skil-logo.scss';

export default class SkilLogo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <figure className='skill-logo' >
        <div
          style={{
            backgroundImage: 'url('+ this.props.image +')',
            backgroundRepeat: 'no-repeat',
            backgroundPositin: 'center',
            backgroundSize: '100%',
            margin: '0 auto',
            width: '70px',
            height: '100px'
            }
          } >
        </div>
        <figcaption className='center purple-text' >{ this.props.text }</figcaption>
      </figure>
    );
  }

}
