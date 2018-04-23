import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/home.js';
// import Playlist from '../playlist/components/playlist';
import data from '../api.json';

const homeContainer = document.getElementById('home-container');

ReactDOM.render(
    <Home data={data}/>, homeContainer);

