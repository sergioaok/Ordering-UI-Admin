"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputWithIcon = exports.TitleFormSide = exports.SocialButtons = exports.RedirectLink = exports.FormInput = exports.LoginWith = exports.FormSide = exports.LoginHeroContainer = exports.HeroSide = exports.LoginContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  align-items: center;\n\n  input {\n    width: 100%;\n  }\n\n  img {\n    position: absolute;\n    width: 20px;\n    padding: 8px 20px;\n  }\n\n  svg {\n    position: absolute;\n    font-size: 24px;\n    color: #707070;\n    padding: 8px 20px;\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  color: #fff;\n  \n  h1 {\n    text-transform: uppercase;\n    font-size: 24px;\n    margin: 0px;\n  }\n\n  p {\n    font-size: 16px;\n    margin-top: 0px;\n    margin-bottom: 60px;\n  }\n\n  @media (min-width: 425px) {\n    h1 {\n      font-size: 40px;\n    }\n    p {\n      font-size: 20px;\n    }\n  }\n\n  @media (min-width: 769px) {\n    h1 {\n      font-size: 50px;\n    }\n    p {\n      font-size: 24px;\n      margin-bottom: 80px;\n    }\n  }  \n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n   width: calc(100% - 40px);\n   margin-top: 5px;\n\n  button {\n    display: flex;\n    justify-content: start;\n    width: 100%;\n    padding: 5px 30px;\n    color: #000000;\n\n    img {\n      width: 30px;\n    }\n\n    div {\n      font-size: 0.8em;\n    }\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n      font-size: 16px;\n    "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    width: calc(90% - 20px);\n\n    @media (min-width: 481px) {\n      width: ", ";\n    }\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 10px;\n  font-size: 17px;\n\n  span {\n    color: #4C6CDB;\n    margin-right: 5px;\n\n    ", "\n  }\n\n  a {\n    color: ", ";\n    text-decoration: none;\n  }\n\n  * {\n    margin: 0px;\n    padding: 0px;\n  }\n\n  ", "\n\n  @media (min-width: 425px) {\n    flex-direction: row;\n  }\n\n  @media (min-width: 768px) {\n    font-size: 14px;\n  }\n\n  @media (min-width: 992px) {\n    font-size: ", ";\n    flex-direction: row;\n  }\n\n  @media (min-width: 1200px) {\n    ", ";\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  display: flex;\n  flex-direction: column;\n\n  * {\n    padding: 8px 0px;\n  }\n\n  input:not(:last-child) {\n    margin-top: 15px;\n    margin-bottom: 15px;\n    padding-left: 60px;\n    padding-top: 12px;\n    padding-bottom: 12px;\n  }\n\n  button {\n    position: relative;\n    margin-top: 40px;\n    padding: 12px 5px;\n\n    svg {\n      position: absolute;\n      right: 35px;\n      top: 8px;\n      font-size: 24px;\n    }\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      font-size: 17px;\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-size: 14px;\n\n  @media (min-width: 425px) {\n    font-size: 18px;\n  }\n\n  @media (min-width: 768px) {\n    font-size: 14px;\n  }\n\n  @media (min-width: 992px) {\n    font-size: ", ";\n  }\n\n  @media (min-width: 1200px) {\n    ", ";\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: column;\n  justify-content: center;\n  background-color: #1C202E;\n  padding: 0 8%;\n  box-sizing: border-box;\n  height: 100vh;\n\n  @media (min-width: 769px) {\n    height: auto;     \n  }\n\n  @media (min-width: 992px) {\n    margin-left: -80px;\n    border-radius: 54px 0px 0px 54px;\n    width: calc(50% + 80px);\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    background-repeat: no-repeat, repeat;\n    background-size: cover;\n    object-fit: cover;\n    background-position: center;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n\n  ", "\n\n  @media (min-width: 992px) {\n    width: 50%;\n    text-align:  center;\n    display: block;\n    img {\n      width: 35%;\n      margin-top: 10%;\n      margin-left: -80px;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  min-height: ", ";\n\n  flex-direction: column;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LoginContainer = _styledComponents.default.div(_templateObject(), function (_ref) {
  var isPopup = _ref.isPopup;
  return isPopup ? '500px' : '100vh';
});

exports.LoginContainer = LoginContainer;

var Side = _styledComponents.default.div(_templateObject2());

var HeroSide = _styledComponents.default.div(_templateObject3(), function (_ref2) {
  var bgimage = _ref2.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject4());
});

exports.HeroSide = HeroSide;

var LoginHeroContainer = function LoginHeroContainer(props) {
  var style = {};
  style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(".concat(props.bgimage, ")");
  return /*#__PURE__*/_react.default.createElement(HeroSide, _extends({}, props, {
    style: style
  }), props.children);
};

exports.LoginHeroContainer = LoginHeroContainer;
var FormSide = (0, _styledComponents.default)(Side)(_templateObject5());
exports.FormSide = FormSide;

var LoginWith = _styledComponents.default.div(_templateObject6(), function (_ref3) {
  var isPopup = _ref3.isPopup;
  return isPopup ? '13px' : '18px';
}, function (_ref4) {
  var isPopup = _ref4.isPopup;
  return isPopup && (0, _styledComponents.css)(_templateObject7());
});

exports.LoginWith = LoginWith;

var FormInput = _styledComponents.default.form(_templateObject8(), function (_ref5) {
  var isPopup = _ref5.isPopup;
  return isPopup ? '90%' : '100%';
});

exports.FormInput = FormInput;

var RedirectLink = _styledComponents.default.div(_templateObject9(), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject10());
}, function (props) {
  return props.theme.colors.primary;
}, function (_ref6) {
  var register = _ref6.register;
  return register && (0, _styledComponents.css)(_templateObject11(), function (_ref7) {
    var isPopup = _ref7.isPopup;
    return isPopup ? 'calc(90% - 20px)' : 'calc(80% - 20px)';
  });
}, function (_ref8) {
  var isPopup = _ref8.isPopup;
  return isPopup ? '13px' : '18px';
}, function (_ref9) {
  var isPopup = _ref9.isPopup;
  return isPopup && (0, _styledComponents.css)(_templateObject12());
});

exports.RedirectLink = RedirectLink;

var SocialButtons = _styledComponents.default.div(_templateObject13());

exports.SocialButtons = SocialButtons;

var TitleFormSide = _styledComponents.default.div(_templateObject14());

exports.TitleFormSide = TitleFormSide;

var InputWithIcon = _styledComponents.default.div(_templateObject15());

exports.InputWithIcon = InputWithIcon;