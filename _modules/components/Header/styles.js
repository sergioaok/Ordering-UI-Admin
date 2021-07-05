"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendFeedback = exports.OverViewControlButton = exports.RightHeader = exports.LeftHeader = exports.LogoHeader = exports.InnerHeader = exports.HeaderContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  border-radius: 100%;\n  border: none;\n  outline: none;\n  width: 35px;\n  height: 35px;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  \n  svg {\n    flex-shrink: 0;\n    font-size: 30px;\n    color: #333;\n  }\n\n  @media (min-width: 1400px) {\n    display: none;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 10px;\n  align-items: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  align-self: center;\n  display: flex;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n\n  img {\n    width: 150px;\n    height: 45px;\n    margin: 0;\n    vertical-align: middle;\n\n    @media (max-width: 768px) {\n      width: 150px;\n    }\n\n    @media (max-width: 576px) {\n      width: 55px;\n    }\n  }\n\n  img:nth-child(2) {\n    display: none;\n  }\n\n  @media (max-width: 576px) {\n    img:nth-child(1) {\n      display: none;\n    }\n    img:nth-child(2) {\n      display: block;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  color: #151824;\n  justify-content: space-between;\n  width: 98%;\n  margin: 10px auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0px;\n  z-index: 1000;\n  background-color: #fff;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  box-shadow: 0px 2px 2px #00000029;\n\n  @media print {\n    display: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderContainer = _styledComponents.default.div(_templateObject());

exports.HeaderContainer = HeaderContainer;

var InnerHeader = _styledComponents.default.div(_templateObject2());

exports.InnerHeader = InnerHeader;

var LogoHeader = _styledComponents.default.div(_templateObject3());

exports.LogoHeader = LogoHeader;

var LeftHeader = _styledComponents.default.div(_templateObject4());

exports.LeftHeader = LeftHeader;

var RightHeader = _styledComponents.default.div(_templateObject5());

exports.RightHeader = RightHeader;

var OverViewControlButton = _styledComponents.default.button(_templateObject6(), function (props) {
  return props.theme.colors.primary;
});

exports.OverViewControlButton = OverViewControlButton;

var SendFeedback = _styledComponents.default.div(_templateObject7());

exports.SendFeedback = SendFeedback;