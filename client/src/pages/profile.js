/* eslint-disable linebreak-style */
import React from 'react';
import ReactDOM from 'react-dom';
import Menu from 'components/Menu/Menu';
import BodyProfile from 'components/Body/BodyProfile';
import Footer from 'components/Footer/Footer';

ReactDOM.render(<Menu />, document.getElementById('menu'));
ReactDOM.render(<BodyProfile />, document.getElementById('body'));