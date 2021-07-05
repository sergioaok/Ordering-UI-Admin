"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spinner = exports.Content = exports.Logo = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  @keyframes spinner-content {\n    0% { transform: rotate(0) }\n    100% { transform: rotate(360deg) }\n  }\n\n  .spinner-content div {\n    box-sizing: border-box!important\n  }\n\n  .spinner-content > div {\n    width: 108px;\n    height: 108px;\n    border-radius: 50%;\n    border: 8px solid #000;\n    border-color: ", ";\n    animation: spinner-content 1.8518518518518516s linear infinite;\n  }\n\n  .spinner-content > div:nth-child(2) { border-color: transparent }\n  .spinner-content > div:nth-child(2) div {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    transform: rotate(45deg);\n  }\n\n  .spinner-content > div:nth-child(2) div:before,\n  .spinner-content > div:nth-child(2) div:after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    top: -8px;\n    left: 42px;\n    background: ", ";\n    border-radius: 50%;\n    box-shadow: 0 100px 0 0 ", ";\n  }\n\n  .spinner-content > div:nth-child(2) div:after {\n    left: -8px;\n    top: 42px;\n    box-shadow: 100px 0 0 0 ", ";\n  }\n\n  .spinner {\n    width: 200px;\n    height: 200px;\n    display: inline-block;\n    overflow: hidden;\n    background: #ffffff;\n  }\n\n  .spinner-content {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    transform: translateZ(0) scale(1);\n    backface-visibility: hidden;\n    transform-origin: 0 0;\n  }\n\n  .spinner-content div {\n    box-sizing: content-box;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-weight: normal;\n  text-transform: capitalize;\n  margin-top: 0px;\n  padding-bottom: 50px;\n  font-size: 24px;\n  text-align: center;\n\n  @media (min-width: 768px) {\n    font-size: 32px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  img {\n    max-height: 150px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    top: 0px;\n    position: fixed;\n    width: 100vw;\n    left: 0px;\n    z-index: 100;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject(), function (_ref) {
  var primary = _ref.primary;
  return primary && (0, _styledComponents.css)(_templateObject2());
});

exports.Container = Container;

var Logo = _styledComponents.default.div(_templateObject3());

exports.Logo = Logo;

var Content = _styledComponents.default.h1(_templateObject4());

exports.Content = Content;

var Spinner = _styledComponents.default.div(_templateObject5(), function (props) {
  return "".concat(props.theme.colors.btnDarkBlue, " transparent ").concat(props.theme.colors.btnDarkBlue, " transparent");
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});

exports.Spinner = Spinner;