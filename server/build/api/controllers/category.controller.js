"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCategory = exports.getCategories = exports.getCategoryById = exports.deleteCategory = exports.createCategory = void 0;

var _utils = require("../../utils");

var _database = _interopRequireDefault(require("../../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*
Get all categories
*/
var getCategories = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$query, itemsPerPage, currentPage, categories;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            // Get query parameters
            _req$query = req.query, itemsPerPage = _req$query.itemsPerPage, currentPage = _req$query.currentPage; // Get categories from database

            categories = null;

            if (!(itemsPerPage && currentPage)) {
              _context.next = 17;
              break;
            }

            _context.next = 6;
            return _database["default"].Category.findAll({
              offset: (currentPage - 1) * itemsPerPage,
              limit: itemsPerPage
            });

          case 6:
            categories = _context.sent;
            _context.t0 = _utils.convertArrayToPagedObject;
            _context.t1 = categories;
            _context.t2 = itemsPerPage;
            _context.t3 = currentPage;
            _context.next = 13;
            return _database["default"].Category.count();

          case 13:
            _context.t4 = _context.sent;
            categories = (0, _context.t0)(_context.t1, _context.t2, _context.t3, _context.t4);
            _context.next = 20;
            break;

          case 17:
            _context.next = 19;
            return _database["default"].Category.findAll();

          case 19:
            categories = _context.sent;

          case 20:
            // Send response
            res.status(200).json(categories);
            _context.next = 26;
            break;

          case 23:
            _context.prev = 23;
            _context.t5 = _context["catch"](0);
            (0, _utils.handleHTTPError)(_context.t5, next);

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 23]]);
  }));

  return function getCategories(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
/*
Get a specific category
*/


exports.getCategories = getCategories;

var getCategoryById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var categoryId, category;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            // Get categoryId parameter
            categoryId = req.params.categoryId; // Get specific category from database

            _context2.next = 4;
            return _database["default"].Category.findByPk(categoryId);

          case 4:
            category = _context2.sent;

            if (!(category === null)) {
              _context2.next = 7;
              break;
            }

            throw new _utils.HTTPError("Could not found the category with id ".concat(categoryId, "!"), 404);

          case 7:
            // Send response
            res.status(200).json(category);
            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            (0, _utils.handleHTTPError)(_context2.t0, next);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 10]]);
  }));

  return function getCategoryById(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
/*
Create a new category
*/


exports.getCategoryById = getCategoryById;

var createCategory = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var model, createdModel;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            // Get body from response
            model = req.body; // Create a post

            _context3.next = 4;
            return _database["default"].Category.create(model);

          case 4:
            createdModel = _context3.sent;
            // Send response
            res.status(201).json(createdModel);
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            (0, _utils.handleHTTPError)(_context3.t0, next);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function createCategory(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
/*
Update an exisiting category
*/


exports.createCategory = createCategory;

var updateCategory = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var categoryId, category, model, updatedPost;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            // Get categoryId parameter
            categoryId = req.params.categoryId;
            console.log(categoryId); // Get specific category from database

            _context4.next = 5;
            return _database["default"].Category.findByPk(categoryId);

          case 5:
            category = _context4.sent;

            if (!(category === null)) {
              _context4.next = 8;
              break;
            }

            throw new _utils.HTTPError("Could not found the category with id ".concat(categoryId, "!"), 404);

          case 8:
            // Update a specific post
            model = req.body;
            _context4.next = 11;
            return _database["default"].Category.update(model, {
              where: {
                id: categoryId
              }
            });

          case 11:
            updatedPost = _context4.sent;
            // Send response
            res.status(200).json(updatedPost);
            _context4.next = 18;
            break;

          case 15:
            _context4.prev = 15;
            _context4.t0 = _context4["catch"](0);
            (0, _utils.handleHTTPError)(_context4.t0, next);

          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 15]]);
  }));

  return function updateCategory(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();
/*
Delete an exisiting category
*/


exports.updateCategory = updateCategory;

var deleteCategory = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
    var categoryId, category, message;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            // Get categoryId parameter
            categoryId = req.params.categoryId; // Get specific category from database

            _context5.next = 4;
            return _database["default"].Category.findByPk(categoryId);

          case 4:
            category = _context5.sent;

            if (!(category === null)) {
              _context5.next = 7;
              break;
            }

            throw new _utils.HTTPError("Could not found the category with id ".concat(categoryId, "!"), 404);

          case 7:
            _context5.next = 9;
            return _database["default"].Category.destroy({
              where: {
                id: categoryId
              }
            });

          case 9:
            message = _context5.sent;
            // Send response
            res.status(200).json(message);
            _context5.next = 16;
            break;

          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](0);
            (0, _utils.handleHTTPError)(_context5.t0, next);

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 13]]);
  }));

  return function deleteCategory(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteCategory = deleteCategory;