"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersExportCSV = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _SpinnerLoader = require("../SpinnerLoader");

var _useWindowSize2 = require("../../../../../hooks/useWindowSize");

var _Buttons = require("../../styles/Buttons");

var _ZoDownload = _interopRequireDefault(require("@meronex/icons/zo/ZoDownload"));

var _Modal = require("../Modal");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ExportCSVUI = function ExportCSVUI(props) {
  var _actionStatus$result;

  var actionStatus = props.actionStatus,
      getCSV = props.getCSV;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
      width = _useWindowSize.width;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      popoverOpen = _useState2[0],
      setPopoverOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      modalOpen = _useState4[0],
      setModalOpen = _useState4[1];

  var handleExportAll = function handleExportAll() {
    setPopoverOpen(false);
    getCSV(false);
  };

  var handleExportFiltered = function handleExportFiltered() {
    setPopoverOpen(false);
    getCSV(true);
  };

  var closePopover = function closePopover() {
    setPopoverOpen(false);
  };

  (0, _react.useEffect)(function () {
    if (!popoverOpen) return;
    document.addEventListener('click', closePopover);
    return function () {
      return document.removeEventListener('click', closePopover);
    };
  }, [popoverOpen]);
  (0, _react.useEffect)(function () {
    if (!(actionStatus !== null && actionStatus !== void 0 && actionStatus.result) || actionStatus !== null && actionStatus !== void 0 && actionStatus.error) return;
    setModalOpen(true);
  }, [actionStatus]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.ExportContainer, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    borderRadius: "5px",
    color: "secundary",
    disabled: actionStatus.loading,
    onClick: function onClick() {
      return setPopoverOpen(!popoverOpen);
    }
  }, width > 600 && t('CSV', 'CSV'), /*#__PURE__*/_react.default.createElement(_ZoDownload.default, null)), popoverOpen && /*#__PURE__*/_react.default.createElement(_styles.PopoverContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Item, {
    onClick: function onClick() {
      return handleExportAll();
    }
  }, t('EXPROT_ALL', 'Export all')), /*#__PURE__*/_react.default.createElement(_styles.Item, {
    onClick: function onClick() {
      return handleExportFiltered();
    }
  }, t('EXPROT_FILTERED', 'Export filtered'))), actionStatus.loading && /*#__PURE__*/_react.default.createElement(_SpinnerLoader.SpinnerLoader, {
    primary: true
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: modalOpen,
    onClose: function onClose() {
      return setModalOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.ExportCSVResult, null, /*#__PURE__*/_react.default.createElement("h1", {
    className: "align-center"
  }, t('ORDERING', 'Ordering')), (actionStatus === null || actionStatus === void 0 ? void 0 : (_actionStatus$result = actionStatus.result) === null || _actionStatus$result === void 0 ? void 0 : _actionStatus$result.length) > 0 && (actionStatus === null || actionStatus === void 0 ? void 0 : actionStatus.result.map(function (e, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, {
      key: i
    }, (e === null || e === void 0 ? void 0 : e.message) || e);
  })), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    rectangle: true,
    color: "primary",
    onClick: function onClick() {
      return setModalOpen(false);
    }
  }, t('OK', 'OK')))));
};

var OrdersExportCSV = function OrdersExportCSV(props) {
  var ExportCSVControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ExportCSVUI,
    filterValues: props.filterValues
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExportCSV, ExportCSVControlProps);
};

exports.OrdersExportCSV = OrdersExportCSV;