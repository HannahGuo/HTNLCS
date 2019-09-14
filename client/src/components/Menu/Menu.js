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
<<<<<<< HEAD:client/src/components/Menu/Menu.js
          <div><a href="/index.html">Home</a></div>
          <div><a href="/bot.html">Linguisbit</a></div>
          <div><a href="/profile.html">My Profile</a></div>
=======
          <div to="/index.html"><a href="/index.html" className={style.headerLink}>Home</a></div>
          <div to="/bot.html"><a href="/bot.html" className={style.headerLink}>Botlingual</a></div>
          <div to="/profile.html"><a href="/profile.html" className={style.headerLink}>My Profile</a></div>
>>>>>>> dcf9be66c510cdb6c99af2b1237f9429799bf03d:src/components/Menu/Menu.js
        </div>
      </div>
    );
  }
}
