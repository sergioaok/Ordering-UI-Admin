"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessagesDashbaord = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _AiFillPlusCircle = _interopRequireDefault(require("@meronex/icons/ai/AiFillPlusCircle"));

var _FaRegTimesCircle = _interopRequireDefault(require("@meronex/icons/fa/FaRegTimesCircle"));

var _OpenAndCloseOrderSelector = require("../OpenAndCloseOrderSelector");

var _OrderBySelector = require("../OrderBySelector");

var _MessagesDashboardOrdersList = require("../MessagesDashboardOrdersList");

var _Messages = require("../Messages");

var _OrderDetails = require("../OrderDetails");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MessagesDashbaord = function MessagesDashbaord(props) {
  var searchValue = props.searchValue,
      filterValues = props.filterValues,
      deletedOrderId = props.deletedOrderId,
      driversList = props.driversList,
      activeSwitch = props.activeSwitch,
      handleOpenOrderDetail = props.handleOpenOrderDetail,
      orderIdForUnreadCountUpdate = props.orderIdForUnreadCountUpdate,
      handleUpdateOrderForUnreadCount = props.handleUpdateOrderForUnreadCount;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)('all'),
      _useState2 = _slicedToArray(_useState, 2),
      openOrclosedOrderView = _useState2[0],
      setOpenOrclosedOrderView = _useState2[1];

  var _useState3 = (0, _react.useState)('last_direct_message_at'),
      _useState4 = _slicedToArray(_useState3, 2),
      orderBy = _useState4[0],
      setOrderBy = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = _slicedToArray(_useState5, 2),
      openOrderAndUser = _useState6[0],
      setOpenOrderAndUser = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      messageType = _useState8[0],
      setMessageType = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      messageOrder = _useState10[0],
      setMessageOrder = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      openMessageOrderDetail = _useState12[0],
      setOpenMessageOrderDetail = _useState12[1];

  var handleOpenMessage = function handleOpenMessage(order, messageType) {
    setMessageType(messageType);
    setMessageOrder(order);
  };

  var handleSetMessageType = function handleSetMessageType(messageType) {
    setMessageType(messageType);
  };

  var handleMessageOrderDetail = function handleMessageOrderDetail(state) {
    setOpenMessageOrderDetail(state);
  };

  return /*#__PURE__*/_react.default.createElement(_styles.MessagesManagerContainer, null, !openOrderAndUser ? /*#__PURE__*/_react.default.createElement(_styles.OrdersOpenButton, {
    onClick: function onClick() {
      return setOpenOrderAndUser(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_AiFillPlusCircle.default, null)) : /*#__PURE__*/_react.default.createElement(_styles.OrdersCloseButton, {
    onClick: function onClick() {
      return setOpenOrderAndUser(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_FaRegTimesCircle.default, null)), /*#__PURE__*/_react.default.createElement(_styles.WrapperOrdersAndUser, {
    style: {
      display: "".concat(openOrderAndUser ? 'block' : 'none')
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperTab, null, /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: true
  }, t('ORDERS', 'Orders'))), /*#__PURE__*/_react.default.createElement(_styles.WrapperSortContainer, null, /*#__PURE__*/_react.default.createElement(_OpenAndCloseOrderSelector.OpenAndCloseOrderSelector, {
    defaultValue: openOrclosedOrderView,
    setOpenOrclosedOrderView: setOpenOrclosedOrderView
  }), /*#__PURE__*/_react.default.createElement(_OrderBySelector.OrderBySelector, {
    defaultValue: orderBy,
    setOrderBy: setOrderBy
  })), /*#__PURE__*/_react.default.createElement(_styles.OrderAndUserListContainer, null, /*#__PURE__*/_react.default.createElement(_MessagesDashboardOrdersList.MessagesDashboardOrdersList, {
    orderListView: "small",
    orderBy: orderBy,
    openOrclosedOrderView: openOrclosedOrderView,
    searchValue: searchValue,
    filterValues: filterValues,
    deletedOrderId: deletedOrderId,
    driversList: driversList,
    activeSwitch: activeSwitch,
    messageType: messageType,
    messageOrder: messageOrder,
    orderIdForUnreadCountUpdate: orderIdForUnreadCountUpdate,
    handleOpenOrderDetail: handleOpenOrderDetail,
    handleOpenMessage: handleOpenMessage
  }))), messageOrder && /*#__PURE__*/_react.default.createElement(_styles.WrapperMessage, null, /*#__PURE__*/_react.default.createElement(_Messages.Messages, {
    messageDashboardView: true,
    orderId: messageOrder === null || messageOrder === void 0 ? void 0 : messageOrder.id,
    order: messageOrder,
    customer: messageType === 'customer',
    business: messageType === 'business',
    driver: messageType === 'driver',
    handleMessageOrderDetail: handleMessageOrderDetail,
    handleUpdateOrderForUnreadCount: handleUpdateOrderForUnreadCount,
    handleSetMessageType: handleSetMessageType
  })), messageOrder && /*#__PURE__*/_react.default.createElement(_styles.MessageOrderDetailContainer, {
    style: {
      display: "".concat(openMessageOrderDetail ? 'block' : 'none')
    }
  }, /*#__PURE__*/_react.default.createElement(_OrderDetails.OrderDetails, {
    messageDashboardView: true,
    orderId: messageOrder === null || messageOrder === void 0 ? void 0 : messageOrder.id,
    driversList: driversList,
    messageType: messageType,
    handleOpenMessage: handleOpenMessage,
    handleMessageOrderDetail: handleMessageOrderDetail,
    handleOpenOrderDetail: handleOpenOrderDetail
  })));
};

exports.MessagesDashbaord = MessagesDashbaord;