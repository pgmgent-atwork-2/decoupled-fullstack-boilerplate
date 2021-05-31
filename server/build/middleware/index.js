"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "morganMiddleware", {
  enumerable: true,
  get: function get() {
    return _morgan["default"];
  }
});
Object.defineProperty(exports, "jwtStrategy", {
  enumerable: true,
  get: function get() {
    return _passport.jwtStrategy;
  }
});
Object.defineProperty(exports, "swaggerSpec", {
  enumerable: true,
  get: function get() {
    return _swagger["default"];
  }
});

var _morgan = _interopRequireDefault(require("./morgan.middleware"));

var _passport = require("./passport.middleware");

var _swagger = _interopRequireDefault(require("./swagger.middleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }