"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkeletonWrapper = exports.Option = exports.DropDownContent = exports.Required = exports.DropDownHeader = exports.DropDownContainer = exports.FormGroupWrapper = exports.FormGroupCheck = exports.FormGroupText = exports.FormContainer = exports.ImageContainer = exports.GeneralDescription = exports.GeneralTitle = exports.GeneralContainer = exports.SubCategoryContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 25px;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    column-gap: 10px;\n    font-size: 13px;\n    line-height: 2;\n    font-weight: 500;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px 16px;\n  p {\n    font-size: 14px;\n    color: #748194;\n  }\n  .select {\n    border: none;\n    width: 100%;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 10px;\n  color: #E63757;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  p {\n    font-size: 14px;\n    color: #344050;\n    margin: 0;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  padding-top: 20px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 16px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #E9ECEF;\n\n  input {\n    width: 16px;\n    height: 16px;\n    box-sizing: border-box;\n    border-radius: 2px;\n    margin-right: 10px;\n  }\n  label {\n    font-size: 14px;\n    display: flex;\n    align-items: center;\n    color: #344050;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n\n  label {\n    margin-bottom: 10px;\n    font-size: 14px;\n    color: #344050;\n  }\n\n  input[type='text'] {\n    font-size: 14px;\n    height: 44px;\n    border: 1px solid #DEE2E6;\n    box-sizing: border-box;\n    border-radius: 7.6px;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 20px;\n\n  button {\n    background: #0d6efd !important;\n    color: white !important;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 315px;\n  height: 187px;\n  background: #E9ECEF;\n  border-radius: 7.6px\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 12px;\n  color: #344050;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n  p {\n    margin: 0;\n    font-weight: 600;\n    font-size: 16px;\n    color: #344050;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 15px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SubCategoryContainer = _styledComponents.default.div(_templateObject());

exports.SubCategoryContainer = SubCategoryContainer;

var GeneralContainer = _styledComponents.default.div(_templateObject2());

exports.GeneralContainer = GeneralContainer;

var GeneralTitle = _styledComponents.default.div(_templateObject3());

exports.GeneralTitle = GeneralTitle;

var GeneralDescription = _styledComponents.default.p(_templateObject4());

exports.GeneralDescription = GeneralDescription;

var ImageContainer = _styledComponents.default.div(_templateObject5());

exports.ImageContainer = ImageContainer;

var FormContainer = _styledComponents.default.form(_templateObject6());

exports.FormContainer = FormContainer;

var FormGroupText = _styledComponents.default.div(_templateObject7());

exports.FormGroupText = FormGroupText;

var FormGroupCheck = _styledComponents.default.div(_templateObject8());

exports.FormGroupCheck = FormGroupCheck;

var FormGroupWrapper = _styledComponents.default.div(_templateObject9());

exports.FormGroupWrapper = FormGroupWrapper;

var DropDownContainer = _styledComponents.default.div(_templateObject10());

exports.DropDownContainer = DropDownContainer;

var DropDownHeader = _styledComponents.default.div(_templateObject11());

exports.DropDownHeader = DropDownHeader;

var Required = _styledComponents.default.span(_templateObject12());

exports.Required = Required;

var DropDownContent = _styledComponents.default.div(_templateObject13());

exports.DropDownContent = DropDownContent;

var Option = _styledComponents.default.div(_templateObject14());

exports.Option = Option;

var SkeletonWrapper = _styledComponents.default.div(_templateObject15());

exports.SkeletonWrapper = SkeletonWrapper;