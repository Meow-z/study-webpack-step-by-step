import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import { Button } from 'antd';
import style from './style.css';

// style.className === "z849f98ca812"

class App extends Component {
  render() {
    console.log('ok1');
    console.log(style);
    return (<h1 className={style.font}>
            Hello,Webpack~~
            <Button type="primary">Button</Button>
        </h1>)
  }
}

render(<App/>, window.document.getElementById('root'));