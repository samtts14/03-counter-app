import React from 'react';
import reactDom from 'react-dom';
import PrimeraApp from './PrimeraApp';
import'./index.css';

//const saludo =<h1>hola amiguitos</h1>;
const divRoot = document.querySelector('#root');

reactDom.render(<PrimeraApp/>, divRoot);

console.log(divRoot);