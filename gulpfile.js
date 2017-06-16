var gulp = require('gulp');
var registerTasks = require('gulp-predefined-tasks');

var options = {
  type: 'lib',
  webpack: {
    watchConfig: {
      entry: {
        index: './example/index'
      }
    },
    devServer: {
      contentBase: [
        './example',
        './src',
        './node_modules',
      ],
    }
  }
};
registerTasks(gulp, options);
