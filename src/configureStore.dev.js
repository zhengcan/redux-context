import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import DevTools from './DevTools';

export default function configureStore(rootReducer, initialState, history) {
  const middleware = routerMiddleware(history);

  const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  });

  const store = createStore(
    combineReducers({
      ...rootReducer,
      router: routerReducer
    }),
    initialState || undefined,
    composeEnhancers(
      applyMiddleware(middleware, thunk, createLogger({
        collapsed: true
      }))
    )
  );

  return store;
}
