"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Webshop API for Associate Degree in Computer Programming',
    version: '1.0.0'
  },
  servers: [{
    url: '/',
    description: 'Development server'
  }]
};
var swaggerOptions = {
  swaggerDefinition: swaggerDefinition,
  apis: ['./src/api/routes/*.js']
};
var swaggerSpec = (0, _swaggerJsdoc["default"])(swaggerOptions);
var _default = swaggerSpec;
exports["default"] = _default;