import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import * as style from './style.css';

class Button extends Component {
  render() {
    return (<h1 className={style.font}>
            Hello,Webpack~~~~
        </h1>)
  }
}

render(<Button/>, window.document.getElementById('root'));