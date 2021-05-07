"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectImage = exports.Header = exports.Chevron = exports.Select = exports.Selected = exports.OptionsInner = exports.Options = exports.Option = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n        margin-left: 5px;\n        margin-right: 0;\n  "]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  width: 28px;\n  height: 28px;\n  border-radius: 1000px;\n  margin-left: 5px;\n  overflow: hidden;\n\n  ", "\n\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: baseline;\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n        margin-right: 5px;\n        margin-left: -5px;\n    "]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  margin-left: 5px;\n  margin-right: -5px;\n  ", "\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n    background: ", ";\n    color: ", ";\n    border-color: ", ";\n    border-radius: 6px;\n  "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  border-radius: 40px;\n  line-height: 34px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #1C202E;\n  color: #1C202E;\n  position: relative;\n\n  ", "\n\n  ", "\n\n  &.rectangle-select {\n    border-radius: 5px;\n    margin-bottom: 20px;\n    box-sizing: border-box;\n    > div:first-child {\n      padding: 10px 15px;\n    }\n    width: 100%;\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  padding-left: 15px;\n  padding-right: 15px;\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex: 1;\n\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 11;\n\n  p {\n    margin: 0px;\n  }\n\n  @media (max-width: 380px) {\n    padding-left: 9px;\n    padding-right: 9px;\n    font-size: 13px;\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  overflow: auto;\n  margin: ", ";\n  max-height: ", ";\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n        margin-left: -1px;\n        margin-right: 0px;\n        left: 0;\n        right: initial;\n    "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    right: 0;\n    margin-right: -1px;\n    ", "\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n        margin-right: -1px;\n        margin-left: 0px;\n        right: 0;\n        left: initial\n    "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    left: 0;\n    margin-left: -1px;\n    ", "\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  min-width: 100%;\n  background-color: #fff;\n  margin-top: 7px;\n  z-index: 10000;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #1C202E;\n  border-radius: 10px;\n  overflow: hidden;\n\n  ", "\n  ", "\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    color: #C3C3C3;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n          margin-left: 3px;\n          margin-right: 0px;\n       "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      svg {\n        margin-right: 3px;\n        ", "\n      }\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n  \n    &:hover {\n      background-color: ", ";\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      border-bottom: 1px solid #D8D8D8;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    cursor: no-drop;\n    opacity: 0.6;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding-left: 15px;\n  padding-right: 15px;\n  box-sizing: border-box;\n  min-width: 100px;\n  color: #333;\n  cursor: pointer;\n\n  ", "\n\n  ", "\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  ", "\n\n  svg {\n    vertical-align: text-top;\n  }\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Option = _styledComponents.default.div(_templateObject(), function (_ref) {
  var disabled = _ref.disabled;
  return disabled && (0, _styledComponents.css)(_templateObject2());
}, function (_ref2) {
  var optionBottomBorder = _ref2.optionBottomBorder;
  return optionBottomBorder && (0, _styledComponents.css)(_templateObject3());
}, (0, _polished.darken)(0.03, '#fafafa'), function (props) {
  return props.selected && (0, _styledComponents.css)(_templateObject4(), (0, _polished.darken)(0.07, '#fafafa'), (0, _polished.darken)(0.07, '#fafafa'));
}, function (_ref3) {
  var withIcons = _ref3.withIcons;
  return withIcons && (0, _styledComponents.css)(_templateObject5(), function (props) {
    var _props$theme;

    return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject6());
  });
}, function (_ref4) {
  var color = _ref4.color;
  return color === 'primary' && (0, _styledComponents.css)(_templateObject7());
});

exports.Option = Option;

var Options = _styledComponents.default.div(_templateObject8(), function (_ref5) {
  var position = _ref5.position;
  return (position === null || position === void 0 ? void 0 : position.toLowerCase()) === 'left' && (0, _styledComponents.css)(_templateObject9(), function (props) {
    var _props$theme2;

    return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject10());
  });
}, function (_ref6) {
  var position = _ref6.position;
  return (position === null || position === void 0 ? void 0 : position.toLowerCase()) === 'right' && (0, _styledComponents.css)(_templateObject11(), function (props) {
    var _props$theme3;

    return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject12());
  });
});

exports.Options = Options;

var OptionsInner = _styledComponents.default.div(_templateObject13(), function (_ref7) {
  var optionInnerMargin = _ref7.optionInnerMargin;
  return optionInnerMargin;
}, function (_ref8) {
  var optionInnerMaxHeight = _ref8.optionInnerMaxHeight;
  return optionInnerMaxHeight;
});

exports.OptionsInner = OptionsInner;

var Selected = _styledComponents.default.div(_templateObject14());

exports.Selected = Selected;

var Select = _styledComponents.default.div(_templateObject15(), function (props) {
  return props.open && (0, _styledComponents.css)(_templateObject16(), (0, _polished.darken)(0.07, '#CCC'));
}, function (_ref9) {
  var type = _ref9.type;
  return type === 'primary' && (0, _styledComponents.css)(_templateObject17(), function (props) {
    return props.theme.colors.btnPrimary;
  }, function (props) {
    return props.theme.colors.btnPrimaryContrast;
  }, function (props) {
    return props.theme.colors.btnPrimary;
  });
});

exports.Select = Select;

var Chevron = _styledComponents.default.div(_templateObject18(), function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject19());
});

exports.Chevron = Chevron;

var Header = _styledComponents.default.div(_templateObject20());

exports.Header = Header;

var SelectImage = _styledComponents.default.div(_templateObject21(), function (props) {
  var _props$theme5;

  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject22());
});

exports.SelectImage = SelectImage;