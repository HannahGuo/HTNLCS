/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import style from './Menu.css';
import Logo from './Logo.png';

export default class Menu extends Component {
  render() {
    return (
      <div className="all">
        <img alt="Logo" src={Logo} className={style.Logo} />
        <h1>Botlingual</h1>
        <div className={style.Menu}>
          <div to="/index.html"><a href="/index.html">Home</a></div>
          <div to="/bot.html"><a href="/bot.html">Botlingual</a></div>
          <div to="/profile.html"><a href="/profile.html">My Profile</a></div>
        </div>
      </div>
    );
  }
}