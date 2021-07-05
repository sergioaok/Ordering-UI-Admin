"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapOrderQuickDetail = exports.WrapperOrderlabel = exports.WrapperGeneralInfo = exports.OrderInfoContainer = exports.WrapperDriverSelector = exports.OrderDetailToggleButton = exports.DeliveryName = exports.DeliveryIcon = exports.DeliveryTypeContainer = exports.SmallText = exports.BigText = exports.TextBlockContainer = exports.AccordionImage = exports.WrapperAccordionImage = exports.CheckBoxContainer = exports.OrderItemAccordionCell = exports.OrderItemAccordionContainer = exports.AccordionSection = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject19() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  & > div {\n    &:nth-child(1) {\n      width: 20%;\n    }\n\n    &:nth-child(2) {\n      width: 20%;\n    }\n\n    &:nth-child(3) {\n      width: 23%;\n    }\n\n    &:nth-child(4) {\n      flex: 1;\n      justify-content: flex-end;\n      margin: 0 5px;\n    }\n  }\n\n  @media (max-width: 1200px) {\n    & > div {\n      &:nth-child(1),\n      &:nth-child(2) {\n        width: 29%;\n      }\n    }\n  }\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #e8e8e8;\n\n  & > div {\n    \n    &:nth-child(1) {\n      width: 20%;\n      min-width: 150px;\n    }\n\n    &:nth-child(2) {\n      width: 20%;\n      min-width: 150px;\n    }\n\n    &:nth-child(3) {\n      width: 23%;\n      min-width: 150px;\n      padding: 0px;\n      p {\n        font-size: 14px;\n        font-weight: 600;\n      }\n    }\n\n    &:nth-child(4) {\n      min-width: 40px;\n      width: 6%;\n      font-size: 14px;\n    }\n\n    \n    &:nth-child(5) {\n      width: 22%;\n      min-width: 170px;\n      display: block;\n      justify-content: initial;\n      text-align: center;\n\n      p {\n        font-size: 12px;\n      }\n    }\n\n    &:nth-child(6) {\n      width: 9%;\n      width: 9%;\n      min-width: 120px;\n      display: flex;\n      justify-content: flex-end;\n    }\n  }\n\n  @media (max-width: 1200px) {\n    & > div {\n      &:nth-child(3),\n      &:nth-child(4) {\n        display: none;\n      }\n    }\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  > div {\n    border: none;\n    margin: 0 -15px;\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  margin: 0 5px;\n  margin-top: 3px;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  margin: 0px;\n  color: #343434;  \n  font-size: 9px;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  width: 25px;\n  height: 30px;\n\n  img {\n    width: 100%;\n    height: 100%;\n    border-radius: unset;\n    border: none;\n  }\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  color: #343434;\n  font-size: 12px;\n  margin: 0px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  color: #000000;\n  margin: 0px;\n  font-weight: 600;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 14px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);

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
  var data = _taggedTemplateLiteral(["\n  max-width: 45px;\n  max-height: 45px;\n  height: 45px;\n  width: 45px;\n  border: 1px solid #E3E3E3;\n  border-radius: 10px;\n\n  svg {\n    width: 100%;\n    height: 100%;\n    padding: 7px;\n    box-sizing: border-box;\n    border-radius: 50%;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: #404040;\n  svg {\n    width: 20px;\n    height: 20px;\n    circle {\n      fill: #ccc;\n    }\n  }\n\n  &:hover {\n    svg {\n      circle {\n        fill: #404040;\n      }\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      margin-right: auto;\n      margin-left: initial;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 8px;\n  padding: 15px 0;\n\n  .rotate {\n    transform: rotate(180deg);\n  }\n\n  .accordion__icon {\n    margin-left: auto;\n    transition: transform 0.6s ease;\n    ", "\n  }\n\n  & > div {\n    & > div {\n      &:first-child {\n        p {\n          margin: 0px;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          overflow: hidden;\n          max-width: 165px;   \n        }\n      }\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0px 0px 3px #00000029;\n  border-radius: 6px;\n  border-left: 7px solid;\n  border-color: ", ";\n  margin-bottom: 10px;\n  position: initial;\n\n  & > div {\n    &: first-child {\n      width: 15%;\n      min-width: 180px;\n      align-items: center;\n      column-gap: 0px;\n      padding: 0px;\n      & > div {\n        &:first-child {\n          padding: 0 5px;\n          height: 90px;\n          display: flex;\n          align-items: center;\n        }\n      }    \n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  background: #FFF;\n  cursor: pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AccordionSection = _styledComponents.default.div(_templateObject());

exports.AccordionSection = AccordionSection;

var OrderItemAccordionContainer = _styledComponents.default.div(_templateObject2(), function (_ref) {
  var filterColor = _ref.filterColor;
  return filterColor || '#0E9B55';
});

exports.OrderItemAccordionContainer = OrderItemAccordionContainer;

var OrderItemAccordionCell = _styledComponents.default.div(_templateObject3(), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _react.css)(_templateObject4());
});

exports.OrderItemAccordionCell = OrderItemAccordionCell;

var CheckBoxContainer = _styledComponents.default.div(_templateObject5());

exports.CheckBoxContainer = CheckBoxContainer;

var WrapperAccordionImage = _styledComponents.default.div(_templateObject6());

exports.WrapperAccordionImage = WrapperAccordionImage;

var AccordionImageStyled = _styledComponents.default.div(_templateObject7());

var AccordionImage = function AccordionImage(props) {
  return /*#__PURE__*/_react.default.createElement(AccordionImageStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};

exports.AccordionImage = AccordionImage;

var TextBlockContainer = _styledComponents.default.div(_templateObject8());

exports.TextBlockContainer = TextBlockContainer;

var BigText = _styledComponents.default.p(_templateObject9());

exports.BigText = BigText;

var SmallText = _styledComponents.default.p(_templateObject10());

exports.SmallText = SmallText;

var DeliveryTypeContainer = _styledComponents.default.div(_templateObject11());

exports.DeliveryTypeContainer = DeliveryTypeContainer;

var DeliveryIcon = _styledComponents.default.div(_templateObject12());

exports.DeliveryIcon = DeliveryIcon;

var DeliveryName = _styledComponents.default.p(_templateObject13());

exports.DeliveryName = DeliveryName;

var OrderDetailToggleButton = _styledComponents.default.span(_templateObject14());

exports.OrderDetailToggleButton = OrderDetailToggleButton;

var WrapperDriverSelector = _styledComponents.default.div(_templateObject15());

exports.WrapperDriverSelector = WrapperDriverSelector;

var OrderInfoContainer = _styledComponents.default.div(_templateObject16());

exports.OrderInfoContainer = OrderInfoContainer;

var WrapperGeneralInfo = _styledComponents.default.div(_templateObject17());

exports.WrapperGeneralInfo = WrapperGeneralInfo;

var WrapperOrderlabel = _styledComponents.default.div(_templateObject18());

exports.WrapperOrderlabel = WrapperOrderlabel;

var WrapOrderQuickDetail = _styledComponents.default.div(_templateObject19());

exports.WrapOrderQuickDetail = WrapOrderQuickDetail;