"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _sequelize = require("sequelize");

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var basename = _path["default"].basename(__filename);

var sequelize = new _sequelize.Sequelize(_objectSpread(_objectSpread({}, _config.databaseConfig[_config.EnvironmentVariables.NODE_ENV]), {}, {
  logging: _config.EnvironmentVariables.NODE_ENV === 'development' ? console.log : false
}));
var database = {};
database.connect = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          database.sequelize = sequelize;
          database.Sequelize = _sequelize.Sequelize;

          _fs["default"].readdirSync(_path["default"].join(__dirname, '..', 'models')).filter(function (file) {
            return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
          }).forEach(function (file) {
            // eslint-disable-next-line global-require,import/no-dynamic-require
            var model = require(_path["default"].join(__dirname, '..', 'models', file))["default"](sequelize, _sequelize.Sequelize.DataTypes);

            database[model.name] = model;
          });

          Object.keys(database).forEach(function (modelName) {
            if (database[modelName].associate) {
              database[modelName].associate(database);
            }
          }); // Sync all models with the database

          _context.next = 6;
          return database.sequelize.sync();

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
var _default = database;
exports["default"] = _default;