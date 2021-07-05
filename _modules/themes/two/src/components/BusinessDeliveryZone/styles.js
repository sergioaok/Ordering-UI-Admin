"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddButton = exports.AddDeliveryZoneButton = exports.ActionsWrapper = exports.DropDownWrapper = exports.EnableWrapper = exports.ZoneActions = exports.ZonePrice = exports.ZoneMin = exports.ZoneName = exports.DeliveryZoneFormWrapper = exports.DeliveryZoneWrapper = exports.DeliveryZonesContainer = exports.Header = exports.ZoneContainer = exports.MainContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  background: transparent;\n  border: none;\n  outline: unset;\n  svg {\n    font-size: 20px;\n    color: ", ";\n  }\n\n  span {\n    font-size: 14px;\n    color: ", ";\n  }\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 14px;\n  padding: 10px 0;\n  cursor: pointer;\n  width: fit-content;\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  button {\n    background: #F8F9FA !important;\n    border: none;\n    padding: 0px;\n    svg {\n      color: ", ";\n    }\n\n    &:after {\n      display: none;\n    }\n  }\n\n  > div {\n    > div {\n      border: 1px solid #E9ECEF;\n      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n      border-radius: 8px;\n      a:last-child {\n        color: #E63757;\n      }\n    }\n  }\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n      padding-right: 10px;\n    "]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n      padding-left: 10px;\n    "]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n\n  span {\n    font-size: 14px;\n\n    ", "\n  }\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  width: 140px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n    margin-right: 5px;\n  "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n    margin-left: 5px;\n  "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  width: 60px;\n  ", "\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    margin-right: 5px;\n  "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    margin-left: 5px;\n  "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  width: 60px;\n  ", "\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    margin-right: 5px;\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    margin-left: 5px;\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  ", "\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #E9ECEF;\n  > div {\n    color: ", ";\n    font-size: 14px;\n    padding: 10px 0;\n    >input{\n      width: 100%;\n      color: ", ";\n      border: 1px dashed ", ";\n      outline: none;\n      &::placeholder,\n      &::-webkit-input-placeholder {\n        color: #c9c9c9;\n      }\n      &:focus {\n        border: 1px dashed ", ";\n      }\n    }\n    input::-webkit-outer-spin-button,\n    input::-webkit-inner-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n\n    input[type=number] {\n      -moz-appearance: textfield;\n    }\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #E9ECEF;\n  > div {\n    color: ", ";\n    font-size: 14px;\n    padding: 10px 0;\n    >input{\n      width: 100%;\n      color: ", ";\n      border: 1px dashed ", ";\n      outline: none;\n      &::placeholder,\n      &::-webkit-input-placeholder {\n        color: #c9c9c9;\n      }\n      &:focus {\n        border: 1px dashed ", ";\n      }\n    }\n    input::-webkit-outer-spin-button,\n    input::-webkit-inner-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n\n    input[type=number] {\n      -moz-appearance: textfield;\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  > div:first-child {\n    > div {\n      font-weight: 600;\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  h1 {\n    font-size: 24px;\n    color: ", ";\n  }\n\n  svg {\n    color: ", ";\n    font-size: 24px;\n    ", "\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  @media (min-width: 576px) {\n    padding: 20px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  height: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MainContainer = _styledComponents.default.div(_templateObject());

exports.MainContainer = MainContainer;

var ZoneContainer = _styledComponents.default.div(_templateObject2());

exports.ZoneContainer = ZoneContainer;

var Header = _styledComponents.default.div(_templateObject3(), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) ? (0, _styledComponents.css)(_templateObject4()) : (0, _styledComponents.css)(_templateObject5());
});

exports.Header = Header;

var DeliveryZonesContainer = _styledComponents.default.div(_templateObject6());

exports.DeliveryZonesContainer = DeliveryZonesContainer;

var DeliveryZoneWrapper = _styledComponents.default.div(_templateObject7(), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.primary;
});

exports.DeliveryZoneWrapper = DeliveryZoneWrapper;

var DeliveryZoneFormWrapper = _styledComponents.default.form(_templateObject8(), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.primary;
});

exports.DeliveryZoneFormWrapper = DeliveryZoneFormWrapper;

var ZoneName = _styledComponents.default.div(_templateObject9(), function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) ? (0, _styledComponents.css)(_templateObject10()) : (0, _styledComponents.css)(_templateObject11());
});

exports.ZoneName = ZoneName;

var ZoneMin = _styledComponents.default.div(_templateObject12(), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) ? (0, _styledComponents.css)(_templateObject13()) : (0, _styledComponents.css)(_templateObject14());
});

exports.ZoneMin = ZoneMin;

var ZonePrice = _styledComponents.default.div(_templateObject15(), function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) ? (0, _styledComponents.css)(_templateObject16()) : (0, _styledComponents.css)(_templateObject17());
});

exports.ZonePrice = ZonePrice;

var ZoneActions = _styledComponents.default.div(_templateObject18());

exports.ZoneActions = ZoneActions;

var EnableWrapper = _styledComponents.default.div(_templateObject19(), function (props) {
  var _props$theme5;

  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) ? (0, _styledComponents.css)(_templateObject20()) : (0, _styledComponents.css)(_templateObject21());
});

exports.EnableWrapper = EnableWrapper;

var DropDownWrapper = _styledComponents.default.div(_templateObject22(), function (props) {
  return props.theme.colors.headingColor;
});

exports.DropDownWrapper = DropDownWrapper;

var ActionsWrapper = _styledComponents.default.div(_templateObject23());

exports.ActionsWrapper = ActionsWrapper;

var AddDeliveryZoneButton = _styledComponents.default.div(_templateObject24(), function (props) {
  return props.theme.colors.lightGray;
});

exports.AddDeliveryZoneButton = AddDeliveryZoneButton;

var AddButton = _styledComponents.default.button(_templateObject25(), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.headingColor;
});

exports.AddButton = AddButton;