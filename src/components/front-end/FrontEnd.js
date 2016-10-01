import React from 'react';
import Parllex from '../common/Parllex.js';
import html5Image from './html5.jpg';
import css3Image from './css3.png';
import jsImage from './js.png';
import es6Image from './es6.png';
import scalaImage from './scalajs.png';
import SkilLogo from './SkilLogo.js';

export default class FrontEnd extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return ( <div><Parllex
              background='http://feelgrafix.com/data/nature-wallpaper/nature-wallpaper-15.jpg'
              body='http://immediateentourage.com/ie/wp-content/uploads/2011/11/Hot+Air+Balloon2-375x375.png'
              text='Front End'
            />
            <div className='container' >
              <h4 className="pink-text center" >Languages</h4>
              <div className='row' >
                <div className='col s3 center' ><SkilLogo image={ html5Image } text='HTML5' /></div>
                <div className='col s3 center' ><SkilLogo image={ css3Image } text='CSS 3' /></div>
                <div className='col s3 center' ><SkilLogo image={ jsImage } text='JavaScript' /></div>
                <div className='col s3 center' ><SkilLogo image={ es6Image } text='ES6' /></div>
              </div>
              <div className='row' >
                <div className='col s12 center' >
                  <SkilLogo image={ scalaImage } text='Scala.js' />
                </div>
              </div>
              <h4 className="pink-text center" >Frameworks and Libraries</h4>
              <div className='row' >
                <div className='col s2' ><SkilLogo image={ html5Image } text='HTML5' /></div>
                <div className='col s2' ><SkilLogo image={ html5Image } text='HTML5' /></div>
                <div className='col s2' ><SkilLogo image={ html5Image } text='HTML5' /></div>
                <div className='col s2' ><SkilLogo image={ html5Image } text='HTML5' /></div>
                <div className='col s2' ><SkilLogo image={ html5Image } text='HTML5' /></div>
                <div className='col s2' ><SkilLogo image={ html5Image } text='HTML5' /></div>
              </div>
              <h4 className="pink-text center" >Tools</h4>
              <div className='row' >
                <div className='col s2' ><SkilLogo image={ html5Image } text='HTML5' /></div>
                <div className='col s2' ><SkilLogo image={ html5Image } text='HTML5' /></div>
                <div className='col s2' ><SkilLogo image={ html5Image } text='HTML5' /></div>
                <div className='col s2' ><SkilLogo image={ html5Image } text='HTML5' /></div>
                <div className='col s2' ><SkilLogo image={ html5Image } text='HTML5' /></div>
                <div className='col s2' ><SkilLogo image={ html5Image } text='HTML5' /></div>
              </div>
            </div>
            </div> );
  }

}
