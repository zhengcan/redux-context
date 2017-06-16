if (__DEV__) {
  module.exports = require('./createPage.dev');
} else {
  module.exports = require('./createPage.prod');
}
