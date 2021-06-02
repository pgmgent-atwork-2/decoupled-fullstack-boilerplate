"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var databaseConfig = {
  "development": {
    "dialect": "sqlite",
    "storage": "./src/data/agency.sqlite3"
  },
  "test": {
    "dialect": "sqlite",
    "storage": ":memory"
  },
  "production": {
    "dialect": "sqlite",
    "storage": "./src/data/agency.sqlite3"
  }
};
var _default = databaseConfig;
exports["default"] = _default;