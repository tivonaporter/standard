try {
  var env = require('./env.js')
  env();
} catch(e) {}

var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });