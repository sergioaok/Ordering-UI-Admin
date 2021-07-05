"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotificationIcon = exports.WrapperMoreInformationButton = exports.InfonContent = exports.ContactBlock = exports.MessageContactInfo = exports.OrderDetailCloseButton = exports.PhoneNumber = exports.ChatContainer = exports.PrintButtonContainer = exports.DriverSelectorContainer = exports.ButtonLink = exports.WrapperButton = exports.ContactInfoHeader = exports.ContactInfoContent = exports.OrderTypeContent = exports.OrderTypeInfo = exports.PaymethodCreatedDateContent = exports.PaymethodCreatedDate = exports.PaymethodContent = exports.Paymethod = exports.PayAndOrderTypeInfo = exports.WrapperSkeletonButton = exports.WrapperSkeletonBottom = exports.WrapperSkeletonText = exports.SkeletonInnerBlock = exports.SkeletonInfoCell = exports.SkeletonBlockWrapp = exports.SkeletonBlock = exports.OrderBill = exports.OrderProducts = exports.CustomerContactBlock = exports.InfoBlock = exports.SectionContainer = exports.SectionTitle = exports.StatusImage = exports.OrderStatus = exports.StatusBar = exports.OrderData = exports.OrderInfo = exports.Photo = exports.PhotoWrapper = exports.OrderInfoContent = exports.WrapperContainer = exports.Container = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject51() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 2px;\n  color: #182964;\n  font-size: 20px;\n"]);

  _templateObject51 = function _templateObject51() {
    return data;
  };

  return data;
}

function _templateObject50() {
  var data = _taggedTemplateLiteral(["\n  padding: 20px 10px 10px 10px;\n  button {\n    width: 100%;\n  }\n"]);

  _templateObject50 = function _templateObject50() {
    return data;
  };

  return data;
}

function _templateObject49() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  p {\n    margin: 0px;\n\n    &:first-child {\n      font-weight: 600;\n    }\n  }\n"]);

  _templateObject49 = function _templateObject49() {
    return data;
  };

  return data;
}

function _templateObject48() {
  var data = _taggedTemplateLiteral(["\n    background: #c7cad6;\n  "]);

  _templateObject48 = function _templateObject48() {
    return data;
  };

  return data;
}

function _templateObject47() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 10px;\n  align-items: center;\n  padding: 5px;\n  cursor: pointer;\n\n  ", "\n"]);

  _templateObject47 = function _templateObject47() {
    return data;
  };

  return data;
}

function _templateObject46() {
  var data = _taggedTemplateLiteral(["\n"]);

  _templateObject46 = function _templateObject46() {
    return data;
  };

  return data;
}

function _templateObject45() {
  var data = _taggedTemplateLiteral(["\n  border: none;\n  outline: none;\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  svg {\n    cursor: pointer;\n    font-size: 24px;\n    &:active {\n      background: ", ";\n    }\n  }\n"]);

  _templateObject45 = function _templateObject45() {
    return data;
  };

  return data;
}

function _templateObject44() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n  font-size: 15px;\n\n  @media print {\n    display: block;\n  }\n"]);

  _templateObject44 = function _templateObject44() {
    return data;
  };

  return data;
}

function _templateObject43() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0px;\n  width: 100%;\n  background: #fff;\n  height: 100%;\n  z-index: 1000;\n  box-sizing: border-box;\n  border: 1px solid #ccc;\n  overflow: hidden;\n  border-radius: 7px;\n"]);

  _templateObject43 = function _templateObject43() {
    return data;
  };

  return data;
}

function _templateObject42() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 3em;\n  padding: 10px 0;\n  button {\n    width: 100%;\n    padding: 10px 15px;\n    font-size: 20px;\n  }\n  @media print {\n    display: none;\n  }\n"]);

  _templateObject42 = function _templateObject42() {
    return data;
  };

  return data;
}

function _templateObject41() {
  var data = _taggedTemplateLiteral(["\n  margin: 15px 0 0 0;\n  & > div {\n    width: 100%;\n  }\n\n  @media print {\n    display: none;\n  }\n"]);

  _templateObject41 = function _templateObject41() {
    return data;
  };

  return data;
}

