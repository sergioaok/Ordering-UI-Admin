"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewField = exports.SettingItemDescription = exports.NewItem = exports.Title = exports.TitleContainer = exports.SettingItemContent = exports.IconWrapper = exports.SettingItemContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  background: #E9F2FE;\n  border-radius: 50px;\n  padding: 2px 8px;\n  font-size: 10px;\n  color: #2C7BE5;\n  margin-left: 12px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  font-weight: normal;\n  font-size: 10px;\n  color: #909BA9;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-size: 10px;\n  color: #2C7BE5;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 500;\n  font-size: 12px;\n  color: #344050;\n  margin-right: 14px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 64px;\n  height: 64px;\n\n  img {\n    width: 24px;\n    height: 24px;\n  }\n  svg {\n    font-size: 24px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  margin: 35px 0;\n\n  @media (max-width: 576px) {\n    flex-direction: column;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SettingItemContainer = _styledComponents.default.div(_templateObject());

exports.SettingItemContainer = SettingItemContainer;

var IconWrapper = _styledComponents.default.div(_templateObject2());

exports.IconWrapper = IconWrapper;

var SettingItemContent = _styledComponents.default.div(_templateObject3());

exports.SettingItemContent = SettingItemContent;

var TitleContainer = _styledComponents.default.div(_templateObject4());

exports.TitleContainer = TitleContainer;

var Title = _styledComponents.default.p(_templateObject5());

exports.Title = Title;

var NewItem = _styledComponents.default.p(_templateObject6());

exports.NewItem = NewItem;

var SettingItemDescription = _styledComponents.default.div(_templateObject7());

exports.SettingItemDescription = SettingItemDescription;

var NewField = _styledComponents.default.span(_templateObject8());

exports.NewField = NewField;