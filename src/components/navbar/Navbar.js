import React from 'react';
import Logo from './Logo.js';
import { Link } from 'react-router';

export default class Navbar extends React.Component {

  render() {
    return (
      <nav className='light-blue lighten-1' role='navigation' >
      <div className="nav-wrapper container">
      <Logo />
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="principles">About Me</Link></li>
        <li><Link to="work">Work</Link></li>
        <li><Link to="blog">Blog</Link></li>
        <li><Link to="contact">Contact</Link></li>

      </ul>
    </div>
   </nav>);
  }

}
