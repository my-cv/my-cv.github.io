import React from 'react';
import Principles from './principle/Principles.js';
export default class About extends React.Component {

  render() {



    return (
        <div className='' style={{
           backgroundImage: 'url(https://c2.staticflickr.com/6/5612/15195344874_5af3d86583_b.jpg)',
           backgroundSize: '100%',
           height: ( document.body.scrollHeight- 64 )+ 'px',
           width: '100%',
           overflow: 'auto'
          }
        } >
            <h4 className=' white-text center' >Hi I'm Sagar</h4>
            <p  className='white-text center' >I born  and grownup in my home town Kakinada
             <br/> I'm a polyglot programmer currently working as a fronted developer.
                I'm interested in building better software and help others to do it</p>
        </div>);

  }

}
