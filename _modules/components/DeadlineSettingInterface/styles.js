"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = exports.DeadlineInputContainer = exports.BottomContainer = exports.BorderContainer = exports.TopContainer = exports.DeadlineSettingContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  -moz-appearance: textfield;\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  outline: none;\n  width: 55px;\n  height: 50px;\n  font-size: 24px;\n  text-align: center;\n  box-sizing: border-box;\n  box-shadow: 0px 0px 1px #00000029;\n  border: 1px solid;\n  border-color: ", ";\n  border-radius: 9px;\n  color: #ADADAD;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 80%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border-left: 13px solid #F2F2F2;\n  border-right: 13px solid #F2F2F2;\n  border-top: 13px solid #F2F2F2;\n\n  display: flex;\n  justify-content: center;\n  font-size: 20px;\n  padding-top: 5px;\n  padding-bottom: 15px;\n  color: #FFBF12;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 80%;\n  padding: 0 27px 0 21px;\n  box-sizing: border-box;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 40px 0 10px 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DeadlineSettingContainer = _styledComponents.default.div(_templateObject());

exports.DeadlineSettingContainer = DeadlineSettingContainer;

var TopContainer = _styledComponents.default.div(_templateObject2());

exports.TopContainer = TopContainer;

var BorderContainer = _styledComponents.default.div(_templateObject3());

exports.BorderContainer = BorderContainer;

var BottomContainer = _styledComponents.default.div(_templateObject4());

exports.BottomContainer = BottomContainer;

var DeadlineInputContainer = _styledComponents.default.div(_templateObject5(), function (_ref) {
  var color = _ref.color;
  return color;
});

exports.DeadlineInputContainer = DeadlineInputContainer;

var Input = _styledComponents.default.input.attrs({
  type: 'number'
})(_templateObject6(), function (_ref2) {
  var borderColor = _ref2.borderColor;
  return borderColor;
});

exports.Input = Input;