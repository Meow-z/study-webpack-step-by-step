import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
// import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";
import { Button } from 'antd';
import style from './style.css';

export default class App extends Component {
  render() {
    return (<h1 className={style.font}>
            Hello,Webpack~~
            <Button type="primary">Button</Button>
        </h1>)
  }
}