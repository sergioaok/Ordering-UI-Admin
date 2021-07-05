"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmallOrderItemAccordion = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _orderingComponentsAdmin = require("ordering-components-admin");

var _styledComponents = require("styled-components");

var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));

var _OrderStatusTypeSelector = require("../OrderStatusTypeSelector");

var _DriverSelector = require("../DriverSelector");

var _AiFillShop = _interopRequireDefault(require("@meronex/icons/ai/AiFillShop"));

var _GiFoodTruck = _interopRequireDefault(require("@meronex/icons/gi/GiFoodTruck"));

var _FaCarSide = _interopRequireDefault(require("@meronex/icons/fa/FaCarSide"));

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

var SmallOrderItemAccordion = function SmallOrderItemAccordion(props) {
  var _theme$colors, _theme$colors2, _theme$colors3, _order$business, _order$business2, _theme$images, _theme$images$icons, _theme$images2, _theme$images2$icons, _order$customer, _order$customer2, _order$customer3, _order$customer4;

  var isOrdersListView = props.isOrdersListView,
      order = props.order,
      drivers = props.drivers,
      pendingOrder = props.pendingOrder,
      preOrder = props.preOrder,
      activeSwitch = props.activeSwitch,
      messageOrder = props.messageOrder,
      interActionMapOrder = props.interActionMapOrder,
      handleUpdateOrderStatus = props.handleUpdateOrderStatus,
      handleOpenOrderDetail = props.handleOpenOrderDetail,
      handleOpenMessage = props.handleOpenMessage,
      handleLocation = props.handleLocation,
      handleUpdateDriverLocation = props.handleUpdateDriverLocation;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();
  var history = (0, _reactRouterDom.useHistory)();

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      _useUtils2$ = _useUtils2[0],
      parseDate = _useUtils2$.parseDate,
      getTimeAgo = _useUtils2$.getTimeAgo;

  var driverSelectorRef = (0, _react.useRef)(null);
  var orderStatusRef = (0, _react.useRef)(null);
  var businessRef = (0, _react.useRef)(null);
  var customerRef = (0, _react.useRef)(null);
  var driverRef = (0, _react.useRef)(null);
  var moreDetailRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(getTimeAgo(order === null || order === void 0 ? void 0 : order.delivery_datetime)),
      _useState2 = _slicedToArray(_useState, 2),
      diffTime = _useState2[0],
      setDiffTime = _useState2[1];

  var handleLocationAndMessage = function handleLocationAndMessage(e) {
    if (isOrdersListView) return;

    if (activeSwitch === null || activeSwitch === void 0 ? void 0 : activeSwitch.messages) {
      handleOpenMessage(order, '');
    } else {
      var _driverSelectorRef$cu, _orderStatusRef$curre;

      var isActionClick = ((_driverSelectorRef$cu = driverSelectorRef.current) === null || _driverSelectorRef$cu === void 0 ? void 0 : _driverSelectorRef$cu.contains(e.target)) || ((_orderStatusRef$curre = orderStatusRef.current) === null || _orderStatusRef$curre === void 0 ? void 0 : _orderStatusRef$curre.contains(e.target));

      if (!isActionClick) {
        history.push("/orders-deliveries?id=".concat(order.id));
        handleOpenOrderDetail(order.id);
      }
    }
  };

  var openOrderDetail = function openOrderDetail() {
    if (!isOrdersListView) return;
    history.push("/orders-deliveries?id=".concat(order.id));
    handleOpenOrderDetail(order.id);
  };

  var getLogisticTag = function getLogisticTag(status) {
    switch (parseInt(status)) {
      case 0:
        return t('PENDING', 'Pending');

      case 1:
        return t('IN_PROGRESS', 'In progress');

      case 2:
        return t('IN_QUEUE', 'In queue');

      case 3:
        return t('EXPIRED', 'Expired');

      case 4:
        return t('RESOLVED', 'Resolved');

      default:
        return t('UNKNOWN', 'Unknown');
    }
  };

  var getPriorityTag = function getPriorityTag(priority) {
    switch (parseInt(priority)) {
      case -1:
        return t('LOW', 'Low');

      case 0:
        return t('NORMAL', 'Normal');

      case 1:
        return t('HIGH', 'High');

      case 2:
        return t('URGENT', 'Urgent');

      default:
        return t('UNKNOWN', 'Unknown');
    }
  };

  (0, _react.useEffect)(function () {
    if (!(activeSwitch === null || activeSwitch === void 0 ? void 0 : activeSwitch.deliveries) || interActionMapOrder === null || (interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.id) !== (order === null || order === void 0 ? void 0 : order.id)) return;
    handleUpdateDriverLocation && handleUpdateDriverLocation(order);
  }, [order === null || order === void 0 ? void 0 : order.driver]);
  (0, _react.useEffect)(function () {
    var deActive = (order === null || order === void 0 ? void 0 : order.status) === 1 || (order === null || order === void 0 ? void 0 : order.status) === 11 || (order === null || order === void 0 ? void 0 : order.status) === 2 || (order === null || order === void 0 ? void 0 : order.status) === 5 || (order === null || order === void 0 ? void 0 : order.status) === 6 || (order === null || order === void 0 ? void 0 : order.status) === 10 || order.status === 12;
    if (deActive) return;
    var timer = setInterval(function () {
      setDiffTime(getTimeAgo(order === null || order === void 0 ? void 0 : order.delivery_datetime));
    }, 60 * 1000);
    return function () {
      clearInterval(timer);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles.OrderItemContainer, {
    filterColor: (order === null || order === void 0 ? void 0 : order.logistic_status) === -1 || (order === null || order === void 0 ? void 0 : order.logistic_status) === 0 ? theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.deadlineOk : order.logistic_status === 1 ? theme === null || theme === void 0 ? void 0 : (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.deadlineDelayed : theme === null || theme === void 0 ? void 0 : (_theme$colors3 = theme.colors) === null || _theme$colors3 === void 0 ? void 0 : _theme$colors3.deadlineRisk,
    onClick: function onClick(e) {
      return handleLocationAndMessage(e);
    },
    messageUI: activeSwitch === null || activeSwitch === void 0 ? void 0 : activeSwitch.messages,
    messageUIActive: (messageOrder === null || messageOrder === void 0 ? void 0 : messageOrder.id) === order.id,
    deliveryUI: activeSwitch === null || activeSwitch === void 0 ? void 0 : activeSwitch.deliveries,
    deliveryUIActive: (interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.id) === order.id,
    isOrdersListView: isOrdersListView
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapIndicator, null, (activeSwitch === null || activeSwitch === void 0 ? void 0 : activeSwitch.messages) && (order === null || order === void 0 ? void 0 : order.unread_count) > 0 && /*#__PURE__*/_react.default.createElement(_styles.UnreadMessageIndicator, null, order === null || order === void 0 ? void 0 : order.unread_count)), /*#__PURE__*/_react.default.createElement(_styles.WrapperInfo, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, {
    className: "order-item-business",
    ref: businessRef
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperAccordionImage, null, /*#__PURE__*/_react.default.createElement(_styles.AccordionImage, {
    bgimage: order === null || order === void 0 ? void 0 : (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.logo
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessContent, null, /*#__PURE__*/_react.default.createElement("h1", null, t('ORDER_NO', 'Order No'), ". ", order === null || order === void 0 ? void 0 : order.id), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.name), ((activeSwitch === null || activeSwitch === void 0 ? void 0 : activeSwitch.deliveries) || isOrdersListView) && /*#__PURE__*/_react.default.createElement(_styles.MoreDetailsButton, {
    ref: moreDetailRef,
    onClick: function onClick() {
      return openOrderDetail();
    }
  }, t('MORE_DETAIL', 'More detail')))), /*#__PURE__*/_react.default.createElement(_styles.DeliveryInfo, null, /*#__PURE__*/_react.default.createElement("p", null, parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
    utc: false
  })), /*#__PURE__*/_react.default.createElement(_styles.DeliveryType, null, /*#__PURE__*/_react.default.createElement(_styles.DeliveryIcon, null, (order === null || order === void 0 ? void 0 : order.delivery_type) === 1 && /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 ? void 0 : (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$icons = _theme$images.icons) === null || _theme$images$icons === void 0 ? void 0 : _theme$images$icons.driverDelivery,
    alt: "Delivery"
  }), (order === null || order === void 0 ? void 0 : order.delivery_type) === 2 && /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 ? void 0 : (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$icons = _theme$images2.icons) === null || _theme$images2$icons === void 0 ? void 0 : _theme$images2$icons.pickUp,
    alt: "pick up"
  }), (order === null || order === void 0 ? void 0 : order.delivery_type) === 3 && /*#__PURE__*/_react.default.createElement(_AiFillShop.default, null), (order === null || order === void 0 ? void 0 : order.delivery_type) === 4 && /*#__PURE__*/_react.default.createElement(_GiFoodTruck.default, null), (order === null || order === void 0 ? void 0 : order.delivery_type) === 5 && /*#__PURE__*/_react.default.createElement(_FaCarSide.default, null)), /*#__PURE__*/_react.default.createElement(_styles.DeliveryName, null, (order === null || order === void 0 ? void 0 : order.delivery_type) === 1 && t('DELIVERY', 'Delivery'), (order === null || order === void 0 ? void 0 : order.delivery_type) === 2 && t('PICKUP', 'Pickup'), (order === null || order === void 0 ? void 0 : order.delivery_type) === 3 && t('EAT_IN', 'Eat in'), (order === null || order === void 0 ? void 0 : order.delivery_type) === 4 && t('CURBSIDE', 'Curbside'), (order === null || order === void 0 ? void 0 : order.delivery_type) === 5 && t('DRIVE_THRU', 'Drive thru'))), !((order === null || order === void 0 ? void 0 : order.status) === 1 || (order === null || order === void 0 ? void 0 : order.status) === 11 || (order === null || order === void 0 ? void 0 : order.status) === 2 || (order === null || order === void 0 ? void 0 : order.status) === 5 || (order === null || order === void 0 ? void 0 : order.status) === 6 || (order === null || order === void 0 ? void 0 : order.status) === 10 || order.status === 12) && /*#__PURE__*/_react.default.createElement(_styles.TimeAgo, null, diffTime))), /*#__PURE__*/_react.default.createElement(_styles.WrapperInfo, {
    border: true
  }, /*#__PURE__*/_react.default.createElement(_styles.OrderLabelItem, null, /*#__PURE__*/_react.default.createElement("strong", null, t('LOGISTIC', 'Logistic'), ":"), /*#__PURE__*/_react.default.createElement("span", null, getLogisticTag(order === null || order === void 0 ? void 0 : order.logistic_status))), /*#__PURE__*/_react.default.createElement(_styles.OrderLabelItem, null, /*#__PURE__*/_react.default.createElement("strong", null, t('PRIORITY', 'Priority'), ":"), /*#__PURE__*/_react.default.createElement("span", null, getPriorityTag(order === null || order === void 0 ? void 0 : order.priority))), /*#__PURE__*/_react.default.createElement(_styles.OrderLabelItem, null, /*#__PURE__*/_react.default.createElement("strong", null, t('ATTEMPTS', 'Attempts'), ":"), /*#__PURE__*/_react.default.createElement("span", null, order === null || order === void 0 ? void 0 : order.logistic_attemps))), /*#__PURE__*/_react.default.createElement(_styles.WrapperInfo, null, /*#__PURE__*/_react.default.createElement(_styles.CustomerInfo, {
    ref: customerRef
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperAccordionImage, {
    small: true
  }, (order === null || order === void 0 ? void 0 : (_order$customer = order.customer) === null || _order$customer === void 0 ? void 0 : _order$customer.photo) ? /*#__PURE__*/_react.default.createElement(_styles.AccordionImage, {
    bgimage: order === null || order === void 0 ? void 0 : (_order$customer2 = order.customer) === null || _order$customer2 === void 0 ? void 0 : _order$customer2.photo
  }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles.CustomerContent, null, /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$customer3 = order.customer) === null || _order$customer3 === void 0 ? void 0 : _order$customer3.name, " ", order === null || order === void 0 ? void 0 : (_order$customer4 = order.customer) === null || _order$customer4 === void 0 ? void 0 : _order$customer4.lastname), /*#__PURE__*/_react.default.createElement("p", null, t('CUSTOMER', 'Customer')))), /*#__PURE__*/_react.default.createElement(_styles.DriverInfo, {
    ref: driverRef
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperDriverSelector, {
    ref: driverSelectorRef
  }, (order === null || order === void 0 ? void 0 : order.delivery_type) === 1 && /*#__PURE__*/_react.default.createElement(_DriverSelector.DriverSelector, {
    small: true,
    orderView: true,
    padding: "5px 0",
    defaultValue: (order === null || order === void 0 ? void 0 : order.driver_id) ? order.driver_id : 'default',
    drivers: drivers,
    order: order
  })))), /*#__PURE__*/_react.default.createElement(_styles.WrapperOrderStatus, {
    ref: orderStatusRef
  }, /*#__PURE__*/_react.default.createElement(_OrderStatusTypeSelector.OrderStatusTypeSelector, {
    defaultValue: parseInt(order === null || order === void 0 ? void 0 : order.status),
    orderId: order.id,
    deliveryType: order === null || order === void 0 ? void 0 : order.delivery_type,
    pendingOrder: pendingOrder,
    preOrder: preOrder,
    noPadding: true,
    handleUpdateOrderStatus: handleUpdateOrderStatus
  })));
};

exports.SmallOrderItemAccordion = SmallOrderItemAccordion;