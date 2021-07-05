"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperMap = exports.TypeSelectWrapper = exports.FieldName = exports.BasicContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      left: 10px;\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      right: 10px;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 300px;\n  display: flex;\n  justify-content: center;\n  box-sizing: border-box;\n  margin: 20px 0;\n  position: relative;\n  > div {\n    position: relative !important; \n    width: 100% !important;\n    height: 100% !important;\n    border-radius: 8px;\n  }\n\n  > button {\n    position: absolute;\n    font-size: 14px;\n    padding: 0 5px;\n    background: #FFF;\n    top: 10px;\n    z-index: 10;\n    border: none;\n    box-shadow: rgb(0 0 0 / 30%) 0px 1px 4px;\n    color: ", ";\n    ", "\n    &:hover {\n      background: #eee;\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  > div {\n    background: #F8F9FA;\n    min-width: 50%;\n    border: 1px solid ", ";\n    div {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  padding-top: 20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100% - 90px);\n\n  > input {\n    color: ", ";\n  }\n\n  > button {\n    width: fit-content;\n    position: sticky;\n    top: 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BasicContainer = _styledComponents.default.div(_templateObject(), function (props) {
  return props.theme.colors.headingColor;
});

exports.BasicContainer = BasicContainer;

var FieldName = _styledComponents.default.p(_templateObject2(), function (props) {
  return props.theme.colors.headingColor;
});

exports.FieldName = FieldName;

var TypeSelectWrapper = _styledComponents.default.div(_templateObject3(), function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.headingColor;
});

exports.TypeSelectWrapper = TypeSelectWrapper;

var WrapperMap = _styledComponents.default.div(_templateObject4(), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) ? (0, _styledComponents.css)(_templateObject5()) : (0, _styledComponents.css)(_templateObject6());
});

exports.WrapperMap = WrapperMap;