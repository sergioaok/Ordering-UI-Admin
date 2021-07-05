"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderDetailIconButton = exports.MessagesSearch = exports.SearchAndDetailControlContainer = exports.HeaderInfo = exports.WrapperLogisticInformation = exports.WrapperLogistics = exports.SkeletonHitory = exports.TabItem = exports.WrapperHitoryHeader = exports.WrapperSendMessageButton = exports.WrapperDeleteImage = exports.SendImage = exports.WrapperSendInput = exports.Send = exports.SendForm = exports.TimeofSent = exports.MyName = exports.PartnerName = exports.ChatImage = exports.SkeletonBubbleBusiness = exports.SkeletonBubbleCustomer = exports.BubbleCustomer = exports.BubbleBusines = exports.BubbleConsole = exports.MessageCustomer = exports.MessageBusiness = exports.MessageConsole = exports.Chat = exports.HeaderOnline = exports.Image = exports.Status = exports.HeaderName = exports.WrapperHeader = exports.HeaderProfile = exports.BackActions = exports.WrapperContainer = exports.MessagesContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject52() {
  var data = _taggedTemplateLiteral(["\n  outline: none;\n  border: none;\n  background: #b9bcc7;\n  &:active {\n    background: ", ";\n  }\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 5px;\n\n  svg {\n    font-size: 30px;\n  }\n"]);

  _templateObject52 = function _templateObject52() {
    return data;
  };

  return data;
}

function _templateObject51() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n\n  img {\n    position: absolute;\n    top: 13px;\n    left: 14px;\n  }\n\n  input {\n    width: 200px;\n    border: 1px solid #1C202E;\n    border-radius: 22px;\n    outline: none;\n    padding: 8px;\n    padding-left: 40px;\n    font-size: 15px;\n    background: transparent;\n\n    &::placeholder {\n      color: #182964;\n    }\n  }\n"]);

  _templateObject51 = function _templateObject51() {
    return data;
  };

  return data;
}

function _templateObject50() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 10px;\n  align-items: center;\n"]);

  _templateObject50 = function _templateObject50() {
    return data;
  };

  return data;
}

function _templateObject49() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n"]);

  _templateObject49 = function _templateObject49() {
    return data;
  };

  return data;
}

function _templateObject48() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject48 = function _templateObject48() {
    return data;
  };

  return data;
}

function _templateObject47() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject47 = function _templateObject47() {
    return data;
  };

  return data;
}

function _templateObject46() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  column-gap: 20px;\n\n  span {\n    border-radius: 30px;\n  }\n\n  @media (max-width: 576px) {\n    span {\n      width: 250px !important;\n    }\n  }\n"]);

  _templateObject46 = function _templateObject46() {
    return data;
  };

  return data;
}

function _templateObject45() {
  var data = _taggedTemplateLiteral(["\n    border-bottom: 2px solid ", ";\n    color: ", ";\n  "]);

  _templateObject45 = function _templateObject45() {
    return data;
  };

  return data;
}

function _templateObject44() {
  var data = _taggedTemplateLiteral(["\n  font-size: 20px;\n  padding: 5px 20px;\n  cursor: pointer;\n  text-align: center;\n\n  ", "\n\n  @media (max-width: 576px) {\n    padding: 5px 10px;\n    font-size: 14px;\n  }\n"]);

  _templateObject44 = function _templateObject44() {
    return data;
  };

  return data;
}

function _templateObject43() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n"]);

  _templateObject43 = function _templateObject43() {
    return data;
  };

  return data;
}

function _templateObject42() {
  var data = _taggedTemplateLiteral(["\n        margin-left: 10px;\n        margin-right: 0px;\n        transform: rotate(270deg)\n      "]);

  _templateObject42 = function _templateObject42() {
    return data;
  };

  return data;
}

function _templateObject41() {
  var data = _taggedTemplateLiteral(["\n  white-space: nowrap;\n  width: fit-content;\n\n  button{\n    padding-top: 7px;\n    padding-bottom: 7px;\n    svg {\n       width: 1.5em;\n       height: 1.5em; \n       vertical-align: middle;\n       color: white;\n       ", "\n    }\n\n    span {\n      display: none;\n    }\n\n    &:disabled {\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n  }\n\n  @media (min-width: 480px){\n    button{\n      svg {\n        margin-right: 10px;\n      }\n      span {\n        display: inline;\n      }\n    }\n  }\n"]);

  _templateObject41 = function _templateObject41() {
    return data;
  };

  return data;
}

function _templateObject40() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 7px;\n  right: -10px;\n\n  button{\n    &:disabled {\n    cursor: not-allowed;\n    }\n  }\n"]);

  _templateObject40 = function _templateObject40() {
    return data;
  };

  return data;
}

