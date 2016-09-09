import React from 'react';
import PracticeList from '../common/PracticeList.js';
import Parllex from '../common/Parllex.js';
import BoundingCircle from '../common/BoundingCircle.js';
import BoundingCirclesContainer from '../common/BoundingCirclesContainer.js';
export default class Agile extends React.Component {

  render() {
    return (
      <section>
        <Parllex
          background='http://apod.nasa.gov/apod/image/1602/PinnaclesGalaxy_Goh_2400.jpg'
          body='https://lh5.ggpht.com/DDMIxegFhINdUiET3ZRNj1KQevPoPFSrczPIxUQq-DEwci4rIW3yQNyP3PzV3lYyUxo=w300'
          text='Agile'
        />
        <div className='container' >
          <BoundingCirclesContainer cards={[
            {key: 1, size: 50, position: { left: 0, top: 0 }},
            {key: 2, size: 60, position: { left: 0, top: 0 }},
            {key: 3, size: 100, position: { left: 0, top: 0 }},
            {key: 4, size: 50, position: { left: 0, top: 0 }},
            {key: 5, size: 20, position: { left: 0, top: 0 }},
            {key: 6, size: 50, position: { left: 0, top: 0 }}
          ]} />
        </div>
      </section>
    );
  }

}
