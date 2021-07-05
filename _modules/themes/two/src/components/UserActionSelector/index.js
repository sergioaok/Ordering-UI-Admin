"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserActionSelector = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Select = require("../../styles/Select");

var _FiMoreVertical = _interopRequireDefault(require("@meronex/icons/fi/FiMoreVertical"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var UserActionSelector = function UserActionSelector(props) {
  var user = props.user,
      handleDeleteUser = props.handleDeleteUser,
      handleOpenUserDetails = props.handleOpenUserDetails;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var actionTypes = [{
    value: 1,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('EDIT', 'Edit'))
  }, {
    value: 2,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      isColor: true
    }, t('DELETE', 'Delete'))
  }];

  var placeholder = /*#__PURE__*/_react.default.createElement(_styles.PlaceHolder, null, /*#__PURE__*/_react.default.createElement(_FiMoreVertical.default, null));

  var onActionClick = function onActionClick(type) {
    if (type === 1) {
      handleOpenUserDetails(user);
    }

    if (type === 2) {
      handleDeleteUser(user === null || user === void 0 ? void 0 : user.id);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_Select.Select, {
    noSelected: true,
    placeholder: placeholder,
    options: actionTypes,
    onChange: function onChange(type) {
      return onActionClick(type);
    }
  }));
};

exports.UserActionSelector = UserActionSelector;