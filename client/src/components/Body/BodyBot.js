/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import style from './body.css';

export default class BodyBot extends Component {
  render() {
    return (
      <div className="all">
        <div className={style.hello}>
          <h2>English</h2> <span>Want to be evalulated on your linguistic skills? Type <i>/done</i></span>
          <div className={style.messageBox} id="chatBox"></div>
          <div className={style.chatBox}>
            <input className={style.chatBoxText} id="chatInput" placeholder="What do you want to say in English?" />
            <button className={style.chatBoxButton} id="sendChatButton">Send</button>
          </div>
        </div>
      </div>
    );
  }
}
