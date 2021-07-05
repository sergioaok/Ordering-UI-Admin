"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperAddressnotes = exports.WrapperGoogleAutoCompleteInput = exports.WrapperTimezone = exports.WrapperCitySelector = exports.Section = exports.WrapperMap = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 25px;\n  label {\n    color: ", ";\n    margin-bottom: 5px;\n  }\n\n  textarea {\n    width: 100%;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  label {\n    color: ", ";\n    margin-bottom: 5px;\n  }\n  .input-autocomplete {\n    width: 100%;\n    background: #FFF;\n    border: 1px solid #DBDCDB;\n    border-radius: 8px;\n    font-size: 16px;\n    padding: 7px 15px;\n    outline: none;\n    ::placeholder {\n      color: #DBDCDB;\n    }\n\n    &:-ms-input-placeholder {\n      color: #DBDCDB;\n    }\n\n    &::-ms-input-placeholder { /* Microsoft Edge */\n      color: #DBDCDB;\n    }\n    &:focus {\n      border-color: ", ";\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  p {\n    &:first-child {\n      color: ", ";\n      margin-bottom: 5px;\n    }\n    &:last-child {\n      margin: 0;\n      padding: 10px 0;\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  > p {\n    color: ", ";\n    margin-bottom: 5px;\n  }\n  > div {\n    background: #F8F9FA;\n    border: none;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin: 20px 0;\n  > div {\n    width: 48%;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 150px;\n  > div {\n    position: relative !important;\n    width: 100% !important;\n    height: 100% !important;\n    border-radius: 8px;\n  }\n\n  @media (min-width: 768px) {\n    height: 180px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  min-height: calc(100% - 130px);\n  > button {\n    position: sticky;\n    top: 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject());

exports.Container = Container;

var WrapperMap = _styledComponents.default.div(_templateObject2());

exports.WrapperMap = WrapperMap;

var Section = _styledComponents.default.div(_templateObject3());

exports.Section = Section;

var WrapperCitySelector = _styledComponents.default.div(_templateObject4(), function (props) {
  return props.theme.colors.headingColor;
});

exports.WrapperCitySelector = WrapperCitySelector;

var WrapperTimezone = _styledComponents.default.div(_templateObject5(), function (props) {
  return props.theme.colors.headingColor;
});

exports.WrapperTimezone = WrapperTimezone;

var WrapperGoogleAutoCompleteInput = _styledComponents.default.div(_templateObject6(), function (props) {
  return props.theme.colors.headingColor;
}, function () {
  return (0, _polished.darken)(0.07, '#CCC');
});

exports.WrapperGoogleAutoCompleteInput = WrapperGoogleAutoCompleteInput;

var WrapperAddressnotes = _styledComponents.default.div(_templateObject7(), function (props) {
  return props.theme.colors.headingColor;
});

exports.WrapperAddressnotes = WrapperAddressnotes;