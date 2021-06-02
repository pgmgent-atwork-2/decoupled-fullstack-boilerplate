"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("babel-polyfill");

var _faker = _interopRequireDefault(require("faker"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _utils = require("../../utils");

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_index["default"].connect();

var GDMGENT_API_CASES = 'https://www.gdm.gent/static/data/cases.json';

var getProjects = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response, jsonData;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _nodeFetch["default"])("".concat(GDMGENT_API_CASES));

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            jsonData = _context.sent;
            return _context.abrupt("return", jsonData.map(function (project) {
              return {
                title: project.Title,
                description: project.Description,
                createdAt: Date.now(),
                updatedAt: Date.now()
              };
            }));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getProjects() {
    return _ref.apply(this, arguments);
  };
}();

var _default = {
  up: function () {
    var _up = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(queryInterface, Sequelize) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.t0 = queryInterface;
              _context2.t1 = _index["default"].Project.tableName;
              _context2.next = 4;
              return getProjects();

            case 4:
              _context2.t2 = _context2.sent;
              _context2.t3 = {};
              _context2.next = 8;
              return _context2.t0.bulkInsert.call(_context2.t0, _context2.t1, _context2.t2, _context2.t3);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function up(_x, _x2) {
      return _up.apply(this, arguments);
    }

    return up;
  }(),
  down: function () {
    var _down = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(queryInterface, Sequelize) {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return queryInterface.bulkDelete(_index["default"].Project.tableName, null, {});

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function down(_x3, _x4) {
      return _down.apply(this, arguments);
    }

    return down;
  }()
};
exports["default"] = _default;