function _templateObject40() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  outline: none;\n  border: none;\n  border-radius: 100%;\n  cursor: pointer;\n  width: 44px;\n  height: 44px;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n\n  &:active {\n    background: ", ";\n  }\n\n  svg {\n    color: white;\n    font-size: 24px;\n  }\n"]);

  _templateObject40 = function _templateObject40() {
    return data;
  };

  return data;
}

function _templateObject39() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 15px;\n\n  @media (max-width: 576px) {\n    width: 100%;\n    justify-content: flex-end;\n  }\n"]);

  _templateObject39 = function _templateObject39() {
    return data;
  };

  return data;
}

function _templateObject38() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  column-gap: 15px;\n  margin-bottom: 20px;\n\n  & > div {\n    &:first-child {\n      width: 270px;\n    }\n  }\n\n  @media (max-width: 576px) {\n    flex-direction: column-reverse;\n    row-gap: 15px;\n\n    & > div {\n      &:first-child {\n        width: 100%;\n      }\n    }\n  }\n\n  @media print {\n    display: none;\n  }\n"]);

  _templateObject38 = function _templateObject38() {
    return data;
  };

  return data;
}

function _templateObject37() {
  var data = _taggedTemplateLiteral(["\n  width: 50%;\n  background: ", ";\n  border-radius: 20px;\n  padding: 30px 50px;\n  box-sizing: border-box;\n\n  @media (max-width: 1200px) {\n    padding: 20px 25px;\n    width: 100%;\n  }\n"]);

  _templateObject37 = function _templateObject37() {
    return data;
  };

  return data;
}

function _templateObject36() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 10px;\n  align-items: center;  \n  color: #151824;\n  font-size: 13px;\n\n  img {\n    width: 13px;\n  }\n"]);

  _templateObject36 = function _templateObject36() {
    return data;
  };

  return data;
}

