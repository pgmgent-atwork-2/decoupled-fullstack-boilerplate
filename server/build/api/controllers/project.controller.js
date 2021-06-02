"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProjects = exports.getProjectById = void 0;

var _utils = require("../../utils");

var _database = _interopRequireDefault(require("../../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*
Get all projects
*/
var getProjects = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var projects;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _database["default"].Project.findAll();

          case 3:
            projects = _context.sent;

            if (!(!projects || projects.length === 0)) {
              _context.next = 6;
              break;
            }

            throw new _utils.HTTPError("Could not found projects!", 404);

          case 6:
            // Send response
            res.status(200).json(projects);
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            (0, _utils.handleHTTPError)(_context.t0, next);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function getProjects(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
/*
Get a specific project
*/


exports.getProjects = getProjects;

var getProjectById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var projectId, project;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            // Get projectId parameter
            projectId = req.params.projectId; // Get specific project from database

            _context2.next = 4;
            return _database["default"].Project.findAll({
              where: {
                id: projectId
              }
            });

          case 4:
            project = _context2.sent;
            // Send response
            res.status(200).json(project);
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            (0, _utils.handleHTTPError)(_context2.t0, next);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function getProjectById(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getProjectById = getProjectById;