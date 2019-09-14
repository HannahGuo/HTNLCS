/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import style from './body.css';

export default class BodyHome extends Component {
  render() {
    return (
      <div className={style.all}>
        <div className={style.hello}>
          <h2>Welcome to Botlingual</h2>
          <br />
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
          <h3>Botlingual!</h3>
          <br />
          <br />
          <hr />
          <br />
          Made with ❤️ using ReactJS at Hack the North 2019 by Hannah Guo and William Qi.
          <br />
          <br />
        </div>
      </div>
    );
  }
}