function _templateObject35() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  p {\n    color: #182964;\n    margin: 0px;\n    font-size: 13px;\n  }\n\n  @media (max-width: 576px) {\n    width: 100%;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 10px 0;\n  }\n"]);

  _templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34() {
  var data = _taggedTemplateLiteral(["\n  p {\n    color: #182964;\n    margin: 0px;\n    font-size: 13px;\n\n    &:last-child {\n      color:  #151824;\n    }\n  }\n\n  @media (max-width: 576px) {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n  }\n"]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = _taggedTemplateLiteral(["\n  width: 40%;\n  display: flex;\n  justify-content: center;\n  border-left: 1px solid #D8D8D8;\n  border-right: 1px solid #D8D8D8;\n\n  @media (max-width: 576px) {\n    width: 100%;\n    border-left: none;\n    border-right: none;\n    border-top: 1px solid #D8D8D8;\n    border-bottom: 1px solid #D8D8D8;\n    padding: 10px 0;\n  }\n"]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 10px;\n  align-items: center;  \n  color: #151824;\n  font-size: 13px;\n\n  img {\n    width: 15px;\n  }\n"]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  p {\n    color: #182964;\n    margin: 0px;\n    font-size: 13px;\n  }\n\n  @media (max-width: 576px) {\n    width: 100%;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 10px 0;\n  }\n"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px 5px;\n  border-top: 1px solid #D8D8D8;\n  border-bottom: 1px solid #D8D8D8;\n  margin-top: 30px;\n\n  @media (max-width: 576px) {\n    flex-direction:  column;\n  }\n"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n\n  span {\n    border-radius: 20px;\n  }\n"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 100px;\n\n  span {\n    width: 90%;\n    border-radius: 30px;\n  }\n"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 10px;\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  column-gap: 10px;\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 20px;\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  border-radius: 16px;\n  display: flex;\n  flex-direction: column;\n  row-gap: 15px;\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n        text-align: left;\n      "]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  table {\n    width: 100%;\n    font-size: 15px;\n    tr td:nth-child(2) {\n      text-align: right;\n      ", "\n    }\n  }\n\n  table.total {\n    border-top: 1px solid #BFBFBF;\n    margin-top: 15px;\n    tr {\n      font-size: 16px;\n      td:nth-child(1) {\n        font-weight: bold;\n        padding-top: 10px;\n      }\n      td:nth-child(2) {\n        font-weight: bold;\n        color: ", ";\n        padding-top: 10px;\n      }\n    }\n  }\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: column;\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 10px;\n\n  button {\n    outline: none;\n    border: 1px solid #182964;\n    border-radius: 42px;\n    background-color: transparent;\n    cursor: pointer;\n    width: 90px;\n    height: 30px;\n    font-size: 14px;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n\n    &:active {\n      background: ", ";\n    }\n\n    svg {\n      display: flex;\n      align-items: center;\n      column-gap: 10px;\n      color: #182964;\n      margin-right: 10px;\n      font-size: 18px;\n    }\n  }\n\n  @media  print {\n    display: none;\n  }\n  \n  BsBell {\n    margin: 5px;\n  }\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  text-transform: capitalize;\n  h1,\n  span {\n    margin: 0px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  h1 {\n    font-size: 20px;\n    color: #263238;\n    font-weight: 500;\n  }\n\n  span {\n    font-size: 15px;\n    opacity: 0.8;\n  }\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  column-gap: 10px;\n  margin-bottom: 20px;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n    @media print {\n      display: none;\n    }\n  "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  margin: 0px;\n  font-size: 18px;\n  color: #151824;\n\n  ", "\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  img {\n    display: flex;\n    width: 40px;\n    height: 40px;\n    box-sizing: border-box;\n    position: relative;\n    background-repeat: no-repeat, repeat;\n    background-size: contain;\n    object-fit: contain;\n    border-radius: 10px;\n    margin-top: 15px;\n  }\n\n  @media (min-width: 410px) {\n    img {\n      width: 50px;\n      height: 50px;\n    }\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  span {\n    padding: 2px 10px;\n    border: 1px solid ", ";\n    color: ", ";\n    text-align: center;\n    border-radius: 20px;\n    font-weight: bold;\n    text-transform: uppercase;\n    font-size: 13px;\n    max-width: 200px;\n  }\n\n  @media (min-width: 410px) {\n    span {\n      font-size: 13px;\n    }\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  height: 5px;\n  margin: 10px 0px 0px;\n  background: ", ";\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  h1, p {\n    margin: 0px;\n  }\n  h1 {\n    margin-bottom: ", ";\n    font-size: ", ";\n  }\n  p {\n    font-size: 13px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n  p:nth-child(1) {\n    opacity: 0.8;\n  }\n  p.date {\n    font-weight: bold;\n    font-size: 15px;\n  }\n  p.uuid {\n    display: none;\n  }\n\n  @media (min-width: 512px) {\n    p.uuid {\n      display: block;\n    }\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin: 10px 0px 20px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 10px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    height: 60px;\n    width: 60px;\n    svg {\n      height: 50px;\n      width: 50px;\n      margin-right: 0px;\n    }\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0;\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  max-width: 80px;\n  max-height: 80px;\n  height: 80px;\n  width: 80px;\n  display: flex;\n  align-items: center;\n\n  svg {\n    width: 70px;\n    height: 70px;\n    border-radius: 50%;\n    margin-right: 10px;\n    ", "\n  }\n\n  @media print {\n    display: none;\n  }\n\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    padding: 0px 0px 0px 10px;\n    margin-right: 0px;\n    overflow: initial;\n    max-height: initial;\n\n    @media (max-width: 1200px) {\n      padding: 0;\n      overflow: auto;\n    }\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  padding: 50px 35px 50px 0;\n  box-sizing: border-box;\n  max-height: 800px;\n  overflow: auto;\n  margin-right: 10px;\n  @media (max-width: 1200px) {\n    width: 100%;\n    padding: 20px 0;\n    max-height: initial;\n    overflow: initial;\n  }\n\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    padding: 0;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 92%;\n  margin: 0 auto;\n  display: flex;\n  position: relative;\n  max-width: 1200px;\n  box-sizing: border-box;\n  height: 100%;\n  @media (max-width: 1200px) {\n    padding: 30px 0;\n    flex-direction: column;\n    row-gap: 20px;\n    width: 92%;\n  }\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  position: relative;\n  height: 100%;\n\n  div.skeleton-loading {\n    justify-content: space-between;\n\n    > div {\n      width: ", ";\n    }\n  }\n\n  @media (max-width: 1200px) {\n    div.skeleton-loading {\n      > div {\n        width: 100%;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject(), function (_ref) {
  var messageDashboardView = _ref.messageDashboardView;
  return messageDashboardView ? '100%' : '48%';
});

exports.Container = Container;

var WrapperContainer = _styledComponents.default.div(_templateObject2(), function (_ref2) {
  var messageDashboardView = _ref2.messageDashboardView;
  return messageDashboardView && (0, _styledComponents.css)(_templateObject3());
});

exports.WrapperContainer = WrapperContainer;

var OrderInfoContent = _styledComponents.default.div(_templateObject4(), function (_ref3) {
  var messageDashboardView = _ref3.messageDashboardView;
  return messageDashboardView && (0, _styledComponents.css)(_templateObject5());
});

exports.OrderInfoContent = OrderInfoContent;

var PhotoWrapper = _styledComponents.default.div(_templateObject6(), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject7());
}, function (_ref4) {
  var messageDashboardView = _ref4.messageDashboardView;
  return messageDashboardView && (0, _styledComponents.css)(_templateObject8());
});

