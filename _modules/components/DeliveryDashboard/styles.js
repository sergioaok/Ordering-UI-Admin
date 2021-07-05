"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperOrderlist = exports.OrderAndDriverListContainer = exports.WrapperQuickShow = exports.Tab = exports.WrapperTab = exports.WrapperOrdersAndDriver = exports.OrdersCloseButton = exports.OrdersOpenButton = exports.DeliveryDashboardContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  overflow: auto;\n  height: calc(100% - 91px);\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin-top: 56px;\n  padding: 5px 20px;\n  justify-content: flex-end;\n  column-gap: 10px;\n\n  svg {\n    width: 25px;\n    height: 25px;\n    cursor: pointer;\n  }\n"]);

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
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 350px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px 0;\n  border-bottom: 1px solid #F2F2F2;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 350px;\n  box-shadow: 0px 3px 6px #00000029;\n  border-radius: 12px;\n  position: absolute;\n  background: #fff;\n  right: 10px;\n  top: 15px;\n  height: calc(100% - 30px);\n  overflow: hidden;\n\n  @media (max-width: 576px) {\n    position: fixed;\n    z-index: 100;\n    top: 75px;\n    height: calc(100vh - 80px);\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  position: absolute;\n  right: 10px;\n  top: 20px;\n  border: none;\n  outline: none;\n  background: transparent;\n  z-index: 100;\n  cursor: pointer;\n\n  svg {\n    font-size: 30px;\n    color: ", ";\n  }\n\n  @media (max-width: 576px) {\n    position: fixed;\n    z-index: 200;\n    top: 80px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  position: absolute;\n  right: 10px;\n  top: 20px;\n  border: none;\n  outline: none;\n  background: transparent;\n  z-index: 100;\n  cursor: pointer;\n\n  svg {\n    font-size: 30px;\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  height: calc(100% - 20px);\n  background: #FAFAFA;\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n\n  @media (max-width: 1200px) {\n    height: calc(100% - 30px);\n  }\n\n  @media (max-width: 576px) {\n    height: calc(100vh - 65px);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DeliveryDashboardContainer = _styledComponents.default.div(_templateObject());

exports.DeliveryDashboardContainer = DeliveryDashboardContainer;

var OrdersOpenButton = _styledComponents.default.button(_templateObject2(), function (props) {
  return props.theme.colors.btnDarkBlue;
});

exports.OrdersOpenButton = OrdersOpenButton;

var OrdersCloseButton = _styledComponents.default.button(_templateObject3(), function (props) {
  return props.theme.colors.btnDarkBlue;
});

exports.OrdersCloseButton = OrdersCloseButton;

var WrapperOrdersAndDriver = _styledComponents.default.div(_templateObject4());

exports.WrapperOrdersAndDriver = WrapperOrdersAndDriver;

var WrapperTab = _styledComponents.default.div(_templateObject5());

exports.WrapperTab = WrapperTab;

var Tab = _styledComponents.default.div(_templateObject6(), function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject7());
});

exports.Tab = Tab;

var WrapperQuickShow = _styledComponents.default.div(_templateObject8());

exports.WrapperQuickShow = WrapperQuickShow;

var OrderAndDriverListContainer = _styledComponents.default.div(_templateObject9());

exports.OrderAndDriverListContainer = OrderAndDriverListContainer;

var WrapperOrderlist = _styledComponents.default.div(_templateObject10());

exports.WrapperOrderlist = WrapperOrderlist;