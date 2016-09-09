import React from 'react';
import PracticeList from '../common/PracticeList.js';
import Parllex from '../common/Parllex.js';
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
          <PracticeList/>
        </div>
      </section>
    );
  }

}
