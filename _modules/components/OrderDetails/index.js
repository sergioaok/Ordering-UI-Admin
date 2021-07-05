"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderDetails = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));

var _BsBell = _interopRequireDefault(require("@meronex/icons/bs/BsBell"));

var _BsChat = _interopRequireDefault(require("@meronex/icons/bs/BsChat"));

var _HiOutlinePhone = _interopRequireDefault(require("@meronex/icons/hi/HiOutlinePhone"));

var _HiOutlineLocationMarker = _interopRequireDefault(require("@meronex/icons/hi/HiOutlineLocationMarker"));

var _BisBusiness = _interopRequireDefault(require("@meronex/icons/bi/BisBusiness"));

var _GrClose = _interopRequireDefault(require("@meronex/icons/gr/GrClose"));

var _AiFillShop = _interopRequireDefault(require("@meronex/icons/ai/AiFillShop"));

var _GiFoodTruck = _interopRequireDefault(require("@meronex/icons/gi/GiFoodTruck"));

var _FaCarSide = _interopRequireDefault(require("@meronex/icons/fa/FaCarSide"));

var _EnDotsThreeVertical = _interopRequireDefault(require("@meronex/icons/en/EnDotsThreeVertical"));

var _Buttons = require("../../styles/Buttons");

var _NotFoundSource = require("../NotFoundSource");

var _ProductItemAccordion = require("../ProductItemAccordion");

var _OrderStatusTypeSelector = require("../OrderStatusTypeSelector");

var _DriverSelector = require("../DriverSelector");

var _Messages = require("../Messages");

var _MetaFields = require("../MetaFields");

var _Modal = require("../Modal");

var _SpinnerLoader = require("../SpinnerLoader");

var _styles = require("./styles");

