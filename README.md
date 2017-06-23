# redux-context

A redux delegate object used to create store, render page, and integrate React-Router and more.

[![Travis][build-badge]][build]
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]

## Motivate

It's really popular to integrate [React][react] with [React-Router][react-router], [Redux][redux] and related development tools.

Most likely, we'll need install the following packages:

```js
  yarn add react
  yarn add react-dom
  yarn add react-redux
  yarn add react-router
  yarn add react-router-dom
  yarn add react-router-redux
  yarn add redux
  yarn add redux-thunk
  yarn add -D react-hot-loader
  yarn add -D redux-devtools
  yarn add -D redux-devtools-dock-monitor
  yarn add -D redux-devtools-log-monitor
  yarn add -D redux-logger
```

And do a lot of work to integrate them well. It's so boring and complicated for me, especially there are several React projects need to be maintained.

This package extracts these works from my project, and provides a better API to accomplish all related works. 

## Installation

In your React app, install the following packages:

```js
  yarn add react
  yarn add react-dom
  yarn add redux-context
  yarn add -D react-hot-loader
  yarn add -D redux-devtools-extension
  yarn add -D redux-logger
```

### Why `redux-devtools-extension`?

`redux-devtools-extension` is built on the top of `redux-devtools`, and integrates several useful tools.

### Why `redux-logger`?

`redux-logger` will print the information of dispatched action of Redux. You may remove it if you don't like it.

## User Guide

In entry JavaScript, we could use `redux-context` to create [history][history] which is used by React-Router, initial Redux store, and render React component to DOM element.

```js
  import React from 'react';
  import ReduxContext from 'redux-context';
  import MyApp from './MyApp';
  import reducers from './reducers';

  let domElement = document.getElementById('page');
  let context = ReduxContext
    .forDOM(domElement)
    .configureStore(reducers)
    .render(MyApp);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      context.replaceReducer(require('./reducers').default);
    });
    module.hot.accept('./MyApp', () => {
      context.render(MyApp);
    });
  }
```

### API References

#### forDOM(domElement)

- If `domElement` is a DOM `Element` object, it will be used directly.
- If `domElement` is `String` object, it will be used to find the Element via `document.querySelector()`.
- If `domElement` is omitted, `redux-context` will try to find DOM Element which id is `page` or `root`. 

If a valid `domElement` is existed, `redux-context` will extract `data-*` attributes from it, and merge them with `window.pageProps`.
```js
  let defaultProps = Object.assign({}, dataAttrs, window.pageProps)
```

The `defaultProps` will be send to `ReactElement` which is used in `render()` as props.

#### createHistory(creator)

- `creator` is a callback function, used to create `history` object. It will receive `defaultProps` as argument.

In fact, there is no need to call `createHistory()` manually. `redux-context` will create a `browserHistory` for you as default.

#### configureStore(reducers, initialState = undefined)

- `reducers` is a plain object, which contains several reducer functions
- `initialState` is optional

#### render(ReactElement, props = undefined)

- `ReactElement` is a class or instance of React Component
- `props` will be merged with `defaultProps`, and inject `store` and `history`

#### replaceReducer(reducers)

- `reducers` is a plain object, which contains several reducer functions

### React Component tree

As result, `redux-context` will generate different following React Component trees for production mode and development mode. 

#### Production mode

```html
  <withRedux>
    <Provider>
      <ConnectedRouter>
        <Router>
          <MyApp />
        </Router>
      </ConnectedRouter>
    </Provider>
  </withRedux>
```

#### Development mode

```html
  <AppContainer>
    <withRedux>
      <Provider>
        <ConnectedRouter>
          <Router>
            <MyApp />
          </Router>
        </ConnectedRouter>
      </Provider>
    </withRedux>
  </AppContainer>
```

### Redux DevTools (and Extensions)

- For Chrome
	- from [Chrome Web Store](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
- For FireFox
	- from [Mozilla Add-ons](https://addons.mozilla.org/en-US/firefox/addon/remotedev/)

For more information, you may check the page of [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension#installation).

[build-badge]: https://travis-ci.org/zhengcan/redux-context.svg?branch=master
[build]: https://travis-ci.org/zhengcan/redux-context
[downloads-image]: https://img.shields.io/npm/dm/redux-context.svg
[npm-image]: https://img.shields.io/npm/v/redux-context.svg
[npm-url]: https://www.npmjs.com/package/redux-context
[react]: https://github.com/facebook/react
[react-router]: https://github.com/ReactTraining/react-router
[redux]: https://github.com/reactjs/redux
[history]: https://github.com/reacttraining/history

