"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriverInfo = exports.DriverImage = exports.WrapperDriverImage = exports.WrapDriverInfo = exports.OnlineDrivers = exports.WrapperOnlineDrivers = exports.WrapperMap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  p {\n    margin: 0px;\n    &: first-child {\n      font-size: 14px;\n      font-weight: 600;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n\n    &: last-child {\n      font-size: 12px;\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 5px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 50px;\n  height: 50px;\n  background: #fff;\n  box-shadow: 0px 3px 6px #00000029;\n  border-radius: 6px;\n\n  svg {\n    width: 100%;\n    height: 100%;\n    border-radius: 100%;\n    padding: 3px;\n    box-sizing: border-box;\n    border: none;\n    background: none;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 10px;\n  align-items: center;\n  margin: 0 10px;\n  color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  background: white;\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: 0px 3px 6px #00000029;\n  max-width: calc(100% - 380px);\n  padding: 10px 20px;\n  box-sizing: border-box;\n  overflow-y: hidden;\n  & > p {\n    font-weight: 600;\n    font-size: 14px;\n    color: ", ";\n    margin: 0 0 5px 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  background-color: #EEE;\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var WrapperMap = _styledComponents.default.div(_templateObject());

exports.WrapperMap = WrapperMap;

var WrapperOnlineDrivers = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.theme.colors.primary;
});

exports.WrapperOnlineDrivers = WrapperOnlineDrivers;

var OnlineDrivers = _styledComponents.default.div(_templateObject3());

exports.OnlineDrivers = OnlineDrivers;

var WrapDriverInfo = _styledComponents.default.div(_templateObject4(), function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
});

exports.WrapDriverInfo = WrapDriverInfo;

var WrapperDriverImage = _styledComponents.default.div(_templateObject5());

exports.WrapperDriverImage = WrapperDriverImage;

var DriverImgStyled = _styledComponents.default.div(_templateObject6());

var DriverImage = function DriverImage(props) {
  return /*#__PURE__*/_react.default.createElement(DriverImgStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};

exports.DriverImage = DriverImage;

var DriverInfo = _styledComponents.default.div(_templateObject7());

exports.DriverInfo = DriverInfo;