"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersListing = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _OrdersTable = require("../OrdersTable");

var _OrdersCards = require("../OrdersCards");

var _styles = require("./styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var OrdersListing = function OrdersListing(props) {
  var _theme$images, _theme$images$dummies;

  var isSelectedOrders = props.isSelectedOrders,
      orderList = props.orderList,
      driversList = props.driversList,
      selectedOrderIds = props.selectedOrderIds,
      orderListView = props.orderListView,
      handleUpdateOrderStatus = props.handleUpdateOrderStatus,
      handleSelectedOrderIds = props.handleSelectedOrderIds,
      pagination = props.pagination,
      handleOpenOrderDetail = props.handleOpenOrderDetail,
      handleOpenMessage = props.handleOpenMessage,
      handleLocation = props.handleLocation,
      handleUpdateDriverLocation = props.handleUpdateDriverLocation,
      messageOrder = props.messageOrder,
      interActionMapOrder = props.interActionMapOrder,
      messageListView = props.messageListView,
      messageType = props.messageType,
      loadMoreOrders = props.loadMoreOrders,
      ordersStatusGroup = props.ordersStatusGroup,
      groupStatus = props.groupStatus;
  var theme = (0, _styledComponents.useTheme)();
  (0, _react.useEffect)(function () {
    if (orderList.loading || !messageListView) return;
    if (orderList.orders.length === 0 || messageOrder) return;
    handleOpenMessage && handleOpenMessage(orderList.orders[0], messageType);
  }, [orderList.loading, messageListView]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ordersStatusGroup === groupStatus && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !orderList.loading && orderList.orders.length === 0 ? /*#__PURE__*/_react.default.createElement(_styles.WrapperNoneOrders, {
    small: orderListView === 'small'
  }, /*#__PURE__*/_react.default.createElement(_styles.InnerNoneOrdersContainer, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 ? void 0 : (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.nonOrders,
    alt: "none"
  }))) : /*#__PURE__*/_react.default.createElement(_styles.WrapperOrderListContent, {
    maxHeight: orderListView !== 'table'
  }, orderListView === 'table' ? /*#__PURE__*/_react.default.createElement(_OrdersTable.OrdersTable, {
    isSelectedOrders: isSelectedOrders,
    orderList: orderList,
    driversList: driversList,
    pagination: pagination,
    selectedOrderIds: selectedOrderIds,
    loadMoreOrders: loadMoreOrders,
    handleUpdateOrderStatus: handleUpdateOrderStatus,
    handleSelectedOrderIds: handleSelectedOrderIds,
    handleOpenOrderDetail: handleOpenOrderDetail
  }) : /*#__PURE__*/_react.default.createElement(_OrdersCards.OrdersCards, {
    orderList: orderList,
    driversList: driversList,
    pagination: pagination,
    selectedOrderIds: selectedOrderIds,
    loadMoreOrders: loadMoreOrders,
    handleUpdateOrderStatus: handleUpdateOrderStatus,
    handleSelectedOrderIds: handleSelectedOrderIds,
    handleOpenOrderDetail: handleOpenOrderDetail,
    interActionMapOrder: interActionMapOrder,
    handleLocation: handleLocation,
    handleUpdateDriverLocation: handleUpdateDriverLocation
  }))));
};

exports.OrdersListing = OrdersListing;