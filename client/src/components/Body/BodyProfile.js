/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import style from './body.css';

export default class BodyProfile extends Component {
  render() {
    return (
      <div className="all">
        <div className={style.hello}>
          <h1>Welcome to LCS...</h1>
          <span>
            A conversational tool that allows you to practice speaking different
            languages, while also tracking statistics of your conversation in order to help you
            improve.
            <br />
            <br />
            Simply access the Linguisbit tab in the menu above to begin chatting with the bot.
            <br />
            <br />
            The My Profile Section in the menu above will allow you view all of your past
            conversations.
          </span>
          <br />
          <br />
          <h2>Happy Langauge Practicing!</h2>
          <br />
          <br />
          Made with ❤️ using ReactJS at Hack the North 2019 by Hannah Guo and William Qi.
        </div>
      </div>
    );
  }
}
