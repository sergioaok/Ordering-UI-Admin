"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperDescription = exports.WrapperShortDescription = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 25px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  label {\n    color: ", ";\n    font-size: 14px;\n    margin-bottom: 5px;\n  }\n  input,\n  textarea {\n    color: ", ";\n    width: 100%;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  min-height: calc(100% - 130px);\n  > button {\n    position: sticky;\n    top: 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject());

exports.Container = Container;

var WrapperShortDescription = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.headingColor;
});

exports.WrapperShortDescription = WrapperShortDescription;
var WrapperDescription = (0, _styledComponents.default)(WrapperShortDescription)(_templateObject3());
exports.WrapperDescription = WrapperDescription;