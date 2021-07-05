"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriverImage = exports.WrapperDriverImage = exports.PhoneContainer = exports.DriverText = exports.DriverName = exports.DriverNameContainer = exports.OptionContent = exports.Option = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n    border-radius: 3px;\n  "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 10px;\n  ", "\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    width: 25px;\n    height: 25px;\n    border-radius: 5px;\n    svg {\n      padding: 3px;\n    }\n  "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  width: 45px;\n  height: 45px;\n  border: 1px solid #E3E3E3;\n  border-radius: 10px;\n  display: flex;\n\n  svg {\n    width: 100%;\n    height: 100%;\n    padding: 7px;\n    box-sizing: border-box;\n    border-radius: 50%;\n  }\n\n  ", "\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 10px;\n  color: #000000;\n\n  @media (max-width: 1200px) {\n    display: none;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    font-size: 8px;\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  font-size: 12px;\n  ", "\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    font-size: 11px;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  font-size: 16px;\n  line-height: 1.3;\n  color: #000;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 150px;\n  margin: 0px;\n\n  ", "\n\n  @media (max-width: 576px) {\n    max-width: 90px;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    font-size: 8px;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  line-height: 1.3;\n  color: #263238;\n\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    column-gap: 5px;\n    padding: 5px 0px;\n    img {\n      width: 25px;\n    }\n  "]);

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
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 8px;\n  padding: ", ";\n  white-space: nowrap;\n  ", "\n\n  img {\n    width: 45px;\n    border-radius: 5px;\n  }\n\n  ", "\n\n  @media (max-width: 576px) {\n    padding: 5px 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Option = _styledComponents.default.div(_templateObject(), function (_ref) {
  var padding = _ref.padding;
  return padding || '5px 10px';
}, function (_ref2) {
  var isPhoneView = _ref2.isPhoneView;
  return isPhoneView && (0, _styledComponents.css)(_templateObject2());
}, function (_ref3) {
  var small = _ref3.small;
  return small && (0, _styledComponents.css)(_templateObject3());
});

exports.Option = Option;

var OptionContent = _styledComponents.default.div(_templateObject4());

exports.OptionContent = OptionContent;

var DriverNameContainer = _styledComponents.default.div(_templateObject5(), function (_ref4) {
  var small = _ref4.small;
  return small && (0, _styledComponents.css)(_templateObject6());
});

exports.DriverNameContainer = DriverNameContainer;

var DriverName = _styledComponents.default.p(_templateObject7(), function (_ref5) {
  var small = _ref5.small;
  return small && (0, _styledComponents.css)(_templateObject8());
});

exports.DriverName = DriverName;

var DriverText = _styledComponents.default.span(_templateObject9(), function (_ref6) {
  var small = _ref6.small;
  return small && (0, _styledComponents.css)(_templateObject10());
});

exports.DriverText = DriverText;

var PhoneContainer = _styledComponents.default.div(_templateObject11());

exports.PhoneContainer = PhoneContainer;

var WrapperDriverImage = _styledComponents.default.div(_templateObject12(), function (_ref7) {
  var small = _ref7.small;
  return small && (0, _styledComponents.css)(_templateObject13());
});

exports.WrapperDriverImage = WrapperDriverImage;

var DriverImageStyled = _styledComponents.default.div(_templateObject14(), function (_ref8) {
  var small = _ref8.small;
  return small && (0, _styledComponents.css)(_templateObject15());
});

var DriverImage = function DriverImage(props) {
  return /*#__PURE__*/_react.default.createElement(DriverImageStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};

exports.DriverImage = DriverImage;