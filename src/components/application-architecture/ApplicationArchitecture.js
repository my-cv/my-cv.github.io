import React from 'react';
import PracticeList from '../common/PracticeList.js';
import Parllex from '../common/Parllex.js';
export default class ApplicationArchitecture extends React.Component {

  render() {
    return (
      <section>
        <Parllex
          background='http://infossible.com/infosdata/wp-content/uploads/2015/08/Earth-From-Space-Space-1080x1920.jpg'
          body='https://upload.wikimedia.org/wikipedia/commons/c/c2/Transiting_Exoplanet_Survey_Satellite_artist_concept_(transparent_background).png'
          text='Application Architecture'
        />
        <div className='container' >
          <PracticeList/>
        </div>
      </section>
    );
  }

}
