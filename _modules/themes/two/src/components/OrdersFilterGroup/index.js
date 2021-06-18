"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersFilterGroup = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _DriversGroupTypeSelector = require("../DriversGroupTypeSelector");

var _DateTypeSelector = require("../DateTypeSelector");

var _BusinessesSelector = require("../BusinessesSelector");

var _DriverSelector = require("../DriverSelector");

var _CitySelector = require("../CitySelector");

var _OrderStatusTypeSelector = require("../OrderStatusTypeSelector");

var _DeliveryTypeSelector = require("../DeliveryTypeSelector");

var _PaymethodTypeSelector = require("../PaymethodTypeSelector");

var _Inputs = require("../../styles/Inputs");

var _Buttons = require("../../styles/Buttons");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var OrdersFilterGroupUI = function OrdersFilterGroupUI(props) {
  var handleCloseFilterModal = props.handleCloseFilterModal,
      filterValues = props.filterValues,
      singleDriverIds = props.singleDriverIds,
      driverGroupList = props.driverGroupList,
      driversList = props.driversList,
      paymethodsList = props.paymethodsList,
      businessesList = props.businessesList,
      handleChangeGroup = props.handleChangeGroup,
      handleChangeDateType = props.handleChangeDateType,
      handleChangeFromDate = props.handleChangeFromDate,
      handleChangeEndDate = props.handleChangeEndDate,
      handleChangeBusinesses = props.handleChangeBusinesses,
      handleChangeDriver = props.handleChangeDriver,
      handleChangeCity = props.handleChangeCity,
      handleChangeOrderStatus = props.handleChangeOrderStatus,
      handleChangeDeliveryType = props.handleChangeDeliveryType,
      handleChangePaymethodType = props.handleChangePaymethodType,
      handleResetFilterValues = props.handleResetFilterValues,
      handleChangeFilterValues = props.handleChangeFilterValues,
      handleChangeOrderId = props.handleChangeOrderId;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var handleAcceptFilter = function handleAcceptFilter() {
    handleChangeFilterValues(filterValues);
    handleCloseFilterModal();
  };

  var handleClearFilter = function handleClearFilter() {
    handleResetFilterValues();
    handleChangeFilterValues({});
  };

  return /*#__PURE__*/_react.default.createElement(_styles.FilterGroupListContainer, {
    className: "filter-modal"
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperRow, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: "text",
    placeholder: "ID",
    autoComplete: "off",
    value: (filterValues === null || filterValues === void 0 ? void 0 : filterValues.orderId) || '',
    onChange: function onChange(e) {
      return handleChangeOrderId(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.WrapperRow, null, /*#__PURE__*/_react.default.createElement(_DriversGroupTypeSelector.DriversGroupTypeSelector, {
    driverGroupList: driverGroupList,
    handleChangeGroup: handleChangeGroup,
    filterValues: filterValues
  }), /*#__PURE__*/_react.default.createElement(_DateTypeSelector.DateTypeSelector, {
    filterValues: filterValues,
    handleChangeDateType: handleChangeDateType,
    handleChangeFromDate: handleChangeFromDate,
    handleChangeEndDate: handleChangeEndDate
  })), /*#__PURE__*/_react.default.createElement(_styles.WrapperRow, null, /*#__PURE__*/_react.default.createElement(_BusinessesSelector.BusinessesSelector, {
    filterValues: filterValues,
    businessesList: businessesList,
    handleChangeBusinesses: handleChangeBusinesses
  }), /*#__PURE__*/_react.default.createElement(_DriverSelector.DriverSelector, {
    isFilterView: true,
    drivers: driversList.drivers,
    singleDriverIds: singleDriverIds,
    handleChangeDriver: handleChangeDriver
  })), /*#__PURE__*/_react.default.createElement(_styles.WrapperRow, null, /*#__PURE__*/_react.default.createElement(_CitySelector.CitySelector, {
    filterValues: filterValues,
    handleChangeCity: handleChangeCity
  }), /*#__PURE__*/_react.default.createElement(_styles.MultiSelectContainer, null, /*#__PURE__*/_react.default.createElement(_OrderStatusTypeSelector.OrderStatusTypeSelector, {
    isFilterView: true,
    filterValues: filterValues,
    handleChangeOrderStatus: handleChangeOrderStatus
  }))), /*#__PURE__*/_react.default.createElement(_styles.WrapperRow, null, /*#__PURE__*/_react.default.createElement(_DeliveryTypeSelector.DeliveryTypeSelector, {
    filterValues: filterValues,
    handleChangeDeliveryType: handleChangeDeliveryType
  }), /*#__PURE__*/_react.default.createElement(_PaymethodTypeSelector.PaymethodTypeSelector, {
    paymethodsList: paymethodsList,
    filterValues: filterValues,
    handleChangePaymethodType: handleChangePaymethodType
  })), /*#__PURE__*/_react.default.createElement(_styles.ButtonGroup, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    borderRadius: "5px",
    onClick: function onClick() {
      return handleAcceptFilter();
    }
  }, t('ACCEPT', 'Accept')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "secundary",
    borderRadius: "5px",
    onClick: function onClick() {
      return handleClearFilter();
    }
  }, t('CLEAR', 'Clear'))));
};

var OrdersFilterGroup = function OrdersFilterGroup(props) {
  var FilterControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OrdersFilterGroupUI,
    driverGroupList: props.driverGroupList
  });

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.OrdersFilter, FilterControlProps));
};

exports.OrdersFilterGroup = OrdersFilterGroup;