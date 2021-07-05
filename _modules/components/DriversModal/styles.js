"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkeletonBlock = exports.SkeletonCell = exports.SkeletonCard = exports.WrapperSkeleton = exports.WrapperDriverAvailable = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  border-bottom: 1px solid #f2f2f2;\n  padding: 15px;\n  box-sizing: border-box;\n  column-gap: 10px;\n\n  > div {\n    &: last-child {\n      flex: 1;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 15px;\n\n  button {\n    width: 100%;\n    padding: 2px 15px;\n    display: flex;\n    column-gap: 10px;\n    align-items: center;\n    justify-content: center;\n\n    svg {\n      color: #fff;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var WrapperDriverAvailable = _styledComponents.default.div(_templateObject());

exports.WrapperDriverAvailable = WrapperDriverAvailable;

var WrapperSkeleton = _styledComponents.default.div(_templateObject2());

exports.WrapperSkeleton = WrapperSkeleton;

var SkeletonCard = _styledComponents.default.div(_templateObject3());

exports.SkeletonCard = SkeletonCard;

var SkeletonCell = _styledComponents.default.div(_templateObject4());

exports.SkeletonCell = SkeletonCell;

var SkeletonBlock = _styledComponents.default.div(_templateObject5());

exports.SkeletonBlock = SkeletonBlock;