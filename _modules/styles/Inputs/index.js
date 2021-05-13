"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RectTextArea = exports.InputGroupPrimary = exports.InputSecundary = exports.InputPrimary = exports.InputGroupRight = exports.InputGroupLeft = exports.InputGroup = exports.RectangleInput = exports.Input = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _Buttons = require("../Buttons");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n    width: 20%;\n  "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  background: #FFF;\n  color: #010300;\n  border: 1px solid #707070;\n  border-radius: 5px;\n  font-size: 16px;\n  padding: 7px 15px;\n  outline: none;\n  resize: none;\n  margin-bottom: 20px;\n  &:focus {\n    border-color: ", ";\n  }\n  ", "\n  &::placeholder,\n  &::-webkit-input-placeholder {\n    color: #DBDCDB;\n  }\n  &:-ms-input-placeholder {\n    color: #DBDCDB;\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  & > ", " {\n    color: ", ";\n    border-color: ", ";\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  background: #FFF;\n  color: ", ";\n  border-color: ", ";\n\n  &:focus {\n    border-color: ", ";\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  background: #FFF;\n  color: ", ";\n  border-color: ", ";\n\n  &:focus {\n    border-color: ", ";\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n        margin-left: -7px;\n        margin-right: 0\n    "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n        border-left-width: 1px;\n        border-right-width: 0;\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 0 34px 34px 0;\n  line-height: 34px;\n  border-right-width: 1px;\n  border-left-width: 0;\n\n  ", "\n\n  & ", " {\n    margin-left: 0;\n    margin-right: -7px;\n    ", "\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n        margin-right: -7px;\n        margin-left: 0\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n        border-left-width: 0;\n        border-right-width: initial;\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 34px 0 0 34px;\n  line-height: 34px;\n  padding-left: 7px;\n  padding-right: 7px;\n  font-size: 16px;\n  border-width: 1px;\n  height: 34px;\n  border-style: solid;\n  border-right-width: 0;\n  ", "\n\n  & ", " {\n    margin-left: -7px;\n    ", "\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n\n  & > ", ":not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    border-left: 0;\n    padding-left: 0;\n  }\n\n  & > ", ":not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    border-right: 0;\n    padding-right: 0;\n  }\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 5px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: 20%;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: #FFF;\n  color: #707070;\n  border: 1px solid #707070;\n  border-radius: 30px;\n  font-size: 16px;\n  padding: 7px 15px;\n  outline: none;\n\n  &:focus {\n    border-color: ", ";\n  }\n\n  ", "\n\n  &::placeholder,\n  &::-webkit-input-placeholder {\n    color: #959595;\n  }\n  &:-ms-input-placeholder {\n    color: #959595;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Input = _styledComponents.default.input(_templateObject(), function () {
  return (0, _polished.darken)(0.07, '#CCC');
}, function (_ref) {
  var w = _ref.w;
  return w && (0, _styledComponents.css)(_templateObject2());
});

exports.Input = Input;
var RectangleInput = (0, _styledComponents.default)(Input)(_templateObject3());
exports.RectangleInput = RectangleInput;

var InputGroup = _styledComponents.default.div(_templateObject4(), Input, Input);

exports.InputGroup = InputGroup;

var InputGroupLeft = _styledComponents.default.div(_templateObject5(), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject6());
}, _Buttons.Button, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject7());
});

exports.InputGroupLeft = InputGroupLeft;
var InputGroupRight = (0, _styledComponents.default)(InputGroupLeft)(_templateObject8(), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject9());
}, _Buttons.Button, function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject10());
});
exports.InputGroupRight = InputGroupRight;
var InputPrimary = (0, _styledComponents.default)(Input)(_templateObject11(), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return (0, _polished.darken)(0.1, props.theme.colors.primary);
});
exports.InputPrimary = InputPrimary;
var InputSecundary = (0, _styledComponents.default)(Input)(_templateObject12(), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return (0, _polished.darken)(0.1, props.theme.colors.secundary);
});
exports.InputSecundary = InputSecundary;
var InputGroupPrimary = (0, _styledComponents.default)(InputGroup)(_templateObject13(), InputGroupLeft, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});
exports.InputGroupPrimary = InputGroupPrimary;

var RectTextArea = _styledComponents.default.textarea(_templateObject14(), function () {
  return (0, _polished.darken)(0.07, '#CCC');
}, function (_ref2) {
  var w = _ref2.w;
  return w && (0, _styledComponents.css)(_templateObject15());
});

exports.RectTextArea = RectTextArea;