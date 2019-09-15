/* eslint-disable linebreak-style */
import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    const lineStyle = {
      width: '80vw',
      float: 'left',
    };
    return (
      <div>
        <hr style={lineStyle} />
        <br />
          Made with ❤️ using ReactJS, Node.js, Firebase (Realtime Database and Authentication),
          Google Cloud Natural Language API, and
        <br />
        EmailJS at Hack the North 2019 by Hannah Guo and William Qi.
        <br />
        <br />
      </div>
    );
  }
}
