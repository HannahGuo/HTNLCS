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
          Made with ❤️ at Hack the North 2019 by Hannah Guo and William Qi.
        <br />
        <br />
      </div>
    );
  }
}