exports.PhotoWrapper = PhotoWrapper;

var PhotoStyled = _styledComponents.default.div(_templateObject9());

var Photo = function Photo(props) {
  return /*#__PURE__*/_react.default.createElement(PhotoStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};

exports.Photo = Photo;

var OrderInfo = _styledComponents.default.div(_templateObject10());

exports.OrderInfo = OrderInfo;

var OrderData = _styledComponents.default.div(_templateObject11(), function (_ref5) {
  var messageDashboardView = _ref5.messageDashboardView;
  return messageDashboardView ? '0px' : '5px';
}, function (_ref6) {
  var messageDashboardView = _ref6.messageDashboardView;
  return messageDashboardView ? '20px' : '24px';
});

exports.OrderData = OrderData;

var StatusBarStyled = _styledComponents.default.div(_templateObject12(), function (props) {
  return "linear-gradient(to right, ".concat(props.theme.colors.btnSecondary, " ").concat(props.percentage, "%, ").concat(props.theme.colors.disabled, " ").concat(props.percentage, "%)");
});

var StatusBar = function StatusBar(props) {
  return /*#__PURE__*/_react.default.createElement(StatusBarStyled, props, props.children);
};

exports.StatusBar = StatusBar;

var OrderStatus = _styledComponents.default.div(_templateObject13(), function (props) {
  return props.theme.colors.btnSecondary;
}, function (props) {
  return props.theme.colors.btnSecondary;
});

exports.OrderStatus = OrderStatus;

var StatusImage = _styledComponents.default.div(_templateObject14());

exports.StatusImage = StatusImage;

var SectionTitle = _styledComponents.default.p(_templateObject15(), function (_ref7) {
  var driver = _ref7.driver;
  return driver && (0, _styledComponents.css)(_templateObject16());
});

exports.SectionTitle = SectionTitle;

var SectionContainer = _styledComponents.default.div(_templateObject17());

exports.SectionContainer = SectionContainer;

var InfoBlock = _styledComponents.default.div(_templateObject18());

exports.InfoBlock = InfoBlock;

var CustomerContactBlock = _styledComponents.default.div(_templateObject19(), function () {
  return (0, _polished.darken)(0.07, '#CCC');
});

exports.CustomerContactBlock = CustomerContactBlock;
var OrderProducts = (0, _styledComponents.default)(SectionContainer)(_templateObject20());
exports.OrderProducts = OrderProducts;

var OrderBill = _styledComponents.default.div(_templateObject21(), function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject22());
}, function (props) {
  return props.theme.colors.btnDarkBlue;
});

exports.OrderBill = OrderBill;

var SkeletonBlock = _styledComponents.default.div(_templateObject23(), function (_ref8) {
  var width = _ref8.width;
  return width && "".concat(width, "%");
});

