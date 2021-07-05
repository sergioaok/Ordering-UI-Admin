"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkeletonWrapper = exports.SubCategoryWrapper = exports.IframeWrapper = exports.MoreInfo = exports.AllSetting = exports.VideoContainer = exports.Description = exports.CategoryDescriptionExtraContent = exports.CategoryName = exports.Content = exports.HeaderIcons = exports.DescriptionHeader = exports.DescriptionContent = exports.Container = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 25px;\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 25px;\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  padding-top: 35px;\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  user-selected: none;\n  color: ", ";\n  text-decoration: underline;\n  margin-top: 40px;\n  font-size: 14px;\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  user-select: none;\n  cursor: pointer;\n  margin-top: 36px;\n  span {\n    font-weight: 600;\n    font-size: 14px;\n    color: #03459E;\n  }\n  svg {\n    color: #03459E;\n  }\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  margin-top: 48px;\n  height: 300px;\n  background: #E9ECEF;\n  border-radius: 7.6px;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  video {\n    object-fit: cover;\n    height: 100%;\n    background: #E9ECEF;\n  }\n\n  svg {\n    top: 45%;\n    left: 45%;\n    position: absolute;\n    color: #748194;\n    font-size: 34px;\n  }\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 40px;\n  font-size: 14px;\n  color: #344050;\n  margin-bottom: 0px;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n      right: 20px;\n    "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n      left: 20px;\n    "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    border-left: 1px solid #E9ECEF;\n  "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    border-right: 1px solid #E9ECEF;\n  "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  padding: 26px;\n  box-sizing: border-box;\n  width: 100%;\n\n  ", "\n\n  > button {\n    z-index: 100;\n    position: absolute;\n    top: 20px;\n    ", "\n    svg {\n      width: 24px;\n      height: 24px;\n      color: #344050;\n    }\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  p {\n    font-weight: bold;\n    font-size: 20px;\n    color: #344050;\n    margin-bottom: 6px;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 28px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  svg {\n    width: 24px;\n    height: 24px;\n    cursor: pointer;\n    color: #344050;\n\n    &:first-child {\n      color: #B1BCCC;\n      margin-right: 20px;\n    }\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  padding: 26px 40px;\n  box-sizing: border-box;\n  width: 100%;\n  overflow-x: hidden;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    right: 0px;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    left: 0px;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      border-left: 1px solid #CCC;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      border-right: 1px solid #CCC;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    box-shadow: none;\n\n    ", "\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 0;\n  position: fixed;\n  box-shadow: -4px 0px 7px #ccc;\n\n  ", "\n  background: #FFF;\n  height: 100vh;\n  top: 0px;\n  z-index: 1001;\n  overflow-x: hidden;\n  transition: 0.3s;\n\n  ", "\n  @media print {\n    box-shadow: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject(), function (_ref) {
  var isDriverOrders = _ref.isDriverOrders;
  return isDriverOrders && (0, _styledComponents.css)(_templateObject2(), function (props) {
    var _props$theme;

    return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) ? (0, _styledComponents.css)(_templateObject3()) : (0, _styledComponents.css)(_templateObject4());
  });
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) ? (0, _styledComponents.css)(_templateObject5()) : (0, _styledComponents.css)(_templateObject6());
});

exports.Container = Container;

var DescriptionContent = _styledComponents.default.div(_templateObject7());

exports.DescriptionContent = DescriptionContent;

var DescriptionHeader = _styledComponents.default.div(_templateObject8());

exports.DescriptionHeader = DescriptionHeader;

var HeaderIcons = _styledComponents.default.div(_templateObject9());

exports.HeaderIcons = HeaderIcons;

var Content = _styledComponents.default.div(_templateObject10());

exports.Content = Content;

var CategoryName = _styledComponents.default.div(_templateObject11());

exports.CategoryName = CategoryName;

var CategoryDescriptionExtraContent = _styledComponents.default.div(_templateObject12(), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) ? (0, _styledComponents.css)(_templateObject13()) : (0, _styledComponents.css)(_templateObject14());
}, function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) ? (0, _styledComponents.css)(_templateObject15()) : (0, _styledComponents.css)(_templateObject16());
});

exports.CategoryDescriptionExtraContent = CategoryDescriptionExtraContent;

var Description = _styledComponents.default.p(_templateObject17());

exports.Description = Description;

var VideoContainer = _styledComponents.default.div(_templateObject18());

exports.VideoContainer = VideoContainer;

var AllSetting = _styledComponents.default.div(_templateObject19());

exports.AllSetting = AllSetting;

var MoreInfo = _styledComponents.default.span(_templateObject20(), function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.primary;
});

exports.MoreInfo = MoreInfo;

var IframeWrapper = _styledComponents.default.div(_templateObject21());

exports.IframeWrapper = IframeWrapper;

var SubCategoryWrapper = _styledComponents.default.div(_templateObject22());

exports.SubCategoryWrapper = SubCategoryWrapper;

var SkeletonWrapper = _styledComponents.default.div(_templateObject23());

exports.SkeletonWrapper = SkeletonWrapper;