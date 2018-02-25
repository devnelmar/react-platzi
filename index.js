import React from 'react';
import ReactDOM from 'react-dom';
import Media from './src/playlist/components/media';

const app = document.getElementById('app');

const holaMundo = <h1>holamundo!</h1>;

ReactDOM.render(
    <Media title='Que es responsive design'
           author='Nelson Martinez'
           image='/images/covers/responsive.jpg'
    />, app);

