/* eslint-disable linebreak-style */
import React from 'react';
import ReactDOM from 'react-dom';
import Menu from 'components/Menu/Menu';
import BodyHome from 'components/Body/BodyHome';
import Footer from 'components/Footer/Footer';

ReactDOM.render(<Menu />, document.getElementById('menu'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
ReactDOM.render(<BodyHome />, document.getElementById('body'));
