"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _chalk = _interopRequireDefault(require("chalk"));

var _moment = _interopRequireDefault(require("moment"));

var _morgan = _interopRequireDefault(require("morgan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
Morgan
https://www.npmjs.com/package/morgan
*/
var morganMiddleware = (0, _morgan["default"])(function (tokens, req, res) {
  return [_chalk["default"].hex('#ffffff').bold("".concat((0, _moment["default"])(tokens.date(req, res)).format('YYYY-MM-DD hh:mm:ss'))), _chalk["default"].hex('#34ace0').bold("[".concat(tokens.method(req, res), "]")), ':\t', _chalk["default"].hex('#ff5252').bold("[".concat(tokens.url(req, res), "]")), _chalk["default"].hex('#f78fb3').bold("[".concat(tokens.status(req, res), "]")), _chalk["default"].hex('#fffff').bold("".concat(tokens['response-time'](req, res), "ms")), _chalk["default"].hex('#fffff').bold(tokens['remote-addr'](req, res)), ''].join(' ');
});
var _default = morganMiddleware;
exports["default"] = _default;