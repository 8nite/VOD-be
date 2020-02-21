"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _requestPromise = _interopRequireDefault(require("request-promise"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();
/* GET home page. */


router.get('/', function (req, res, next) {
  var options = {
    uri: 'https://accedo-ps-programming-exam.s3-ap-southeast-1.amazonaws.com/movies.json',
    headers: {
      "Content-Type": "application/json"
    },
    json: true
  };
  (0, _requestPromise["default"])(options).then(function ($) {
    if (req.query.filter && req.query.filter !== '' && req.query.filter !== 'null') {
      var filterList = $.entries.filter(function (entry) {
        return entry.categories.some(function (category) {
          return category.id === req.query.filter;
        });
      });
      res.send({
        entries: filterList
      });
    } else res.send($);
  });
});
var _default = router;
exports["default"] = _default;