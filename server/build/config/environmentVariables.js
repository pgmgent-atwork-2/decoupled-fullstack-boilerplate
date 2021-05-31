"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JWT_SECRET_KEY = exports.PORT = exports.HOSTNAME = exports.NODE_ENV = void 0;

require("dotenv/config");

var NODE_ENV = process.env.NODE_ENV || 'development';
exports.NODE_ENV = NODE_ENV;
var HOSTNAME = process.env.HOSTNAME || 'localhost';
exports.HOSTNAME = HOSTNAME;
var PORT = process.env.PORT || 8080; // Port >= 0 and < 65536

exports.PORT = PORT;
var JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || '1pgm_atwork-2';
exports.JWT_SECRET_KEY = JWT_SECRET_KEY;