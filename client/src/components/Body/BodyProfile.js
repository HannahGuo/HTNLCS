/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import style from './body.css';

export default class BodyProfile extends Component {
  render() {
    return (
      <div className={style.all}>
        <div className={style.hello}>
          <h2>Welcome to Your Profile</h2>
          <br />
          <span>
            On this page, you can view all the stats of your past learning sessions!
          </span>
          <br />
          <br />
        </div>
      </div>
    );
  }
}
