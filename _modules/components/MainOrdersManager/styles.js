"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapItemView = exports.OrderNotification = exports.WrapperIndicator = exports.OrdersInnerContent = exports.OrdersContent = exports.OrdersListContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: calc(100% - 50px);\n\n  @media (max-width: 1200px) {\n    height: calc(100% - 90px);\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  row-gap: 15px;\n  p {\n    text-align: center;\n    font-size: 20px;\n    margin: 0px;\n\n    span {\n      color: #182964;\n      font-weight: 600;\n    }\n  }\n  animation: fadeIn 200ms;\n\n  @keyframes fadeIn {\n    from {\n      transform: scale(2);\n    }\n  \n    to {\n      transform: scale(1);\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  width: 100px;\n  height: 50px;\n  border-radius: 5px;\n  background: #151824;\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: 500;\n  font-size: 24px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 92%;\n\n  @media (max-width: 1400px) {\n    width: 95%;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    margin-left: 0px;\n    width: 100%;\n    @media (max-width: 992px) {\n      width: 100%;\n      margin-left: 0px;\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 100px);\n  margin-left: 100px;\n  display: flex;\n  justify-content: center;\n  min-width: 300px;\n\n  @media (max-width: 992px) {\n    width: calc(100% - 42px);\n    margin-left: 42px;\n  }\n\n  @media (max-width: 600px) {\n    width: 95%;\n    margin: 0px auto;\n  }\n\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  padding: 30px 20px;\n  box-sizing: border-box;\n\n  ", "\n\n  @media (max-width: 1400px) {\n    width: 100%;\n    padding-right: 0px;\n  }\n\n  @media (max-width: 600px) {\n    padding: 10px 0;\n  }\n\n  transition: all 0.5s;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OrdersListContainer = _styledComponents.default.div(_templateObject(), function (_ref) {
  var deliveryAndMessageUI = _ref.deliveryAndMessageUI;
  return deliveryAndMessageUI && (0, _styledComponents.css)(_templateObject2());
});

exports.OrdersListContainer = OrdersListContainer;

var OrdersContent = _styledComponents.default.div(_templateObject3(), function (_ref2) {
  var messageUI = _ref2.messageUI;
  return messageUI && (0, _styledComponents.css)(_templateObject4());
});

exports.OrdersContent = OrdersContent;

var OrdersInnerContent = _styledComponents.default.div(_templateObject5());

exports.OrdersInnerContent = OrdersInnerContent;

var WrapperIndicator = _styledComponents.default.div(_templateObject6());

exports.WrapperIndicator = WrapperIndicator;

var OrderNotification = _styledComponents.default.div(_templateObject7());

exports.OrderNotification = OrderNotification;

var WrapItemView = _styledComponents.default.div(_templateObject8());

exports.WrapItemView = WrapItemView;