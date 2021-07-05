"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StripeConnectButton = exports.InputWrapper = exports.InputGroup = exports.CloseButton = exports.Header = exports.FieldName = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n        margin-left: 15px;\n      "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n        margin-right: 15px;\n      "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  border: none;\n  outline: none;\n  cursor: pointer;\n  background: #D4F2FF;\n  border-radius: 7.6px;\n  color: #27BCFD;\n  width: fit-content;\n  padding: 7px 15px;\n  display: flex;\n  align-items: center;\n\n  &:active {\n    background: #258cb9;\n    color: #FFF;\n    span {\n      &:first-child {\n        background: #FFF;\n        svg {\n          color: #27BCFD;\n        }\n      }\n    }\n  }\n\n  span {\n    &:first-child {\n      background: #27BCFD;\n      padding: 2px;\n      border-radius: 5px;\n      svg {\n        font-size: 20px;\n        color: #FFF;\n      }\n    }\n    &:last-child {\n      ", "\n    }\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  width: 48%;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n        margin-left: 10px;\n      "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n        margin-right: 10px;\n      "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n  @media (min-width: 1000px) {\n    display: flex;\n    align-items: center;\n    > svg {\n      cursor: pointer;\n      font-size: 24px;\n      color: ", ";\n      ", "\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  h1 {\n    font-size: 24px;\n    color: ", ";\n    font-weight: 600;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  margin: 30px 0 10px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      border-left: 1px solid #E9ECEF;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      border-right: 1px solid #E9ECEF;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 20px;\n  overflow: auto;\n  transition: 0.3s;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n\n  > button:last-child {\n    margin-top: 20px;\n    position: sticky;\n    top: 100%;\n    width: fit-content;\n    height: 42px;\n    margin-bottom: 20px;\n  }\n\n  > input {\n    background: ", ";\n  }\n\n  @media (min-width: 1000px) {\n    width: 0;\n    ", "\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject(), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) ? (0, _styledComponents.css)(_templateObject2()) : (0, _styledComponents.css)(_templateObject3());
});

exports.Container = Container;

var FieldName = _styledComponents.default.p(_templateObject4(), function (props) {
  return props.theme.colors.headingColor;
});

exports.FieldName = FieldName;

var Header = _styledComponents.default.div(_templateObject5(), function (props) {
  return props.theme.colors.headingColor;
});

exports.Header = Header;

var CloseButton = _styledComponents.default.div(_templateObject6(), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) ? (0, _styledComponents.css)(_templateObject7()) : (0, _styledComponents.css)(_templateObject8());
});

exports.CloseButton = CloseButton;

var InputGroup = _styledComponents.default.div(_templateObject9());

exports.InputGroup = InputGroup;

var InputWrapper = _styledComponents.default.div(_templateObject10());

exports.InputWrapper = InputWrapper;

var StripeConnectButton = _styledComponents.default.button(_templateObject11(), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) ? (0, _styledComponents.css)(_templateObject12()) : (0, _styledComponents.css)(_templateObject13());
});

exports.StripeConnectButton = StripeConnectButton;