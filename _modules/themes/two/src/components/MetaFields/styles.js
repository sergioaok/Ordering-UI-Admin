"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSpinnerLoader = exports.SkeletonItem = exports.MetaAddForm = exports.NoMetaField = exports.RoundBorder = exports.MetaAddContainer = exports.MetaContainer = exports.MetaTitle = exports.WrapMetaFields = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  > div {\n    position: absolute;\n    top: 0px;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 10px 0;\n\n  span {\n    border-radius: 5px;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  button[type='submit'] {\n    outline: none;\n    background: transparent;\n    border: none;\n    padding: 0px;\n    height: fit-content\n  }\n\n  .select-input {\n    width: 100%;\n\n    svg {\n      color: #000;\n    }\n  }\n  \n  .json_editor {\n    width: 100%;\n    height: 300px;\n    > div {\n      height: 100%;\n    }\n    .jsoneditor {\n      border: 1px solid ", ";\n      > div.jsoneditor-menu {\n        background-color: ", ";\n        border-bottom: 1px solid ", ";\n      }\n    }\n    .jsoneditor-search {\n      display: none;\n    }\n  }\n"]);

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
  var data = _taggedTemplateLiteral(["\n  border: 1px solid #c2c2c2;\n  border-radius: 5px;\n  padding: 5px 10px;\n  font-size: 14px;\n  color: ", ";\n  overflow: hidden;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  input {\n    border: 1px solid #c2c2c2;\n    border-radius: 5px;\n    padding: 5px 10px;\n    outline: none;\n    font-size: 16px;\n    box-sizing: border-box;\n    width: 100%;\n  }\n\n  button {\n    svg {\n      color: ", " !important;\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin-bottom: 20px;\n  color: ", ";\n\n  .meta_type {\n    width: 25%;\n    font-size: 14px;\n  }\n  .meta_key {\n    width: 25%;\n    padding: 0 10px;\n    box-sizing: border-box;\n  }\n\n  .meta_value {\n    flex: 1;\n    word-break: break-all;\n    display: flex;\n    column-gap: 10px;\n    > div {\n      width: 100%;\n    }\n    svg {\n      font-size: 20px;\n      color: ", ";\n      cursor: pointer;\n    }\n  }\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 20px;\n  font-weight: 600;\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding-top: 10px;\n  box-sizing: border-box;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var WrapMetaFields = _styledComponents.default.div(_templateObject());

exports.WrapMetaFields = WrapMetaFields;

var MetaTitle = _styledComponents.default.p(_templateObject2(), function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
});

exports.MetaTitle = MetaTitle;

var MetaContainer = _styledComponents.default.div(_templateObject3(), function (props) {
  var _props$theme$colors2;

  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.headingColor;
}, function (props) {
  var _props$theme$colors3;

  return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.headingColor;
});

exports.MetaContainer = MetaContainer;
var MetaAddContainer = (0, _styledComponents.default)(MetaContainer)(_templateObject4(), function (props) {
  return props.theme.colors.primary;
});
exports.MetaAddContainer = MetaAddContainer;

var RoundBorder = _styledComponents.default.div(_templateObject5(), function (props) {
  var _props$theme$colors4;

  return (_props$theme$colors4 = props.theme.colors) === null || _props$theme$colors4 === void 0 ? void 0 : _props$theme$colors4.headingColor;
});

exports.RoundBorder = RoundBorder;

var NoMetaField = _styledComponents.default.p(_templateObject6());

exports.NoMetaField = NoMetaField;

var MetaAddForm = _styledComponents.default.form(_templateObject7(), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});

exports.MetaAddForm = MetaAddForm;

var SkeletonItem = _styledComponents.default.div(_templateObject8());

exports.SkeletonItem = SkeletonItem;

var WrapperSpinnerLoader = _styledComponents.default.div(_templateObject9());

exports.WrapperSpinnerLoader = WrapperSpinnerLoader;