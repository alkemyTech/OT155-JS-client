import React from 'react'
import ReactDOM from 'react-dom'
import 'flowbite';
import './index.css'
import App from './App'
import { Carousel } from './components/Carousel/Carousel';

ReactDOM.render(
  <React.StrictMode>
    <Carousel />
  </React.StrictMode>,
  document.getElementById('root')
)