var _styledComponents = require("styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var OrderDetailsUI = function OrderDetailsUI(props) {
  var _getOrderStatus, _getOrderStatus2, _order$business, _order$business2, _order$business3, _order$business4, _order$customer, _order$customer2, _order$customer3, _order$customer4, _order$customer5, _order$driver, _order$driver2, _order$driver3, _order$driver4, _theme$images2, _theme$images2$icons, _order$paymethod, _theme$images3, _theme$images3$icons, _theme$images4, _theme$images4$icons, _order$products, _order$summary, _order$summary2, _order$summary3, _order$summary4, _order$summary5, _order$summary6, _order$summary7, _order$summary8, _order$summary9, _order$summary10, _order$summary11, _theme$images5, _theme$images5$icons, _order$customer6, _order$customer7, _order$customer8, _order$customer9, _order$customer10, _order$customer11, _order$customer12, _order$customer14, _order$customer15, _order$business5, _order$business6, _order$business7, _order$business8, _order$business9, _order$business10, _order$driver5, _order$driver6, _order$driver7, _order$driver8, _order$driver9, _order$driver10, _order$driver11;

  var pendingOrder = props.pendingOrder,
      preOrder = props.preOrder,
      driversList = props.driversList,
      handleBackRedirect = props.handleBackRedirect,
      handleUpdateOrderStatus = props.handleUpdateOrderStatus,
      messageDashboardView = props.messageDashboardView,
      handleMessageOrderDetail = props.handleMessageOrderDetail,
      messageType = props.messageType,
      handleOpenMessage = props.handleOpenMessage,
      handleUpdateOrderForUnreadCount = props.handleUpdateOrderForUnreadCount,
      handleOpenOrderDetail = props.handleOpenOrderDetail,
      actionStatus = props.actionStatus,
      messages = props.messages;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)({
    customer: false,
    business: false,
    driver: false,
    history: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      openMessages = _useState2[0],
      setOpenMessages = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      openMetaFields = _useState4[0],
      setOpenMetaFields = _useState4[1];

  var theme = (0, _styledComponents.useTheme)();

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      _useUtils2$ = _useUtils2[0],
      parsePrice = _useUtils2$.parsePrice,
      parseNumber = _useUtils2$.parseNumber,
      parseDate = _useUtils2$.parseDate;

  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      user = _useSession2[0].user;

  var orderDetail = (0, _react.useRef)(null);

  var _useState5 = (0, _react.useState)({
    business: false,
    driver: false,
    customer: false
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      unreadAlert = _useState6[0],
      setUnreadAlert = _useState6[1];

  var _props$order = props.order,
      order = _props$order.order,
      loading = _props$order.loading;

  var getOrderStatus = function getOrderStatus(status) {
    var orderStatus = [{
      key: 0,
      value: 'Pending Order',
      slug: 'PENDING_ORDER',
      percentage: 25
    }, {
      key: 1,
      value: 'Completed by admin',
      slug: 'COMPLETED_BY_ADMIN',
      percentage: 100
    }, {
      key: 2,
      value: 'Reject by admin',
      slug: 'REJECT_BY_ADMIN',
      percentage: 0
    }, {
      key: 3,
      value: 'Driver arrived by business',
      slug: 'DRIVER_IN_BUSINESS',
      percentage: 60
    }, {
      key: 4,
      value: 'Ready for pickup',
      slug: 'READY_FOR_PICKUP',
      percentage: 70
    }, {
      key: 5,
      value: 'Reject by business',
      slug: 'REJECT_BY_BUSINESS',
      percentage: 0
    }, {
      key: 6,
      value: 'Reject by driver',
      slug: 'REJECT_BY_DRIVER',
      percentage: 0
    }, {
      key: 7,
      value: 'Accepted by business',
      slug: 'ACCEPTED_BY_BUSINESS',
      percentage: 35
    }, {
      key: 8,
      value: 'Accepted by driver',
      slug: 'ACCEPTED_BY_DRIVER',
      percentage: 45
    }, {
      key: 9,
      value: 'Pick up completed by driver',
      slug: 'PICK_UP_COMPLETED_BY_DRIVER',
      percentage: 80
    }, {
      key: 10,
      value: 'Pick up Failed by driver',
      slug: 'PICK_UP_FAILED_BY_DRIVER',
      percentage: 0
    }, {
      key: 11,
      value: 'Delivery completed by driver',
      slug: 'DELIVERY_COMPLETED_BY_DRIVER',
      percentage: 100
    }, {
      key: 12,
      value: 'Delivery Failed by driver',
      slug: 'DELIVERY_FAILED_BY_DRIVER',
      percentage: 0
    }, {
      key: 13,
      value: 'Preorder',
      slug: 'PREORDER',
      percentage: 25
    }, {
      key: 14,
      value: 'Order not ready',
      slug: 'ORDER_NOT_READY',
      percentage: 65
    }, {
      key: 15,
      value: 'Pickup completed by customer',
      slug: 'PICKUP_COMPLETED_BY_CUSTOMER',
      percentage: 100
    }, {
      key: 16,
      value: 'Canceled by customer',
      slug: 'CANCELED_BY_CUSTOMER',
      percentage: 0
    }, {
      key: 17,
      value: 'Not picked by customer',
      slug: 'NOT_PICKED_BY_CUSTOMER',
      percentage: 0
    }, {
      key: 18,
      value: 'Driver almost arrived to business',
      slug: 'DRIVER_ALMOST_ARRIVED_TO_BUSINESS',
      percentage: 50
    }, {
      key: 19,
      value: 'Driver almost arrived to customer',
      slug: 'DRIVER_ALMOST_ARRIVED_TO_CUSTOMER',
      percentage: 90
    }, {
      key: 20,
      value: 'Customer almost arrived to business',
      slug: 'CUSTOMER_ALMOST_ARRIVED_TO_BUSINESS',
      percentage: 50
    }, {
      key: 21,
      value: 'Customer arrived to business',
      slug: 'CUSTOMER_ARRIVED_TO_BUSINESS',
      percentage: 60
    }];
    var objectStatus = orderStatus.find(function (o) {
      return o.key === status;
    });
    return objectStatus && objectStatus;
  };

  var getImage = function getImage(status) {
    try {
      var _theme$images, _theme$images$order;

      return (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$order = _theme$images.order) === null || _theme$images$order === void 0 ? void 0 : _theme$images$order["status".concat(status)];
    } catch (error) {
      return 'https://picsum.photos/75';
    }
  };

  var unreadMessages = function unreadMessages() {
    var unreadedMessages = messages === null || messages === void 0 ? void 0 : messages.messages.filter(function (message) {
      var _message$can_see;

      return !(message === null || message === void 0 ? void 0 : message.read) && (message === null || message === void 0 ? void 0 : (_message$can_see = message.can_see) === null || _message$can_see === void 0 ? void 0 : _message$can_see.includes(0)) && (message === null || message === void 0 ? void 0 : message.author_id) !== user.id;
    });
    var customer = unreadedMessages === null || unreadedMessages === void 0 ? void 0 : unreadedMessages.some(function (message) {
      var _message$author;

      return (message === null || message === void 0 ? void 0 : (_message$author = message.author) === null || _message$author === void 0 ? void 0 : _message$author.level) === 3;
    });
    var business = unreadedMessages === null || unreadedMessages === void 0 ? void 0 : unreadedMessages.some(function (message) {
      var _message$author2;

      return (message === null || message === void 0 ? void 0 : (_message$author2 = message.author) === null || _message$author2 === void 0 ? void 0 : _message$author2.level) === 2;
    });
    var driver = unreadedMessages === null || unreadedMessages === void 0 ? void 0 : unreadedMessages.some(function (message) {
      var _message$author3;

      return (message === null || message === void 0 ? void 0 : (_message$author3 = message.author) === null || _message$author3 === void 0 ? void 0 : _message$author3.level) === 4;
    });
    setUnreadAlert({
      business: business,
      driver: driver,
      customer: customer
    });
  };

  var handleOpenMessages = function handleOpenMessages(openMessage) {
    if (openMessage === 'customer') {
      orderDetail.current.style.display = 'none';
      setOpenMessages({
        customer: true,
        business: false,
        driver: false,
        history: false
      });
      setUnreadAlert(_objectSpread(_objectSpread({}, unreadAlert), {}, {
        customer: false
      }));
    }

    if (openMessage === 'business') {
      orderDetail.current.style.display = 'none';
      setOpenMessages({
        customer: false,
        business: true,
        driver: false,
        history: false
      });
      setUnreadAlert(_objectSpread(_objectSpread({}, unreadAlert), {}, {
        business: false
      }));
    }

    if (openMessage === 'driver') {
      orderDetail.current.style.display = 'none';
      setOpenMessages({
        customer: false,
        business: false,
        driver: true,
        history: false
      });
      setUnreadAlert(_objectSpread(_objectSpread({}, unreadAlert), {}, {
        driver: false
      }));
    }

    if (openMessage === 'history') {
      setOpenMessages({
        customer: false,
        business: false,
        driver: false,
        history: true
      });
    }
  };

  var handleCloseMessages = function handleCloseMessages() {
    orderDetail.current.style.display = 'flex';
    setOpenMessages({
      customer: false,
      business: false,
      driver: false,
      history: false
    });
  };

  (0, _react.useEffect)(function () {
    unreadMessages();
  }, [messages === null || messages === void 0 ? void 0 : messages.messages]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, {
    className: "order-detail",
    messageDashboardView: messageDashboardView
  }, order && Object.keys(order).length > 0 && !loading && /*#__PURE__*/_react.default.createElement(_styles.WrapperContainer, {
    ref: orderDetail,
    messageDashboardView: messageDashboardView
  }, /*#__PURE__*/_react.default.createElement(_styles.OrderInfoContent, {
    className: "order-info",
    messageDashboardView: messageDashboardView
  }, /*#__PURE__*/_react.default.createElement(_styles.OrderInfo, null, /*#__PURE__*/_react.default.createElement(_styles.OrderData, {
    messageDashboardView: messageDashboardView
  }, /*#__PURE__*/_react.default.createElement("h1", null, t('ORDER_NO', 'Order No'), ". #", order === null || order === void 0 ? void 0 : order.id), /*#__PURE__*/_react.default.createElement("p", null, t('DATE_TIME_FOR_ORDER', 'Date and time for your order')), /*#__PURE__*/_react.default.createElement("p", {
    className: "date"
  }, parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
    utc: false
  })), /*#__PURE__*/_react.default.createElement(_styles.StatusBar, {
    percentage: (_getOrderStatus = getOrderStatus(order === null || order === void 0 ? void 0 : order.status)) === null || _getOrderStatus === void 0 ? void 0 : _getOrderStatus.percentage
  })), (actionStatus === null || actionStatus === void 0 ? void 0 : actionStatus.loading) ? /*#__PURE__*/_react.default.createElement(_SpinnerLoader.SpinnerLoader, {
    style: {
      width: 170,
      height: 90,
      transform: 'scale(0.3)'
    }
  }) : /*#__PURE__*/_react.default.createElement(_styles.OrderStatus, null, !pendingOrder && !preOrder && /*#__PURE__*/_react.default.createElement("span", null, (_getOrderStatus2 = getOrderStatus(parseInt(order === null || order === void 0 ? void 0 : order.status))) === null || _getOrderStatus2 === void 0 ? void 0 : _getOrderStatus2.value), pendingOrder && /*#__PURE__*/_react.default.createElement("span", null, t('PENDING', 'Pending')), preOrder && /*#__PURE__*/_react.default.createElement("span", null, t('PREORDER', 'Preorder')), /*#__PURE__*/_react.default.createElement(_styles.StatusImage, null, /*#__PURE__*/_react.default.createElement("img", {
    src: getImage((order === null || order === void 0 ? void 0 : order.status) || 0),
    alt: "status"
  }))), messageDashboardView && /*#__PURE__*/_react.default.createElement(_styles.OrderDetailCloseButton, null, /*#__PURE__*/_react.default.createElement(_GrClose.default, {
    onClick: function onClick() {
      return handleMessageOrderDetail(false);
    }
  }))), messageDashboardView && /*#__PURE__*/_react.default.createElement(_styles.MessageContactInfo, null, /*#__PURE__*/_react.default.createElement(_styles.ContactBlock, {
    active: messageType === 'business',
    onClick: function onClick() {
      return handleOpenMessage(order, 'business');
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.PhotoWrapper, {
    messageDashboardView: messageDashboardView
  }, (order === null || order === void 0 ? void 0 : (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.logo) ? /*#__PURE__*/_react.default.createElement(_styles.Photo, {
    bgimage: order === null || order === void 0 ? void 0 : (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.logo
  }) : /*#__PURE__*/_react.default.createElement(_BisBusiness.default, null)), /*#__PURE__*/_react.default.createElement(_styles.InfonContent, null, /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.name), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$business4 = order.business) === null || _order$business4 === void 0 ? void 0 : _order$business4.address))), /*#__PURE__*/_react.default.createElement(_styles.ContactBlock, {
    active: messageType === 'customer',
    onClick: function onClick() {
      return handleOpenMessage(order, 'customer');
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.PhotoWrapper, {
    messageDashboardView: messageDashboardView
  }, (order === null || order === void 0 ? void 0 : (_order$customer = order.customer) === null || _order$customer === void 0 ? void 0 : _order$customer.photo) ? /*#__PURE__*/_react.default.createElement(_styles.Photo, {
    bgimage: order === null || order === void 0 ? void 0 : (_order$customer2 = order.customer) === null || _order$customer2 === void 0 ? void 0 : _order$customer2.photo
  }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles.InfonContent, null, /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$customer3 = order.customer) === null || _order$customer3 === void 0 ? void 0 : _order$customer3.name, " ", order === null || order === void 0 ? void 0 : (_order$customer4 = order.customer) === null || _order$customer4 === void 0 ? void 0 : _order$customer4.lastname), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$customer5 = order.customer) === null || _order$customer5 === void 0 ? void 0 : _order$customer5.cellphone))), (order === null || order === void 0 ? void 0 : order.driver_id) && /*#__PURE__*/_react.default.createElement(_styles.ContactBlock, {
    active: messageType === 'driver',
    onClick: function onClick() {
      return handleOpenMessage(order, 'driver');
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.PhotoWrapper, {
    messageDashboardView: messageDashboardView
  }, (order === null || order === void 0 ? void 0 : (_order$driver = order.driver) === null || _order$driver === void 0 ? void 0 : _order$driver.photo) ? /*#__PURE__*/_react.default.createElement(_styles.Photo, {
    bgimage: order === null || order === void 0 ? void 0 : (_order$driver2 = order.driver) === null || _order$driver2 === void 0 ? void 0 : _order$driver2.photo
  }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles.InfonContent, null, /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$driver3 = order.driver) === null || _order$driver3 === void 0 ? void 0 : _order$driver3.name, " ", order === null || order === void 0 ? void 0 : (_order$driver4 = order.driver) === null || _order$driver4 === void 0 ? void 0 : _order$driver4.lastname), /*#__PURE__*/_react.default.createElement("p", null, t('DRIVER', 'Driver'))))), /*#__PURE__*/_react.default.createElement(_styles.PayAndOrderTypeInfo, null, /*#__PURE__*/_react.default.createElement(_styles.Paymethod, null, /*#__PURE__*/_react.default.createElement("p", null, t('PAYMETHOD', 'Paymethod')), /*#__PURE__*/_react.default.createElement(_styles.PaymethodContent, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 ? void 0 : (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$icons = _theme$images2.icons) === null || _theme$images2$icons === void 0 ? void 0 : _theme$images2$icons.cash,
    alt: "cash"
  }), order === null || order === void 0 ? void 0 : (_order$paymethod = order.paymethod) === null || _order$paymethod === void 0 ? void 0 : _order$paymethod.name)), /*#__PURE__*/_react.default.createElement(_styles.PaymethodCreatedDate, null, /*#__PURE__*/_react.default.createElement(_styles.PaymethodCreatedDateContent, null, /*#__PURE__*/_react.default.createElement("p", null, t('DATE', 'Date')), /*#__PURE__*/_react.default.createElement("p", null, parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
    utc: false
  })))), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeInfo, null, /*#__PURE__*/_react.default.createElement("p", null, t('ORDER_TYPE', 'Order Type')), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeContent, null, (order === null || order === void 0 ? void 0 : order.delivery_type) === 1 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 ? void 0 : (_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$icons = _theme$images3.icons) === null || _theme$images3$icons === void 0 ? void 0 : _theme$images3$icons.driverDelivery,
    alt: "order type"
  }), t('DELIVERY', 'Delivery')), (order === null || order === void 0 ? void 0 : order.delivery_type) === 2 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 ? void 0 : (_theme$images4 = theme.images) === null || _theme$images4 === void 0 ? void 0 : (_theme$images4$icons = _theme$images4.icons) === null || _theme$images4$icons === void 0 ? void 0 : _theme$images4$icons.pickUp,
    alt: "pickup"
  }), t('PICKUP', 'Pickup')), (order === null || order === void 0 ? void 0 : order.delivery_type) === 3 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_AiFillShop.default, null), t('EAT_IN', 'Eat in')), (order === null || order === void 0 ? void 0 : order.delivery_type) === 4 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_GiFoodTruck.default, null), t('CURBSIDE', 'Curbside')), (order === null || order === void 0 ? void 0 : order.delivery_type) === 5 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_FaCarSide.default, null), t('DRIVE_THRU', 'Drive thru'))))), /*#__PURE__*/_react.default.createElement(_styles.OrderProducts, null, (order === null || order === void 0 ? void 0 : (_order$products = order.products) === null || _order$products === void 0 ? void 0 : _order$products.length) && (order === null || order === void 0 ? void 0 : order.products.map(function (product) {
    return /*#__PURE__*/_react.default.createElement(_ProductItemAccordion.ProductItemAccordion, {
      key: product.id,
      product: product
    });
  }))), /*#__PURE__*/_react.default.createElement(_styles.OrderBill, null, /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('SUBTOTAL', 'Subtotal')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(order === null || order === void 0 ? void 0 : (_order$summary = order.summary) === null || _order$summary === void 0 ? void 0 : _order$summary.subtotal))), (order === null || order === void 0 ? void 0 : (_order$summary2 = order.summary) === null || _order$summary2 === void 0 ? void 0 : _order$summary2.discount) > 0 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('DISCOUNT', 'Discount')), /*#__PURE__*/_react.default.createElement("td", null, "-", parsePrice(order === null || order === void 0 ? void 0 : (_order$summary3 = order.summary) === null || _order$summary3 === void 0 ? void 0 : _order$summary3.discount))), (order === null || order === void 0 ? void 0 : (_order$summary4 = order.summary) === null || _order$summary4 === void 0 ? void 0 : _order$summary4.tax) > 0 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('TAX', 'Tax'), " (", parseNumber(order === null || order === void 0 ? void 0 : order.tax), "%)"), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(order === null || order === void 0 ? void 0 : (_order$summary5 = order.summary) === null || _order$summary5 === void 0 ? void 0 : _order$summary5.tax))), (order === null || order === void 0 ? void 0 : (_order$summary6 = order.summary) === null || _order$summary6 === void 0 ? void 0 : _order$summary6.delivery_price) > 0 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('DELIVERY_FEE', 'Delivery Fee')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(order === null || order === void 0 ? void 0 : (_order$summary7 = order.summary) === null || _order$summary7 === void 0 ? void 0 : _order$summary7.delivery_price))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('DRIVER_TIP', 'Driver tip')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(order === null || order === void 0 ? void 0 : (_order$summary8 = order.summary) === null || _order$summary8 === void 0 ? void 0 : _order$summary8.driver_tip))), (order === null || order === void 0 ? void 0 : (_order$summary9 = order.summary) === null || _order$summary9 === void 0 ? void 0 : _order$summary9.service_fee) > 0 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('SERVICE FEE', 'Service Fee'), " (", parseNumber(order === null || order === void 0 ? void 0 : order.service_fee), "%)"), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(order === null || order === void 0 ? void 0 : (_order$summary10 = order.summary) === null || _order$summary10 === void 0 ? void 0 : _order$summary10.service_fee))))), /*#__PURE__*/_react.default.createElement("table", {
    className: "total"
  }, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('TOTAL', 'Total')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(order === null || order === void 0 ? void 0 : (_order$summary11 = order.summary) === null || _order$summary11 === void 0 ? void 0 : _order$summary11.total)))))), messageDashboardView && /*#__PURE__*/_react.default.createElement(_styles.WrapperMoreInformationButton, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "darkBlue",
    onClick: function onClick() {
      return handleOpenOrderDetail(order.id);
    }
  }, t('MORE_INFORMATION', 'More information')))), !messageDashboardView && /*#__PURE__*/_react.default.createElement(_styles.ContactInfoContent, {
    className: "contact-info"
  }, /*#__PURE__*/_react.default.createElement(_styles.ContactInfoHeader, null, /*#__PURE__*/_react.default.createElement(_OrderStatusTypeSelector.OrderStatusTypeSelector, {
    orderId: order.id,
    deliveryType: order === null || order === void 0 ? void 0 : order.delivery_type,
    defaultValue: parseInt(order.status),
    pendingOrder: pendingOrder,
    preOrder: preOrder,
    handleUpdateOrderStatus: handleUpdateOrderStatus
  }), /*#__PURE__*/_react.default.createElement(_styles.WrapperButton, null, /*#__PURE__*/_react.default.createElement(_styles.ButtonLink, {
    onClick: function onClick() {
      return setOpenMetaFields(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_EnDotsThreeVertical.default, null)), /*#__PURE__*/_react.default.createElement(_styles.ButtonLink, {
    onClick: function onClick() {
      return handleOpenMessages('history');
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 ? void 0 : (_theme$images5 = theme.images) === null || _theme$images5 === void 0 ? void 0 : (_theme$images5$icons = _theme$images5.icons) === null || _theme$images5$icons === void 0 ? void 0 : _theme$images5$icons.timeline,
    alt: "timeline"
  })))), /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('CUSTOMER', 'Customer')), /*#__PURE__*/_react.default.createElement(_styles.SectionContainer, null, /*#__PURE__*/_react.default.createElement(_styles.PhotoWrapper, null, (order === null || order === void 0 ? void 0 : (_order$customer6 = order.customer) === null || _order$customer6 === void 0 ? void 0 : _order$customer6.photo) ? /*#__PURE__*/_react.default.createElement(_styles.Photo, {
    bgimage: order === null || order === void 0 ? void 0 : (_order$customer7 = order.customer) === null || _order$customer7 === void 0 ? void 0 : _order$customer7.photo
  }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("h1", null, order === null || order === void 0 ? void 0 : (_order$customer8 = order.customer) === null || _order$customer8 === void 0 ? void 0 : _order$customer8.name, " ", order === null || order === void 0 ? void 0 : (_order$customer9 = order.customer) === null || _order$customer9 === void 0 ? void 0 : _order$customer9.lastname), (order === null || order === void 0 ? void 0 : (_order$customer10 = order.customer) === null || _order$customer10 === void 0 ? void 0 : _order$customer10.address) && /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_HiOutlineLocationMarker.default, null), " ", order === null || order === void 0 ? void 0 : (_order$customer11 = order.customer) === null || _order$customer11 === void 0 ? void 0 : _order$customer11.address), /*#__PURE__*/_react.default.createElement(_styles.CustomerContactBlock, null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return handleOpenMessages('customer');
    }
  }, /*#__PURE__*/_react.default.createElement(_BsChat.default, null), " ", t('CHAT', 'Chat')), (order === null || order === void 0 ? void 0 : order.unread_count) > 0 && unreadAlert.customer && /*#__PURE__*/_react.default.createElement(_styles.NotificationIcon, null, /*#__PURE__*/_react.default.createElement(_BsBell.default, null)), (order === null || order === void 0 ? void 0 : (_order$customer12 = order.customer) === null || _order$customer12 === void 0 ? void 0 : _order$customer12.cellphone) && /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      var _order$customer13;

      return window.open("tel:".concat(order === null || order === void 0 ? void 0 : (_order$customer13 = order.customer) === null || _order$customer13 === void 0 ? void 0 : _order$customer13.cellphone));
    }
  }, /*#__PURE__*/_react.default.createElement(_HiOutlinePhone.default, null), " ", t('CALL', 'Call'))), (order === null || order === void 0 ? void 0 : (_order$customer14 = order.customer) === null || _order$customer14 === void 0 ? void 0 : _order$customer14.cellphone) && /*#__PURE__*/_react.default.createElement(_styles.PhoneNumber, null, /*#__PURE__*/_react.default.createElement(_HiOutlinePhone.default, null), " ", order === null || order === void 0 ? void 0 : (_order$customer15 = order.customer) === null || _order$customer15 === void 0 ? void 0 : _order$customer15.cellphone))), (user === null || user === void 0 ? void 0 : user.level) === 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('BUSINESS', 'Business')), /*#__PURE__*/_react.default.createElement(_styles.SectionContainer, null, /*#__PURE__*/_react.default.createElement(_styles.PhotoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Photo, {
    bgimage: order === null || order === void 0 ? void 0 : (_order$business5 = order.business) === null || _order$business5 === void 0 ? void 0 : _order$business5.logo
  })), /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("h1", null, order === null || order === void 0 ? void 0 : (_order$business6 = order.business) === null || _order$business6 === void 0 ? void 0 : _order$business6.name), (order === null || order === void 0 ? void 0 : (_order$business7 = order.business) === null || _order$business7 === void 0 ? void 0 : _order$business7.address) && /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_HiOutlineLocationMarker.default, null), order === null || order === void 0 ? void 0 : (_order$business8 = order.business) === null || _order$business8 === void 0 ? void 0 : _order$business8.address), /*#__PURE__*/_react.default.createElement(_styles.CustomerContactBlock, null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return handleOpenMessages('business');
    }
  }, /*#__PURE__*/_react.default.createElement(_BsChat.default, null), " ", t('CHAT', 'Chat')), (order === null || order === void 0 ? void 0 : order.unread_count) > 0 && unreadAlert.business && /*#__PURE__*/_react.default.createElement(_styles.NotificationIcon, null, /*#__PURE__*/_react.default.createElement(_BsBell.default, null)), (order === null || order === void 0 ? void 0 : (_order$business9 = order.business) === null || _order$business9 === void 0 ? void 0 : _order$business9.phone) && /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return window.open("tel:".concat(order.business.phone));
    }
  }, /*#__PURE__*/_react.default.createElement(_HiOutlinePhone.default, null), " ", t('CALL', 'Call'))), (order === null || order === void 0 ? void 0 : (_order$business10 = order.business) === null || _order$business10 === void 0 ? void 0 : _order$business10.phone) && /*#__PURE__*/_react.default.createElement(_styles.PhoneNumber, null, /*#__PURE__*/_react.default.createElement(_HiOutlinePhone.default, null), " ", order.business.phone)))), (order === null || order === void 0 ? void 0 : order.delivery_type) === 1 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('DRIVER', 'Driver')), /*#__PURE__*/_react.default.createElement(_styles.SectionContainer, null, /*#__PURE__*/_react.default.createElement(_styles.PhotoWrapper, null, (order === null || order === void 0 ? void 0 : (_order$driver5 = order.driver) === null || _order$driver5 === void 0 ? void 0 : _order$driver5.photo) ? /*#__PURE__*/_react.default.createElement(_styles.Photo, {
    bgimage: order === null || order === void 0 ? void 0 : (_order$driver6 = order.driver) === null || _order$driver6 === void 0 ? void 0 : _order$driver6.photo
  }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), order.driver_id ? /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("h1", null, order === null || order === void 0 ? void 0 : (_order$driver7 = order.driver) === null || _order$driver7 === void 0 ? void 0 : _order$driver7.name, " ", order === null || order === void 0 ? void 0 : (_order$driver8 = order.driver) === null || _order$driver8 === void 0 ? void 0 : _order$driver8.lastname), /*#__PURE__*/_react.default.createElement(_styles.CustomerContactBlock, null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return handleOpenMessages('driver');
    }
  }, /*#__PURE__*/_react.default.createElement(_BsChat.default, null), " ", t('CHAT', 'Chat')), (order === null || order === void 0 ? void 0 : order.unread_count) > 0 && unreadAlert.driver && /*#__PURE__*/_react.default.createElement(_styles.NotificationIcon, null, /*#__PURE__*/_react.default.createElement(_BsBell.default, null)), (order === null || order === void 0 ? void 0 : (_order$driver9 = order.driver) === null || _order$driver9 === void 0 ? void 0 : _order$driver9.cellphone) && /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return window.open("tel:".concat(order.driver.cellphone));
    }
  }, /*#__PURE__*/_react.default.createElement(_HiOutlinePhone.default, null), " ", t('CALL', 'Call'))), /*#__PURE__*/_react.default.createElement(_styles.PhoneNumber, null, /*#__PURE__*/_react.default.createElement(_HiOutlinePhone.default, null), " ", order === null || order === void 0 ? void 0 : (_order$driver10 = order.driver) === null || _order$driver10 === void 0 ? void 0 : _order$driver10.cellphone)) : /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("h1", null, t('NO_DRIVER', 'No driver')))), /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, {
    driver: true
  }, t('SELECT_DRIVER', 'Select Driver')), /*#__PURE__*/_react.default.createElement(_styles.DriverSelectorContainer, null, /*#__PURE__*/_react.default.createElement(_DriverSelector.DriverSelector, {
    drivers: driversList.drivers,
    isPhoneView: true,
    defaultValue: (order === null || order === void 0 ? void 0 : (_order$driver11 = order.driver) === null || _order$driver11 === void 0 ? void 0 : _order$driver11.id) ? order.driver.id : 'default',
    order: order
  }))), /*#__PURE__*/_react.default.createElement(_styles.PrintButtonContainer, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "darkBlue",
    onClick: function onClick() {
      return window.print();
    }
  }, t('PRINT', 'Print'))))), loading && /*#__PURE__*/_react.default.createElement(_styles.WrapperContainer, {
    className: "skeleton-loading"
  }, /*#__PURE__*/_react.default.createElement(_styles.SkeletonBlockWrapp, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonBlock, {
    width: 100
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 75
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 100
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 250
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 25
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 25
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 25
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 25
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 25
  }))), !messageDashboardView && /*#__PURE__*/_react.default.createElement(_styles.SkeletonBlockWrapp, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonBlock, {
    width: 100
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 50
  }), _toConsumableArray(Array(3)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SkeletonInfoCell, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80,
      height: 20
    }), /*#__PURE__*/_react.default.createElement(_styles.SkeletonInnerBlock, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80,
      height: 80
    }), /*#__PURE__*/_react.default.createElement(_styles.WrapperSkeletonText, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 200,
      height: 20
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 200,
      height: 20
    }), /*#__PURE__*/_react.default.createElement(_styles.WrapperSkeletonButton, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80,
      height: 30
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80,
      height: 30
    })))));
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 120,
    height: 25
  }), /*#__PURE__*/_react.default.createElement(_styles.WrapperSkeletonBottom, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 50
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 50
  }))))), !loading && !order && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_ORDER', 'Sorry, we couldn\'t find the requested order.'),
    btnTitle: t('PROFILE_ORDERS_REDIRECT', 'Go to Orders'),
    onClickButton: handleBackRedirect
  }), (openMessages.driver || openMessages.business || openMessages.customer) && /*#__PURE__*/_react.default.createElement(_styles.ChatContainer, null, /*#__PURE__*/_react.default.createElement(_Messages.Messages, {
    orderId: order === null || order === void 0 ? void 0 : order.id,
    order: order,
    customer: openMessages.customer,
    business: openMessages.business,
    driver: openMessages.driver,
    history: openMessages.history,
    handleUpdateOrderForUnreadCount: handleUpdateOrderForUnreadCount,
    onClose: function onClose() {
      return handleCloseMessages();
    },
    messages: messages
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "70%",
    height: "70vh",
    open: openMessages.history,
    onClose: function onClose() {
      return handleCloseMessages();
    }
  }, /*#__PURE__*/_react.default.createElement(_Messages.Messages, {
    orderId: order === null || order === void 0 ? void 0 : order.id,
    order: order,
    history: openMessages.history,
    handleUpdateOrderForUnreadCount: handleUpdateOrderForUnreadCount,
    messages: messages
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "70%",
    height: "70vh",
    open: openMetaFields,
    onClose: function onClose() {
      return setOpenMetaFields(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_MetaFields.MetaFields, {
    orderId: order === null || order === void 0 ? void 0 : order.id
  })));
};

var OrderDetails = function OrderDetails(props) {
  var orderDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    asDashboard: true,
    driversList: props.driversList,
    UIComponent: OrderDetailsUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.OrderDetails, orderDetailsProps);
};

exports.OrderDetails = OrderDetails;