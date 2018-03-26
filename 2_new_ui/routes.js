import React from 'react';
import HelloWorld from './pages/HelloWorld';
import HelpPage from './pages/HelpPage';
import I18nDemo from './pages/I18nDemo';

export const createRoutes = () => [
  {
    path: '/',
    component: HelloWorld,
    exact: true,
  },
  {
    path: '/help',
    component: HelpPage,
  },
  {
    path: '/i18nDemo',
    component: I18nDemo,
  }
];