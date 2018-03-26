import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Redirect, Switch, Router } from "react-router-dom";
import { Provider } from 'react-redux';
// import { browserHistory } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
// import { Button, LocaleProvider } from 'antd';
import { LocaleProvider } from 'antd';
// ant-design 组件文案的国际化 https://ant.design/components/locale-provider-cn/
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import createHistory from 'history/createBrowserHistory';
import history from './history';
import { createRoutes } from './routes';
import configureStore from './store';
import style from './public/style.css';

// const history = createHistory();
export const store = configureStore(history, {});
const routes = createRoutes(store);

// export class App extends Component {
//   render() {
//     return (<h1 className={style.font}>
//             Hello,Webpack~~
//             <Button type="primary">Button</Button>
//         </h1>)
//   }
// }

// export class About extends Component {
//   render() {
//     return (<h1>About</h1>)
//   }
// }

// 路由配置说明（你不用加载整个配置，
// 只需加载一个你想要的根路由，
// 也可以延迟加载这个配置）。
// <Provider store={store}>
// <ConnectedRouter history={history}>
// <LocaleProvider locale={zh_CN}>
// <BrowserRouter>
ReactDOM.render((
  <Provider store={store}>
  <LocaleProvider locale={zh_CN}>
    <ConnectedRouter history={history}>
        <div>
          <header>Our React Router 4 App</header>
          <ul>
            <li>
              <Link to="/">App page</Link>
            </li>
            <li>
              <Link to="/help">Help page</Link>
            </li>
            <li>
              <Link to="/i18nDemo">i18nDemo</Link>
            </li>
          </ul>
          <Switch>
            {routes.map(r => <Route key={r.path} {...r} />)}
            <Redirect to="/" />
          </Switch>
        </div>
    </ConnectedRouter>
  </LocaleProvider>
  </Provider>
), window.document.getElementById('root'));

// render(<App/>, window.document.getElementById('root'));