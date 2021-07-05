"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserTypeSelector = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Select = require("../../styles/Select");

var _FirstSelect = require("../../styles/Select/FirstSelect");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var UserTypeSelector = function UserTypeSelector(props) {
  var userId = props.userId,
      defaultUserType = props.defaultUserType,
      handleChangeUserType = props.handleChangeUserType,
      isPrimary = props.isPrimary;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var userTypes = [{
    value: 0,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('ADMINISTRATOR', 'Administrator')),
    disabled: !isPrimary && defaultUserType === 0
  }, {
    value: 1,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('CITY_MANAGER', 'City manager')),
    disabled: !isPrimary && defaultUserType === 1
  }, {
    value: 2,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('BUSINESS_OWNER', 'Business owner')),
    disabled: !isPrimary && defaultUserType === 2
  }, {
    value: 3,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('USER', 'User')),
    disabled: !isPrimary && defaultUserType === 3
  }];

  var placeholder = /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('TYPE', 'Type'));

  var onUpdateUserType = function onUpdateUserType(type) {
    handleChangeUserType && handleChangeUserType({
      id: userId,
      level: type
    });
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isPrimary ? /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    defaultValue: defaultUserType,
    placeholder: placeholder,
    options: userTypes,
    onChange: function onChange(type) {
      return handleChangeUserType(type);
    }
  }) : /*#__PURE__*/_react.default.createElement(_Select.Select, {
    type: "primary",
    noSelected: true,
    placeholder: placeholder,
    options: userTypes,
    onChange: function onChange(type) {
      return onUpdateUserType(type);
    }
  }));
};

exports.UserTypeSelector = UserTypeSelector;