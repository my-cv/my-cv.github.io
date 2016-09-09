import React from 'react';

export default class Practice extends React.Component {

  animate(){

  }
  render() {
    return (
      <section >
        <div className='row' >
          <div className='col s12' ></div>
        </div>
        <div className='row' >
          <div className='col s6' >
            <div className='orange-text' >{this.props.name}</div>
            <ul>
              <li className='mdi-action-add-shopping-cart' >Honest Estemates</li>
              <li className='mdi-action-add-shopping-cart' >Sinplicity</li>
              <li className='mdi-action-add-shopping-cart' >Feedback</li>
              <li><i className='mdi-action-add-shopping-cart' ></i>Code Reviews</li>
            </ul>
          </div>
          <div className='col s6' >
            <p>
              It has already been proven to be very successful at many companies of all different sizes and industries world wide
            </p>
          </div>
        </div>
      </section>);
  }

}
