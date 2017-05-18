'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Hello = require('./Hello');

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Hello).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];