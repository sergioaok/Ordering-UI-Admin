"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserDetails = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _UserProfileForm = require("../UserProfileForm");

var _UserOrders = require("../UserOrders");

var _ActivityRegister = require("../ActivityRegister");

var _Personalization = require("../Personalization");

var _styles = require("./styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var UserDetails = function UserDetails(props) {
  var setSelectedUser = props.setSelectedUser,
      user = props.user,
      onClose = props.onClose,
      setUsersList = props.setUsersList,
      usersList = props.usersList,
      defaultItemType = props.defaultItemType;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(defaultItemType),
      _useState2 = _slicedToArray(_useState, 2),
      currentItemSelected = _useState2[0],
      setCurrentItemSelected = _useState2[1];

  var itemTypes = [{
    key: 'General Info',
    value: 1
  }, {
    key: 'Orders history',
    value: 2
  }, {
    key: 'Timeline',
    value: 3
  }, {
    key: 'Activity Register',
    value: 4
  }, {
    key: 'Personalization',
    value: 5
  }];
  return /*#__PURE__*/_react.default.createElement(_styles.UserDetailsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.DetailsTitle, null, t('CUSTOMER_NAME', 'Customer name')), /*#__PURE__*/_react.default.createElement(_styles.CustomerInfoList, null, itemTypes && itemTypes.length > 0 && itemTypes.map(function (type, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.InfoItem, {
      active: type.value === currentItemSelected,
      onClick: function onClick() {
        return setCurrentItemSelected(type.value);
      },
      key: i
    }, type.key);
  })), /*#__PURE__*/_react.default.createElement(_styles.CustomerInfoContent, null, currentItemSelected === 1 && /*#__PURE__*/_react.default.createElement(_styles.GeneralInfo, null, /*#__PURE__*/_react.default.createElement(_UserProfileForm.UserProfileForm, {
    onClose: onClose,
    user: user,
    setSelectedUser: setSelectedUser,
    setUsersList: setUsersList,
    usersList: usersList,
    useValidationFields: true
  })), currentItemSelected === 2 && /*#__PURE__*/_react.default.createElement(_UserOrders.UserOrders, null), currentItemSelected === 4 && /*#__PURE__*/_react.default.createElement(_ActivityRegister.ActivityRegister, null), currentItemSelected === 5 && /*#__PURE__*/_react.default.createElement(_Personalization.Personalization, null)));
};

exports.UserDetails = UserDetails;