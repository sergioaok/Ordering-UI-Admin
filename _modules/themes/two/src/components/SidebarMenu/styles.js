"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubMenu = exports.MenuContent = exports.MenuContainer = exports.MenuClose = exports.IconContent = exports.CollapseButton = exports.UserInfo = exports.SidebarContent = exports.LogoWrap = exports.SidebarInnerContainer = exports.SidebarContainer = exports.Header = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject29() {
  var data = _taggedTemplateLiteral(["\n    margin-left: 40px;\n  "]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["\n    margin-right: 40px;\n  "]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n  "]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  padding: 5px 0;\n  font-size: 14px;\n  color: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  ", "\n  ", "\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n  padding: 5px 0;\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n  margin: 5px 0;\n  > button {\n    width: 100%;\n    text-align: initial;\n  }\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  height: 60px;\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n      left: initial;\n      right: 10px;\n    "]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n      right: initial;\n      left: 10px;\n    "]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n    ", "\n  "]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n    left: 10px;\n  "]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n    right: 10px;\n  "]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  cursor: pointer;\n  top: 9px;\n  ", "\n\n  ", "\n  width: 35px;\n  height: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 100%;\n  background-color: rgb(247, 247, 247);\n  box-shadow: transparent 0px 0px 0px 1px inset;\n\n  svg {\n    flex-shrink: 0;\n    font-size: 30px;\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n    svg {\n      transform: rotate(180deg);\n    }\n  "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n    right: -15px;\n  "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    left: -15px;\n  "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  top: 25px;\n  ", "\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  cursor: pointer;\n  svg {\n    font-size: 18px;\n    transition: transform 0.4s ease;\n  }\n\n  ", "\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n      border-right: 1px solid #E9ECEF;\n    "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n      border-left: 1px solid #E9ECEF;\n    "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  border-top: 1px solid #E9ECEF;\n  transition: 0.1s;\n\n  @media (min-width: 760px) {\n    ", "\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n      border-right: 1px solid #E9ECEF;\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n      border-left: 1px solid #E9ECEF;\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  box-sizing: border-box;\n  transition: 0.1s;\n  button {\n    display: flex;\n    font-size: 14px;\n    box-sizing: border-box;\n    svg {\n      font-size: 20px;\n    }\n  }\n\n  @media (min-width: 760px) {\n    ", "\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  height: 60px;\n  box-sizing: border-box;\n  background-color: #FFF;\n\n  @media (min-width: 760px) {\n    height: 80px;\n    border-bottom: 1px solid #CCC;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      border-right: 1px solid #E9ECEF;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      border-left: 1px solid #E9ECEF;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  @media (min-width: 760px) {\n    height: 100vh;\n    position: sticky;\n    top: 0px;\n    ", "\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  @media print {\n    display: none;\n  }\n  transition: width 0.4s ease;\n  position: fixed;\n  z-index: 1000;\n  background-color: #FFF;\n  width: 0px;\n  height: 100vh;\n  overflow: hidden;\n\n  @media (min-width: 760px) {\n    height: inherit;\n    overflow: inherit;\n    position: relative;\n    width: ", " !important;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  width: 100vw;\n  border-bottom: 1px solid #CCC;\n  z-index: 1000;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _styledComponents.default.div(_templateObject());

exports.Header = Header;

var SidebarContainer = _styledComponents.default.div(_templateObject2(), function (_ref) {
  var isCollapse = _ref.isCollapse;
  return isCollapse ? '65px' : '240px';
});

exports.SidebarContainer = SidebarContainer;

var SidebarInnerContainer = _styledComponents.default.div(_templateObject3(), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) ? (0, _styledComponents.css)(_templateObject4()) : (0, _styledComponents.css)(_templateObject5());
});

exports.SidebarInnerContainer = SidebarInnerContainer;

var LogoWrap = _styledComponents.default.div(_templateObject6());

exports.LogoWrap = LogoWrap;

var SidebarContent = _styledComponents.default.div(_templateObject7(), function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) ? (0, _styledComponents.css)(_templateObject8()) : (0, _styledComponents.css)(_templateObject9());
});

exports.SidebarContent = SidebarContent;

var UserInfo = _styledComponents.default.div(_templateObject10(), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) ? (0, _styledComponents.css)(_templateObject11()) : (0, _styledComponents.css)(_templateObject12());
});

exports.UserInfo = UserInfo;

var CollapseButton = _styledComponents.default.div(_templateObject13(), function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) ? (0, _styledComponents.css)(_templateObject14()) : (0, _styledComponents.css)(_templateObject15());
}, function (_ref2) {
  var isCollapse = _ref2.isCollapse;
  return isCollapse && (0, _styledComponents.css)(_templateObject16());
});

exports.CollapseButton = CollapseButton;

var IconContent = _styledComponents.default.span(_templateObject17(), function (props) {
  var _props$theme5;

  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) ? (0, _styledComponents.css)(_templateObject18()) : (0, _styledComponents.css)(_templateObject19());
}, function (_ref3) {
  var isClose = _ref3.isClose;
  return isClose && (0, _styledComponents.css)(_templateObject20(), function (props) {
    var _props$theme6;

    return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) ? (0, _styledComponents.css)(_templateObject21()) : (0, _styledComponents.css)(_templateObject22());
  });
});

exports.IconContent = IconContent;

var MenuClose = _styledComponents.default.div(_templateObject23());

exports.MenuClose = MenuClose;

var MenuContainer = _styledComponents.default.div(_templateObject24());

exports.MenuContainer = MenuContainer;

var MenuContent = _styledComponents.default.div(_templateObject25());

exports.MenuContent = MenuContent;

var SubMenu = _styledComponents.default.div(_templateObject26(), function (props) {
  return props.theme.colors.lightGray;
}, function (_ref4) {
  var active = _ref4.active;
  return active && (0, _styledComponents.css)(_templateObject27(), function (props) {
    return props.theme.colors.primary;
  });
}, function (props) {
  var _props$theme7;

  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) ? (0, _styledComponents.css)(_templateObject28()) : (0, _styledComponents.css)(_templateObject29());
});

exports.SubMenu = SubMenu;