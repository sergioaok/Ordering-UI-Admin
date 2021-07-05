"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperStar = exports.DriverImage = exports.WrapperDriverImage = exports.InfoCell = exports.InfoBlock = exports.DriverInfoContent = exports.DrirverInfo = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    unicode-bidi: bidi-override;\n    color: #c5c5c5;\n    font-size: 17px;\n    position: relative;\n    width: fit-content;\n\n    &::before { \n        content: '\u2605\u2605\u2605\u2605\u2605';\n        opacity: .3;\n    }\n\n    &::after {\n        color: #F9D853;\n        content: '\u2605\u2605\u2605\u2605';\n        position: absolute;\n        z-index: 1;\n        display: block;\n        left: 0;\n        top:0;\n        width: ", ";\n        overflow: hidden;\n    }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 10px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 60px;\n  height: 60px;\n  border: 1px solid #E3E3E3;\n  border-radius: 10px;\n\n  svg {\n    width: 100%;\n    height: 100%;\n    padding: 5px;\n    box-sizing: border-box;\n    border-radius: 50%;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n\n    p {\n        font-size: 12px;\n        color: #ADADAD;\n        margin: 0px;\n    }\n\n    button {\n        outline: none;\n        border-radius: 40px;\n        border: 1px solid #182964;\n        color: #182964;\n        cursor: pointer;\n        background: transparent;\n        display: flex;\n        column-gap: 5px;\n        align-items: center;\n\n        svg {\n            color: #182964;\n            font-size: 16px;\n        }\n\n        &:active {\n            background: ", ";\n        }\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    h2 {\n        font-size: 16px;\n        margin: 0px;\n\n        &:first-child {\n            color: #263238;\n        }\n        &:last-child {\n            color: #072DB2;\n            cursor: pointer;\n        }\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        border-left: none;\n        opacity: 0.3;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    column-gap: 10px;\n    width: 100%;\n    padding: 15px;\n    border-left: 5px solid #F9D853;\n    border-bottom: 1px solid #F2F2F2;\n    box-sizing: border-box;\n\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DrirverInfo = _styledComponents.default.div(_templateObject(), function (_ref) {
  var offline = _ref.offline;
  return offline && (0, _styledComponents.css)(_templateObject2());
});

exports.DrirverInfo = DrirverInfo;

var DriverInfoContent = _styledComponents.default.div(_templateObject3());

exports.DriverInfoContent = DriverInfoContent;

var InfoBlock = _styledComponents.default.div(_templateObject4());

exports.InfoBlock = InfoBlock;

var InfoCell = _styledComponents.default.div(_templateObject5(), function () {
  return (0, _polished.darken)(0.07, '#CCC');
});

exports.InfoCell = InfoCell;

var WrapperDriverImage = _styledComponents.default.div(_templateObject6());

exports.WrapperDriverImage = WrapperDriverImage;

var DriverImageStyled = _styledComponents.default.div(_templateObject7());

var DriverImage = function DriverImage(props) {
  return /*#__PURE__*/_react.default.createElement(DriverImageStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};

exports.DriverImage = DriverImage;

var WrapperStar = _styledComponents.default.div(_templateObject8(), function (_ref2) {
  var width = _ref2.width;
  return width;
});

exports.WrapperStar = WrapperStar;