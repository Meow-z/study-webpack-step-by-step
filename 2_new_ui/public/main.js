import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";
import { Button } from 'antd';
import HelpPage from '../pages/HelpPage';
import style from './style.css';

// style.className === "z849f98ca812"

class App extends Component {
  render() {
    return (<h1 className={style.font}>
            Hello,Webpack~~
            <Button type="primary">Button</Button>
        </h1>)
  }
}

class About extends Component {
  render() {
    return (<h1>About</h1>)
  }
}

// 路由配置说明（你不用加载整个配置，
// 只需加载一个你想要的根路由，
// 也可以延迟加载这个配置）。
render((
  <BrowserRouter>
    <div className="primary-layout">
      <header>Our React Router 4 App</header>
      <ul>
        <li>
          <Link to="/">App page</Link>
        </li>
        <li>
          <Link to="/about">About page</Link>
        </li>
        <li>
          <Link to="/help">Help page</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/about" component={About} />
        <Route path="/help" component={HelpPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  </BrowserRouter>
), window.document.getElementById('root'))

// render(<App/>, window.document.getElementById('root'));