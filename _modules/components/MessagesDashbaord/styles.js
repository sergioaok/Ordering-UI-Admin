"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageOrderDetailContainer = exports.WrapperMessage = exports.OrderAndUserListContainer = exports.WrapperSortContainer = exports.Tab = exports.WrapperTab = exports.WrapperOrdersAndUser = exports.OrdersCloseButton = exports.OrdersOpenButton = exports.MessagesManagerContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  width: 420px;\n  border-left: 1px solid #D8D8D8;\n  overflow: auto;\n\n  @media(max-width: 1300px) {\n    display: block;\n    position: absolute;\n    right: 0px;\n    background: #fff;\n    height: calc(100% - 30px);\n    border: 1px solid #D8D8D8;\n    box-shadow: -3px 3px 6px #00000029;\n    z-index: 100;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  overflow: auto;\n  height: calc(100% - 90px);\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  > div {\n    border-radius: 3px;\n    &:first-child {\n      border: 1px solid #F2F2F2;\n      padding: 0 10px;\n    }\n    &:last-child {\n      border: none;\n    }\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    color: #1C202E;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 50%;\n  text-align: center;\n  color: #C3C3C3;\n  cursor: pointer;\n  font-weight: 500;\n\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: 350px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px 0;\n  border-bottom: 1px solid #F2F2F2;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 350px;\n  background: #fff;\n  left: 10px;\n  top: 15px;\n  height: 100%;\n  overflow: hidden;\n  box-shadow: 0px 3px 6px #00000029;\n  border-radius: 12px;\n\n  @media (max-width: 992px) {\n    position: absolute;\n    z-index: 10;\n    height: calc(100% - 30px);\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  position: absolute;\n  top: 20px;\n  border: none;\n  outline: none;\n  background: transparent;\n  z-index: 100;\n  cursor: pointer;\n\n  svg {\n    font-size: 30px;\n    color: ", ";\n  }\n\n  @media (min-width: 992px) {\n    display: none;\n  }\n  @media (max-width: 576px) {\n    position: absolute;\n    top: 20px\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  position: absolute;\n  top: 20px;\n  border: none;\n  outline: none;\n  background: transparent;\n  z-index: 100;\n  cursor: pointer;\n\n  svg {\n    font-size: 30px;\n    color: ", ";\n  }\n\n  @media (min-width: 992px) {\n    display: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin-top: 20px;\n  height: calc(100vh - 224px);;\n  background: #FAFAFA;\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n  padding: 15px;\n\n  @media (max-width: 1200px) {\n    height: calc(100vh - 274px);;\n  }\n\n  @media (max-width: 576px) {\n    height: calc(100vh - 65px);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MessagesManagerContainer = _styledComponents.default.div(_templateObject());

exports.MessagesManagerContainer = MessagesManagerContainer;

var OrdersOpenButton = _styledComponents.default.button(_templateObject2(), function (props) {
  return props.theme.colors.btnDarkBlue;
});

exports.OrdersOpenButton = OrdersOpenButton;

var OrdersCloseButton = _styledComponents.default.button(_templateObject3(), function (props) {
  return props.theme.colors.btnDarkBlue;
});

exports.OrdersCloseButton = OrdersCloseButton;

var WrapperOrdersAndUser = _styledComponents.default.div(_templateObject4());

exports.WrapperOrdersAndUser = WrapperOrdersAndUser;

var WrapperTab = _styledComponents.default.div(_templateObject5());

exports.WrapperTab = WrapperTab;

var Tab = _styledComponents.default.div(_templateObject6(), function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject7());
});

exports.Tab = Tab;

var WrapperSortContainer = _styledComponents.default.div(_templateObject8());

exports.WrapperSortContainer = WrapperSortContainer;

var OrderAndUserListContainer = _styledComponents.default.div(_templateObject9());

exports.OrderAndUserListContainer = OrderAndUserListContainer;

var WrapperMessage = _styledComponents.default.div(_templateObject10());

exports.WrapperMessage = WrapperMessage;

var MessageOrderDetailContainer = _styledComponents.default.div(_templateObject11());

exports.MessageOrderDetailContainer = MessageOrderDetailContainer;