function _templateObject39() {
  var data = _taggedTemplateLiteral(["\n  width: 25px;\n  height: 25px;\n  \n  position: absolute;\n  top: 10px;\n  right: 0px;\n\n  input {\n    display: none;\n  }\n\n  svg {\n    color: #CFD0D0;\n    width: 25px;\n    height: 25px;\n    cursor: pointer\n  }\n"]);

  _templateObject39 = function _templateObject39() {
    return data;
  };

  return data;
}

function _templateObject38() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  position: relative;\n  box-sizing: border-box;\n"]);

  _templateObject38 = function _templateObject38() {
    return data;
  };

  return data;
}

function _templateObject37() {
  var data = _taggedTemplateLiteral(["\n    width: 92%;\n  "]);

  _templateObject37 = function _templateObject37() {
    return data;
  };

  return data;
}

function _templateObject36() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  margin-top: 3px;\n  height: auto;\n  width: 80%;\n  max-width: 1200px;\n  margin: auto;\n  justify-content: space-between;\n  column-gap: 50px;\n  input {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    width: 100%;\n    flex: 1;\n  }\n\n  @media (max-width: 576px) {\n    width: 90%;\n  }\n\n  ", "\n"]);

  _templateObject36 = function _templateObject36() {
    return data;
  };

  return data;
}

function _templateObject35() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  background: #FAFAFA;\n  border-top: 1px solid #EEEEEE;\n  height: 70px;\n\n  @media (min-width: 768px) {\n    height: 90px;\n  }\n"]);

  _templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34() {
  var data = _taggedTemplateLiteral(["\n    text-align: left;\n  "]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  text-align: right;\n  font-size: 0.8em;\n  margin-block-start: 0.2em;\n  margin-block-end: initial;\n\n  ", "\n"]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = _taggedTemplateLiteral(["\n      text-align: left;\n  "]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = _taggedTemplateLiteral(["\n    margin-block-start: 0;\n    margin-block-end: 0.6em;\n    font-size: 1.1em;\n    text-align: right;\n\n    ", "\n"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["\n  margin-block-start: 0;\n  margin-block-end: 0.6em;\n  font-size: 1.1em;\n"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: auto;\n  img{\n    width: 100%;\n    height: auto;\n    vertical-align: middle;\n    object-fit: contain;\n  }\n"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["\n    border-radius: 97px 97px 0px 97px;\n    "]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n  span{\n    border-radius: 97px 97px 97px 0px;\n    ", "\n  }\n"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n    border-radius: 97px 97px 97px 0px;\n    "]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n  span{\n    border-radius: 97px 97px 0px 97px;\n    ", "\n  }\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n      border-radius: 97px 97px 97px 0px;\n    "]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n    border-radius: 40px 40px 40px 0px;\n\n    p:last-child {\n      left: initial;\n      right: 10px;\n    }\n\n    &[name=image]{\n      border-radius: 40px 40px 40px 0px;\n     }\n  "]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 40px 40px 0px 40px;\n  padding: 10px 25px 10px 25px;\n  max-width: 60%;\n  min-width: 80px;\n  height: auto;\n  margin-bottom: 10px;\n  background: #182964;\n  color: white;\n  overflow-wrap: break-word;\n  overflow: hidden;\n\n  p:last-child {\n    left: 10px;\n  }\n\n  &[name=image]{\n    border-radius: 40px 40px 0px 40px;\n    width: 100%;\n  }\n\n  ", "\n  \n  @media (min-width: 480px){\n    border-radius: 97px 97px 0px 97px;\n\n    ", "\n  }\n\n  @media (min-width: 1024px){\n    max-width: 40%\n  }\n\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n      border-radius: 97px 97px 0px 97px;\n      &[name=image]{\n        border-radius: 40px 40px 0px 40px;\n       }\n    "]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n      border-radius: 40px 40px 0px 40px;\n  "]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 40px 40px 40px 0px;\n  padding: 10px 25px 10px 25px;\n  max-width: 60%;\n  min-width: 80px;\n  margin-bottom: 10px;\n  background: #EFEFEF;\n  overflow: hidden;\n  overflow-wrap: break-word;\n  &[name=image]{\n    border-radius: 40px 40px 40px 0px;\n    width: 100%;\n  }\n\n  ", "\n\n  @media (min-width: 480px) {\n    border-radius: 97px 97px 97px 0px;\n\n    ", "\n  }\n\n  @media (min-width: 1024px){\n    max-width: 40%;\n  }\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 50px;\n  padding: 10px 25px 10px 25px;\n  max-width: 40%;\n  margin-bottom: 15px;\n  background: #EFEFEF;\n  text-align: center;\n  height: auto;\n  overflow: hidden;\n  overflow-wrap: break-word;\n  @media (min-width: 1024px){\n    max-width: 50%;\n  }\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  flex-wrap: wrap;\n  font-size: 0.8em;\n  width: 80%;\n  max-width: 1200px;\n  margin: auto;\n\n  @media (max-width: 576px) {\n    width: 90%;\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 0.8em;\n  width: 80%;\n  max-width: 1200px;\n  margin: auto;\n\n  @media (max-width: 576px) {\n    width: 90%;\n  }\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  justify-content: center;\n  font-size: 0.8em;\n  border-radius: 97px;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  overflow-y: auto;\n  overflow-x: hidden;\n  flex-direction: column;\n  > :first-child{\n    margin-top: 10px;\n  }\n  @media (min-width: 768px){\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    margin-right: 10px;\n    margin-left: 0px;\n    text-align: right;\n  "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  height: 60px;\n  line-height: 1.5;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  text-align: left;\n  margin-left: 10px;\n\n  ", "\n  h1,\n  span {\n    margin: 0px;\n  }\n\n  h1 {\n    font-size: 20px;\n    font-weight: 500;\n  }\n\n  span {\n    font-size: 15px;\n    font-weight: 300;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  width: 70px;\n  height: 70px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid ", ";\n  border-radius: 10px;\n  box-sizing: border-box;\n\n  img {\n    width: 100%;\n    height: auto;\n    border-radius: 10px;\n    object-fit: cover;\n    border: 1px solid #F5F5F5;\n  }\n\n  img[name]{\n    border: 1px solid #182964;\n    border-radius: 50%;\n  }\n\n  svg {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    padding: 6px;\n  }\n\n  @media (max-width: 576px) {\n    width: 50px;\n    height: 50px;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  margin-block-start: 0.1em;\n  margin-block-end: 0.1em;\n  font-size: 0.7em;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.1em;\n  margin-block-end: 0.1em;\n  margin-block-start: 0.1em;\n\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    width: 92%;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    width: 92%;\n    border-bottom: 1px solid #D8D8D8;\n    padding-bottom: 5px;\n    flex-wrap: wrap;\n    row-gap: 10px;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 80%;\n  max-width: 1200px;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  @media (max-width: 576px) {\n    justify-content: center;\n    width: 90%;\n  }\n\n  ", "\n\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n         margin-right: 10px;\n         margin-left: 0px;\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 20px 0px;\n\n  div {\n     p {\n       margin-left: 10px;\n       ", "\n      }\n     strong {\n      p{\n        margin-block-end: 0.1em;\n      }\n    }\n    p {\n      margin-block-start: 0.1em;\n      font-size: 0.7em\n    }\n  }\n\n  @media (max-width: 576px) {\n    padding: 10px 0;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 20px;\n  left: 4%;\n  a {\n    text-decoration: none;\n    cursor: pointer;\n    font-weight: bold;\n  }\n  svg {\n    font-size: 30px;\n    color: #000;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  box-sizing: border-box;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MessagesContainer = _styledComponents.default.div(_templateObject());

