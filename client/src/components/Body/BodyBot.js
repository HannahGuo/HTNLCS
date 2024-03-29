/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import style from './body.css';

export default class BodyBot extends Component {
  render() {
    return (
      <div className="all">
        <div className={style.hello}>
          <div data-tab="language" >
            <h2 style={{"textAlign": "center"}}>Choose a Language</h2>
            <div className={style.cards}>
              <div className={style.card} data-language="english">
                <h3>English</h3>
              </div>
              <div className={style.card} data-language="french">
                <h3>French</h3>
              </div>
              <div className={style.card} data-language="spanish">
                <h3>Spanish</h3>
              </div>
            </div>
          </div>

          <div data-tab="chat">
            <h2 data-key="language">English</h2> <span>Want to be evalulated on your linguistic skills? Type <i>/done</i></span>
            <div className={style.messageBox} id="chatBox"></div>
            <div className={style.chatBox}>
              <input className={style.chatBoxText} id="chatInput" data-key="input" placeholder="What do you want to say in English?" />
              <button className={style.chatBoxButton} id="sendChatButton">Send</button>
            </div>
          </div>
          <div className={style.modalBackground} data-modal="background" data-hidden></div>
          <div className={style.modal} data-modal="content" data-hidden>
            <span className={style.modalDelete} data-modal="delete">X</span>
            <h2>Modal Title</h2>
            <hr />
            <span>
                Good job! You scored <strong><span data-value="grade" style={{color: "green"}}></span>% out of 100%!</strong><br /><br />
                
                  <p><strong>Spelling Score:</strong> <span data-value="spelling" style={{color: "green"}}></span>%</p>
                  <p><strong>Word Usage:</strong> <span data-value="words" style={{color: "green"}}></span>%</p><br />
                
                  <p data-value="suggestions"></p>

                  <p>Did you know that you type an average of <strong><span data-value="wordAverage"></span> words per sentence?</strong></p>
                
            </span>
          </div>
        </div>
      </div>
    );
  }
}
