/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import style from './body.css';

export default class BodyHome extends Component {
  render() {
    return (
      <div className={style.all}>
        <div className={style.hello}>
          <br />
          <span>
            A conversational tool that lets you practice different
            languages while tracking statistics of your conversation to help you
            improve.
            <br />
            <br />
            Access the <strong>Botlingual Chat</strong> to chat with the bot,
            and check <strong>My Profile</strong> to view your past conversations,
            and track your progress!
          </span>
          <br />
          <br />
        </div>
      </div>
    );
  }
}