exports.MessagesContainer = MessagesContainer;

var WrapperContainer = _styledComponents.default.div(_templateObject2());

exports.WrapperContainer = WrapperContainer;

var BackActions = _styledComponents.default.div(_templateObject3());

exports.BackActions = BackActions;

var HeaderProfile = _styledComponents.default.div(_templateObject4(), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5());
});

exports.HeaderProfile = HeaderProfile;

var WrapperHeader = _styledComponents.default.div(_templateObject6(), function (_ref) {
  var messageDashboardView = _ref.messageDashboardView;
  return messageDashboardView && (0, _styledComponents.css)(_templateObject7());
}, function (_ref2) {
  var historyView = _ref2.historyView;
  return historyView && (0, _styledComponents.css)(_templateObject8());
});

exports.WrapperHeader = WrapperHeader;

var HeaderName = _styledComponents.default.p(_templateObject9());

exports.HeaderName = HeaderName;

var Status = _styledComponents.default.p(_templateObject10());

exports.Status = Status;

var Image = _styledComponents.default.div(_templateObject11(), function (props) {
  var _props$theme2, _props$theme2$colors;

  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : (_props$theme2$colors = _props$theme2.colors) === null || _props$theme2$colors === void 0 ? void 0 : _props$theme2$colors.primary;
});

exports.Image = Image;

var HeaderOnline = _styledComponents.default.div(_templateObject12(), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject13());
});

exports.HeaderOnline = HeaderOnline;

var Chat = _styledComponents.default.div(_templateObject14());

exports.Chat = Chat;

var MessageConsole = _styledComponents.default.div(_templateObject15());

exports.MessageConsole = MessageConsole;

var MessageBusiness = _styledComponents.default.div(_templateObject16());

exports.MessageBusiness = MessageBusiness;

var MessageCustomer = _styledComponents.default.div(_templateObject17());

exports.MessageCustomer = MessageCustomer;

var BubbleConsole = _styledComponents.default.div(_templateObject18());

