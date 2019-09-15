/* eslint-disable linebreak-style */
import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    const lineStyle = {
      width: '90%',
    };
    return (
      <div>
        <hr style={lineStyle} />
        <br />
          Made with ❤️ using ReactJS, Node.js, Firebase (Realtime Database and Authentication) and
          Google Cloud Natural Language API
        <br />
        at Hack the North 2019 by Hannah Guo and William Qi.
        <br />
        <br />
      </div>
    );
  }
}
