/* eslint-disable linebreak-style */
import React from 'react';
import ReactDOM from 'react-dom';
import Menu from 'components/Menu/Menu';
import BodyBot from '../components/Body/BodyBot';
import Footer from '../components/Footer/Footer';

ReactDOM.render(<Menu />, document.getElementById('menu'));
ReactDOM.render(<BodyBot />, document.getElementById('body'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
