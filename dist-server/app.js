"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _index = _interopRequireDefault(require("./routes/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// app.js
var app = (0, _express["default"])();
app.use(_bodyParser["default"].json({
  limit: '50mb',
  extended: true
}));
app.use(_bodyParser["default"].urlencoded({
  limit: '50mb',
  extended: true
}));
app.listen(3010, function () {
  return console.log('listening on port 3010');
});
app.use("/", _index["default"]);
var _default = app;
exports["default"] = _default;