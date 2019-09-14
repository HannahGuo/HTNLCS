/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import style from './Menu.css';
import Logo from './Logo.png';

export default class Menu extends Component {
  render() {
    return (
      <div className="all">
        <img alt="Logo" src={Logo} className={style.Logo} />
        <div className={style.Menu}>
          <div><a href="/index.html">Home</a></div>
          <div><a href="/bot.html">Linguisbit</a></div>
          <div><a href="/profile.html">My Profile</a></div>
        </div>
      </div>
    );
  }
}
