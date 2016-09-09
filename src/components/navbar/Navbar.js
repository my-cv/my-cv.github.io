import React from 'react';
import Logo from './Logo.js';
import { Link } from 'react-router';
import './_navbar.scss';
export default class Navbar extends React.Component {

  render() {
    return (
      <nav  className='pink darken-1' role='navigation'  >
      <div className="nav-wrapper container">
      <Logo />
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="about-me" >About Me</Link></li>
        <li><Link to="application-architecture" className=' waves-effect waves-light' >Application Architecture</Link></li>
        <li><Link to="agile" className=' waves-effect waves-light'>Agile</Link></li>
        <li><Link to="front-end" className=' waves-effect waves-light' >Front End</Link></li>
        <li><Link to="contact">Contact</Link></li>

      </ul>
    </div>
   </nav>);
  }

}
