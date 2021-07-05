"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapItemView = exports.OrdersContent = exports.DeliveriesContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  transition: all 0.5s;\n  padding: 0 20px 20px 20px;\n  box-sizing: border-box;\n  margin-top: 60px;\n\n  @media (min-width: 760px) {\n    margin-top: 0px;\n    padding: 20px;\n  }\n\n  @media print {\n    display: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DeliveriesContainer = _styledComponents.default.div(_templateObject());

exports.DeliveriesContainer = DeliveriesContainer;

var OrdersContent = _styledComponents.default.div(_templateObject2());

exports.OrdersContent = OrdersContent;

var WrapItemView = _styledComponents.default.div(_templateObject3());

exports.WrapItemView = WrapItemView;