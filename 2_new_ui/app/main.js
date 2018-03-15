import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import * as style from './style.css';

// style.className === "z849f98ca812"

class Button extends Component {
  render() {
    return (<h1 className={style.font}>
            Hello,Webpack~~
        </h1>)
  }
}

render(<Button/>, window.document.getElementById('root'));