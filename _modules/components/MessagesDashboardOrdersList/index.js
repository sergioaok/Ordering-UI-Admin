"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessagesDashboardOrdersList = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _OrderListing = require("../OrderListing");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MessagesDashboardOrdersList = function MessagesDashboardOrdersList(props) {
  var orderListView = props.orderListView,
      searchValue = props.searchValue,
      filterValues = props.filterValues,
      deletedOrderId = props.deletedOrderId,
      driversList = props.driversList,
      activeSwitch = props.activeSwitch,
      handleOpenOrderDetail = props.handleOpenOrderDetail,
      handleOpenMessage = props.handleOpenMessage,
      openOrclosedOrderView = props.openOrclosedOrderView,
      orderBy = props.orderBy,
      messageType = props.messageType,
      messageOrder = props.messageOrder,
      orderIdForUnreadCountUpdate = props.orderIdForUnreadCountUpdate;

  var OrdersCommonControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: _OrderListing.OrderListing,
    useDefualtSessionManager: true,
    orderBy: orderBy,
    orderDirection: orderBy === 'id' ? 'desc' : 'asc',
    initialPageSize: 50,
    loadMorePageSize: 10,
    asDashboard: true,
    searchValue: searchValue,
    filterValues: filterValues,
    isSearchByOrderId: true,
    isSearchByCustomerEmail: true,
    isSearchByCustomerPhone: true,
    deletedOrderId: deletedOrderId,
    activeSwitch: activeSwitch,
    driversList: driversList,
    orderListView: orderListView,
    messageType: messageType,
    messageOrder: messageOrder,
    orderIdForUnreadCountUpdate: orderIdForUnreadCountUpdate,
    handleOpenMessage: handleOpenMessage,
    handleOpenOrderDetail: handleOpenOrderDetail
  });

  var allOrdersControlProps = {
    orderStatus: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
  };
  var openOrdersControlProps = {
    orderStatus: [0, 7, 8, 3, 4, 9, 13, 14, 18, 19, 20, 21]
  };
  var closedOrdersControlProps = {
    orderStatus: [1, 11, 2, 5, 6, 10, 12, 15, 16, 17]
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, openOrclosedOrderView === 'all' && /*#__PURE__*/_react.default.createElement(_styles.WrapperOrderlist, null, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardOrdersList, _extends({
    messageListView: true
  }, OrdersCommonControlProps, allOrdersControlProps))), openOrclosedOrderView === 'open' && /*#__PURE__*/_react.default.createElement(_styles.WrapperOrderlist, null, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardOrdersList, _extends({
    messageListView: true
  }, OrdersCommonControlProps, openOrdersControlProps))), openOrclosedOrderView === 'close' && /*#__PURE__*/_react.default.createElement(_styles.WrapperOrderlist, null, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardOrdersList, _extends({
    messageListView: true
  }, OrdersCommonControlProps, closedOrdersControlProps))));
};

exports.MessagesDashboardOrdersList = MessagesDashboardOrdersList;