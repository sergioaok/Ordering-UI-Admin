"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InnerContnet = exports.OrderDashboardControlsContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 13px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 15px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OrderDashboardControlsContainer = _styledComponents.default.div(_templateObject());

exports.OrderDashboardControlsContainer = OrderDashboardControlsContainer;

var InnerContnet = _styledComponents.default.div(_templateObject2());

exports.InnerContnet = InnerContnet;