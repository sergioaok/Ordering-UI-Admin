"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MetaAddForm = exports.NoMetaField = exports.RoundBorder = exports.MetaAddContainer = exports.MetaContainer = exports.MetaTitle = exports.WrapMetaFields = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  button[type='submit'] {\n    outline: none;\n    background: transparent;\n    border: none;\n    padding: 0px;\n    height: fit-content\n  }\n\n  .select-input {\n    width: 100%;\n\n    svg {\n      color: #000;\n    }\n  }\n  \n  .json_editor {\n    width: 100%;\n    height: 300px;\n    > div {\n      height: 100%;\n    }\n    .jsoneditor {\n      border: 1px solid #182964;\n      > div.jsoneditor-menu {\n        background-color: #182964;\n        border-bottom: 1px solid #182964;\n      }\n    }\n    .jsoneditor-search {\n      display: none;\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-size: 14px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid #c2c2c2;\n  border-radius: 20px;\n  padding: 5px 15px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  input {\n    border: 1px solid #c2c2c2;\n    border-radius: 20px;\n    padding: 5px 15px;\n    outline: none;\n    font-size: 16px;\n    box-sizing: border-box;\n    width: 100%;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin-bottom: 20px;\n\n  .meta_type {\n    width: 20%;\n  }\n  .meta_key {\n    width: 25%;\n    padding: 0 10px;\n    box-sizing: border-box;\n  }\n\n  .meta_value {\n    flex: 1;\n    word-break: break-all;\n    display: flex;\n    column-gap: 10px;\n    > div {\n      width: 100%;\n    }\n    svg {\n      font-size: 24px;\n      color: darkRed;\n      cursor: pointer;\n    }\n  }\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 18px;\n  font-weight: 600;  \n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px;\n  box-sizing: border-box;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var WrapMetaFields = _styledComponents.default.div(_templateObject());

exports.WrapMetaFields = WrapMetaFields;

var MetaTitle = _styledComponents.default.p(_templateObject2());

exports.MetaTitle = MetaTitle;

var MetaContainer = _styledComponents.default.div(_templateObject3());

exports.MetaContainer = MetaContainer;
var MetaAddContainer = (0, _styledComponents.default)(MetaContainer)(_templateObject4());
exports.MetaAddContainer = MetaAddContainer;

var RoundBorder = _styledComponents.default.div(_templateObject5());

exports.RoundBorder = RoundBorder;

var NoMetaField = _styledComponents.default.p(_templateObject6());

exports.NoMetaField = NoMetaField;

var MetaAddForm = _styledComponents.default.form(_templateObject7());

exports.MetaAddForm = MetaAddForm;