exports.SkeletonBlock = SkeletonBlock;

var SkeletonBlockWrapp = _styledComponents.default.div(_templateObject24());

exports.SkeletonBlockWrapp = SkeletonBlockWrapp;

var SkeletonInfoCell = _styledComponents.default.div(_templateObject25());

exports.SkeletonInfoCell = SkeletonInfoCell;

var SkeletonInnerBlock = _styledComponents.default.div(_templateObject26());

exports.SkeletonInnerBlock = SkeletonInnerBlock;

var WrapperSkeletonText = _styledComponents.default.div(_templateObject27());

exports.WrapperSkeletonText = WrapperSkeletonText;

var WrapperSkeletonBottom = _styledComponents.default.div(_templateObject28());

exports.WrapperSkeletonBottom = WrapperSkeletonBottom;

var WrapperSkeletonButton = _styledComponents.default.div(_templateObject29());

exports.WrapperSkeletonButton = WrapperSkeletonButton;

var PayAndOrderTypeInfo = _styledComponents.default.div(_templateObject30());

exports.PayAndOrderTypeInfo = PayAndOrderTypeInfo;

var Paymethod = _styledComponents.default.div(_templateObject31());

exports.Paymethod = Paymethod;

var PaymethodContent = _styledComponents.default.div(_templateObject32());

exports.PaymethodContent = PaymethodContent;

var PaymethodCreatedDate = _styledComponents.default.div(_templateObject33());

exports.PaymethodCreatedDate = PaymethodCreatedDate;

var PaymethodCreatedDateContent = _styledComponents.default.div(_templateObject34());

exports.PaymethodCreatedDateContent = PaymethodCreatedDateContent;

var OrderTypeInfo = _styledComponents.default.div(_templateObject35());

exports.OrderTypeInfo = OrderTypeInfo;

var OrderTypeContent = _styledComponents.default.div(_templateObject36());

exports.OrderTypeContent = OrderTypeContent;

var ContactInfoContent = _styledComponents.default.div(_templateObject37(), function (props) {
  return props.theme.colors.primary;
});

exports.ContactInfoContent = ContactInfoContent;

var ContactInfoHeader = _styledComponents.default.div(_templateObject38());

exports.ContactInfoHeader = ContactInfoHeader;

var WrapperButton = _styledComponents.default.div(_templateObject39());

exports.WrapperButton = WrapperButton;

var ButtonLink = _styledComponents.default.button(_templateObject40(), function (props) {
  return props.theme.colors.btnDarkBlue;
}, function (props) {
  return (0, _polished.darken)(0.07, props.theme.colors.btnDarkBlue);
});

exports.ButtonLink = ButtonLink;

var DriverSelectorContainer = _styledComponents.default.div(_templateObject41());

exports.DriverSelectorContainer = DriverSelectorContainer;

var PrintButtonContainer = _styledComponents.default.div(_templateObject42());

exports.PrintButtonContainer = PrintButtonContainer;

var ChatContainer = _styledComponents.default.div(_templateObject43());

exports.ChatContainer = ChatContainer;

var PhoneNumber = _styledComponents.default.div(_templateObject44());

exports.PhoneNumber = PhoneNumber;

var OrderDetailCloseButton = _styledComponents.default.div(_templateObject45(), function () {
  return (0, _polished.darken)(0.07, '#fff');
});

exports.OrderDetailCloseButton = OrderDetailCloseButton;

var MessageContactInfo = _styledComponents.default.div(_templateObject46());

exports.MessageContactInfo = MessageContactInfo;

var ContactBlock = _styledComponents.default.div(_templateObject47(), function (_ref9) {
  var active = _ref9.active;
  return active && (0, _styledComponents.css)(_templateObject48());
});

exports.ContactBlock = ContactBlock;

var InfonContent = _styledComponents.default.div(_templateObject49());

exports.InfonContent = InfonContent;

var WrapperMoreInformationButton = _styledComponents.default.div(_templateObject50());

exports.WrapperMoreInformationButton = WrapperMoreInformationButton;

var NotificationIcon = _styledComponents.default.div(_templateObject51());

exports.NotificationIcon = NotificationIcon;