"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeliveryDashboard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _AiFillPlusCircle = _interopRequireDefault(require("@meronex/icons/ai/AiFillPlusCircle"));

var _FaRegTimesCircle = _interopRequireDefault(require("@meronex/icons/fa/FaRegTimesCircle"));

var _RiCheckboxBlankCircleLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankCircleLine"));

var _RiCheckboxCircleLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxCircleLine"));

var _DriversLocation = require("../DriversLocation");

var _DeliveryDashboardOrdersList = require("../DeliveryDashboardOrdersList");

var _DriversModal = require("../DriversModal");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DeliveryDashboard = function DeliveryDashboard(props) {
  var searchValue = props.searchValue,
      filterValues = props.filterValues,
      driversList = props.driversList,
      deletedOrderId = props.deletedOrderId,
      ordersStatusGroup = props.ordersStatusGroup,
      handleSelectedOrderIds = props.handleSelectedOrderIds,
      activeSwitch = props.activeSwitch,
      handleOpenOrderDetail = props.handleOpenOrderDetail;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      openOrderAndDriver = _useState2[0],
      setOpenOrderAndDriver = _useState2[1];

  var _useState3 = (0, _react.useState)({
    order: true,
    driver: false
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      openTab = _useState4[0],
      setOpenTab = _useState4[1];

  var _useState5 = (0, _react.useState)('all'),
      _useState6 = _slicedToArray(_useState5, 2),
      driverAvailable = _useState6[0],
      setDriverAvailable = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      interActionMapOrder = _useState8[0],
      setInterActionMapOrder = _useState8[1];

  var _useState9 = (0, _react.useState)(true),
      _useState10 = _slicedToArray(_useState9, 2),
      isOnlyDelivery = _useState10[0],
      setIsOnlyDelivery = _useState10[1];

  var handleChangeDriverAvailable = function handleChangeDriverAvailable(available) {
    setDriverAvailable(available);
  };

  var handleChangeOrderAndDriver = function handleChangeOrderAndDriver() {
    setOpenTab({
      order: true,
      driver: false
    });
    setDriverAvailable('all');
  };

  var handleUpdateDriverLocation = function handleUpdateDriverLocation(order) {
    setInterActionMapOrder(_objectSpread({}, order));
  };

  var handleLocation = function handleLocation(order) {
    if ((interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.id) === (order === null || order === void 0 ? void 0 : order.id)) {
      setInterActionMapOrder(null);
    } else {
      setInterActionMapOrder(_objectSpread({}, order));
    }
  };

  return /*#__PURE__*/_react.default.createElement(_styles.DeliveryDashboardContainer, null, /*#__PURE__*/_react.default.createElement(_DriversLocation.DriversLocation, {
    driversList: driversList,
    driverAvailable: driverAvailable,
    interActionMapOrder: interActionMapOrder
  }), !openOrderAndDriver ? /*#__PURE__*/_react.default.createElement(_styles.OrdersOpenButton, {
    onClick: function onClick() {
      return setOpenOrderAndDriver(true);
    },
    name: "order-open"
  }, /*#__PURE__*/_react.default.createElement(_AiFillPlusCircle.default, null)) : /*#__PURE__*/_react.default.createElement(_styles.OrdersCloseButton, {
    onClick: function onClick() {
      return setOpenOrderAndDriver(false);
    },
    name: "order-close"
  }, /*#__PURE__*/_react.default.createElement(_FaRegTimesCircle.default, null)), /*#__PURE__*/_react.default.createElement(_styles.WrapperOrdersAndDriver, {
    style: {
      display: "".concat(openOrderAndDriver ? 'block' : 'none')
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperTab, null, /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: openTab.order,
    onClick: function onClick() {
      return handleChangeOrderAndDriver();
    }
  }, t('ORDERS', 'Orders')), /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: openTab.driver,
    onClick: function onClick() {
      return setOpenTab({
        order: false,
        driver: true
      });
    }
  }, t('DRIVERS', 'Drivers'))), /*#__PURE__*/_react.default.createElement(_styles.WrapperQuickShow, null, !isOnlyDelivery ? /*#__PURE__*/_react.default.createElement(_RiCheckboxCircleLine.default, {
    onClick: function onClick() {
      return setIsOnlyDelivery(!isOnlyDelivery);
    }
  }) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankCircleLine.default, {
    onClick: function onClick() {
      return setIsOnlyDelivery(!isOnlyDelivery);
    }
  }), t('SHOW_ALL', 'Show all')), /*#__PURE__*/_react.default.createElement(_styles.OrderAndDriverListContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperOrderlist, {
    style: {
      display: "".concat(openTab.order ? 'block' : 'none')
    }
  }, /*#__PURE__*/_react.default.createElement(_DeliveryDashboardOrdersList.DeliveryDashboardOrdersList, {
    orderListView: "small",
    searchValue: searchValue,
    filterValues: filterValues,
    deletedOrderId: deletedOrderId,
    driversList: driversList,
    ordersStatusGroup: ordersStatusGroup,
    activeSwitch: activeSwitch,
    isOnlyDelivery: isOnlyDelivery,
    interActionMapOrder: interActionMapOrder,
    handleOpenOrderDetail: handleOpenOrderDetail,
    handleLocation: handleLocation,
    handleUpdateDriverLocation: handleUpdateDriverLocation
  })), openTab.driver && /*#__PURE__*/_react.default.createElement(_DriversModal.DriversModal, {
    driversList: driversList,
    handleChangeDriverAvailable: handleChangeDriverAvailable,
    handleSelectedOrderIds: handleSelectedOrderIds,
    handleOpenOrderDetail: handleOpenOrderDetail
  }))));
};

exports.DeliveryDashboard = DeliveryDashboard;