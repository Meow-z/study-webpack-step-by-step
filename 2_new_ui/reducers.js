import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import I18nDemo from './pages/I18nDemo/reducer';

export default asyncReducers =>
  combineReducers({
    I18nDemo,
    routing: routerReducer,
    ...asyncReducers,
  });
