"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HTTPError = exports.handleHTTPError = exports.generateValueBetweenMinAndMax = exports.convertArrayToPagedObject = void 0;

var convertArrayToPagedObject = function convertArrayToPagedObject(arr, itemsPerPage, currentPage, amount) {
  return {
    pageing: {
      itemsPerPage: parseInt(itemsPerPage, 10) || 10,
      currentPage: parseInt(currentPage, 10) || 1,
      totalPages: Math.ceil(amount / itemsPerPage),
      totalItems: amount
    },
    results: arr.slice((currentPage - 1) * itemsPerPage, (currentPage - 1) * itemsPerPage + itemsPerPage)
  };
};

exports.convertArrayToPagedObject = convertArrayToPagedObject;

var handleHTTPError = function handleHTTPError(error, next) {
  return next(error);
};

exports.handleHTTPError = handleHTTPError;

var HTTPError = function HTTPError(message, statusCode) {
  var instance = new Error(message);
  instance.statusCode = statusCode;
  return instance;
};
/*
* Generate Integer between min and max
*/


exports.HTTPError = HTTPError;

var generateValueBetweenMinAndMax = function generateValueBetweenMinAndMax(min, max) {
  return min + Math.round(Math.random() * (max - min));
};

exports.generateValueBetweenMinAndMax = generateValueBetweenMinAndMax;