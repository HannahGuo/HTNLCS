/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import style from './body.css';

export default class BodyBot extends Component {
  render() {
    return (
      <div className="all">
        <div className={style.hello}>
          <div className={style.messageBox}></div>
          <div className={style.chatBox}>
            <input className={style.chatBoxText} id="chatInput" />
            <button className={style.chatBoxButton} id="sendChatButton">Send</button>
          </div>
        </div>
      </div>
    );
  }
}