exports.BubbleConsole = BubbleConsole;

var BubbleBusines = _styledComponents.default.div(_templateObject19(), function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject20());
}, function (props) {
  var _props$theme5;

  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject21());
});

exports.BubbleBusines = BubbleBusines;

var BubbleCustomer = _styledComponents.default.div(_templateObject22(), function (props) {
  var _props$theme6;

  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject23());
}, function (props) {
  var _props$theme7;

  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject24());
});

exports.BubbleCustomer = BubbleCustomer;

var SkeletonBubbleCustomer = _styledComponents.default.div(_templateObject25(), function (props) {
  var _props$theme8;

  return ((_props$theme8 = props.theme) === null || _props$theme8 === void 0 ? void 0 : _props$theme8.rtl) && (0, _styledComponents.css)(_templateObject26());
});

exports.SkeletonBubbleCustomer = SkeletonBubbleCustomer;

var SkeletonBubbleBusiness = _styledComponents.default.div(_templateObject27(), function (props) {
  var _props$theme9;

  return ((_props$theme9 = props.theme) === null || _props$theme9 === void 0 ? void 0 : _props$theme9.rtl) && (0, _styledComponents.css)(_templateObject28());
});

exports.SkeletonBubbleBusiness = SkeletonBubbleBusiness;

var ChatImage = _styledComponents.default.div(_templateObject29());

exports.ChatImage = ChatImage;

var PartnerName = _styledComponents.default.p(_templateObject30());

exports.PartnerName = PartnerName;

var MyName = _styledComponents.default.p(_templateObject31(), function (props) {
  var _props$theme10;

  return ((_props$theme10 = props.theme) === null || _props$theme10 === void 0 ? void 0 : _props$theme10.rtl) && (0, _styledComponents.css)(_templateObject32());
});

exports.MyName = MyName;

var TimeofSent = _styledComponents.default.p(_templateObject33(), function (props) {
  var _props$theme11;

  return ((_props$theme11 = props.theme) === null || _props$theme11 === void 0 ? void 0 : _props$theme11.rtl) && (0, _styledComponents.css)(_templateObject34());
});

exports.TimeofSent = TimeofSent;

var SendForm = _styledComponents.default.div(_templateObject35());

exports.SendForm = SendForm;

var Send = _styledComponents.default.form(_templateObject36(), function (_ref3) {
  var messageDashboardView = _ref3.messageDashboardView;
  return messageDashboardView && (0, _styledComponents.css)(_templateObject37());
});

exports.Send = Send;

var WrapperSendInput = _styledComponents.default.div(_templateObject38());

exports.WrapperSendInput = WrapperSendInput;

var SendImage = _styledComponents.default.label(_templateObject39());

exports.SendImage = SendImage;

var WrapperDeleteImage = _styledComponents.default.div(_templateObject40());

exports.WrapperDeleteImage = WrapperDeleteImage;

var WrapperSendMessageButton = _styledComponents.default.div(_templateObject41(), function (props) {
  var _props$theme12;

  return ((_props$theme12 = props.theme) === null || _props$theme12 === void 0 ? void 0 : _props$theme12.rtl) && (0, _styledComponents.css)(_templateObject42());
});

exports.WrapperSendMessageButton = WrapperSendMessageButton;

var WrapperHitoryHeader = _styledComponents.default.div(_templateObject43());

exports.WrapperHitoryHeader = WrapperHitoryHeader;

var TabItem = _styledComponents.default.div(_templateObject44(), function (_ref4) {
  var active = _ref4.active;
  return active && (0, _styledComponents.css)(_templateObject45(), function (props) {
    return props.theme.colors.btnDarkBlue;
  }, function (props) {
    return props.theme.colors.btnDarkBlue;
  });
});

exports.TabItem = TabItem;

var SkeletonHitory = _styledComponents.default.div(_templateObject46());

exports.SkeletonHitory = SkeletonHitory;

var WrapperLogistics = _styledComponents.default.div(_templateObject47());

exports.WrapperLogistics = WrapperLogistics;

var WrapperLogisticInformation = _styledComponents.default.div(_templateObject48());

exports.WrapperLogisticInformation = WrapperLogisticInformation;

var HeaderInfo = _styledComponents.default.div(_templateObject49());

exports.HeaderInfo = HeaderInfo;

var SearchAndDetailControlContainer = _styledComponents.default.div(_templateObject50());

exports.SearchAndDetailControlContainer = SearchAndDetailControlContainer;

var MessagesSearch = _styledComponents.default.div(_templateObject51());

exports.MessagesSearch = MessagesSearch;

var OrderDetailIconButton = _styledComponents.default.button(_templateObject52(), function () {
  return (0, _polished.darken)(0.07, '#b9bcc7');
});

exports.OrderDetailIconButton = OrderDetailIconButton;