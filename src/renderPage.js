if (__DEV__) {
  module.exports = require('./renderPage.dev');
} else {
  module.exports = require('./renderPage.prod');
}
