import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

export default function configureStore(rootReducer, initialState, history) {
  const middleware = routerMiddleware(history);

  const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  });

  try {
    const { createLogger } = require('redux-logger');
    var enhancers = applyMiddleware(middleware, thunk, createLogger({
      collapsed: true
    }));
  } catch (ex) {
    enhancers = applyMiddleware(middleware, thunk);
  }

  const store = createStore(
    combineReducers({
      ...rootReducer,
      router: routerReducer
    }),
    initialState || undefined,
    composeEnhancers(enhancers)
  );

  return store;
}
