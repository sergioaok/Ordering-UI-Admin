"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersTable = void 0;

var _react = _interopRequireWildcard(require("react"));

var _AiFillShop = _interopRequireDefault(require("@meronex/icons/ai/AiFillShop"));

var _GiFoodTruck = _interopRequireDefault(require("@meronex/icons/gi/GiFoodTruck"));

var _FaCarSide = _interopRequireDefault(require("@meronex/icons/fa/FaCarSide"));

var _RiCheckboxBlankLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankLine"));

var _RiCheckboxFill = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxFill"));

var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _styledComponents = require("styled-components");

var _DriverSelector = require("../DriverSelector");

var _OrderStatusTypeSelector = require("../OrderStatusTypeSelector");

var _ColumnAllowSettingPopover = require("../ColumnAllowSettingPopover");

var _PaginationButton = require("../PaginationButton");

var _styles = require("./styles");

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

var OrdersTable = function OrdersTable(props) {
  var isSelectedOrders = props.isSelectedOrders,
      orderList = props.orderList,
      driversList = props.driversList,
      pagination = props.pagination,
      selectedOrderIds = props.selectedOrderIds,
      loadMoreOrders = props.loadMoreOrders,
      handleUpdateOrderStatus = props.handleUpdateOrderStatus,
      handleSelectedOrderIds = props.handleSelectedOrderIds,
      handleOpenOrderDetail = props.handleOpenOrderDetail;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      _useUtils2$ = _useUtils2[0],
      parsePrice = _useUtils2$.parsePrice,
      parseDate = _useUtils2$.parseDate,
      optimizeImage = _useUtils2$.optimizeImage; // Change page


  var _useState = (0, _react.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1];

  var _useState3 = (0, _react.useState)(10),
      _useState4 = _slicedToArray(_useState3, 1),
      ordersPerPage = _useState4[0]; // Get current orders


  var indexOfLastPost = currentPage * ordersPerPage;
  var indexOfFirstPost = indexOfLastPost - ordersPerPage;

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      currentOrders = _useState6[0],
      setCurrentOrders = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      totalPages = _useState8[0],
      setTotalPages = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      totalOrders = _useState10[0],
      setTotalOrders = _useState10[1]; // Change page


  var prevPaginate = function prevPaginate() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  var nextPaginate = function nextPaginate() {
    if (currentPage !== totalPages) {
      if (orderList.orders.length < ordersPerPage * currentPage + 1) {
        loadMoreOrders();
      }

      setCurrentPage(currentPage + 1);
    }
  };

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      openPopover = _useState12[0],
      setOpenPopover = _useState12[1];

  var _useState13 = (0, _react.useState)({
    orderNumber: true,
    dateTime: true,
    business: true,
    customer: true,
    driver: true,
    advanced: true,
    total: true,
    status: true,
    deliveryType: true
  }),
      _useState14 = _slicedToArray(_useState13, 2),
      allowColumns = _useState14[0],
      setAllowColumns = _useState14[1];

  var optionsDefault = [{
    value: 'orderNumber',
    content: t('NUMBER_OF_ORDER', 'Number of order')
  }, {
    value: 'dateTime',
    content: t('DATE_TIME', 'Date and time')
  }, {
    value: 'business',
    content: t('BUSINESS', 'Business')
  }, {
    value: 'customer',
    content: t('CUSTOMER', 'Customer')
  }, {
    value: 'driver',
    content: t('DRIVER', 'Driver')
  }, {
    value: 'advanced',
    content: t('ADVANCED_LOGISTICS', 'Advance Logistics')
  }, {
    value: 'total',
    content: t('TOTAL', 'Total')
  }, {
    value: 'status',
    content: t('STATUS', 'Status')
  }, {
    value: 'deliveryType',
    content: t('DELIVERY_TYPE', 'Delivery type')
  }];

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

  var handleChangeAllowColumns = function handleChangeAllowColumns(type) {
    setAllowColumns(_objectSpread(_objectSpread({}, allowColumns), {}, _defineProperty({}, type, !allowColumns[type])));
  };

  var handleClickOrder = function handleClickOrder(order, e) {
    var inValid = !isSelectedOrders && (e.target.closest('.orderNo') || e.target.closest('.driverInfo') || e.target.closest('.orderStatusTitle'));
    if (inValid) return;
    handleOpenOrderDetail(order);
  };

  (0, _react.useEffect)(function () {
    if (orderList.loading) return;

    var _totalPages;

    if (pagination === null || pagination === void 0 ? void 0 : pagination.total) {
      _totalPages = Math.ceil((pagination === null || pagination === void 0 ? void 0 : pagination.total) / ordersPerPage);
    } else if (orderList.orders.length > 0) {
      _totalPages = Math.ceil(orderList.orders.length / ordersPerPage);
    }

    var _currentOrders = orderList.orders.slice(indexOfFirstPost, indexOfLastPost);

    setTotalOrders(pagination === null || pagination === void 0 ? void 0 : pagination.total);
    setTotalPages(_totalPages);
    setCurrentOrders(_currentOrders);
  }, [orderList, currentPage, pagination]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.OrdersContainer, {
    isSelectedOrders: isSelectedOrders
  }, /*#__PURE__*/_react.default.createElement(_styles.Table, {
    isSelectedOrders: isSelectedOrders
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", {
    className: !((allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.orderNumber) || (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.dateTime)) ? 'orderNo small' : 'orderNo'
  }, t('ORDER', 'Order')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.business) && /*#__PURE__*/_react.default.createElement("th", {
    className: "businessInfo"
  }, t('BUSINESS', 'Business')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.customer) && /*#__PURE__*/_react.default.createElement("th", {
    className: "customerInfo"
  }, t('CUSTOMER', 'Customer')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.driver) && /*#__PURE__*/_react.default.createElement("th", {
    className: "driverInfo"
  }, t('DRIVER', 'Driver')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.deliveryType) && /*#__PURE__*/_react.default.createElement("th", {
    className: "orderType"
  }, t('DELIVERY_TYPE', 'Delivery type')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.status) && /*#__PURE__*/_react.default.createElement("th", {
    className: "orderStatusTitle"
  }, t('ORDER_STATUS', 'Order status')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.advanced) && /*#__PURE__*/_react.default.createElement("th", {
    colSpan: 3,
    className: "advanced"
  }, t('ADVANCE_LOGISTICS', 'Advance logistics')), /*#__PURE__*/_react.default.createElement("th", {
    className: "orderPrice"
  }, /*#__PURE__*/_react.default.createElement(_ColumnAllowSettingPopover.ColumnAllowSettingPopover, {
    open: openPopover,
    allowColumns: allowColumns,
    optionsDefault: optionsDefault,
    onClick: function onClick() {
      return setOpenPopover(!openPopover);
    },
    onClose: function onClose() {
      return setOpenPopover(false);
    },
    handleChangeAllowColumns: handleChangeAllowColumns
  })))), /*#__PURE__*/_react.default.createElement("tbody", {
    id: "orders"
  }, orderList.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: i
    }, /*#__PURE__*/_react.default.createElement("td", {
      className: !((allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.orderNumber) || (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.dateTime)) ? 'orderNo small' : 'orderNo'
    }, /*#__PURE__*/_react.default.createElement(_styles.OrderNumberContainer, null, /*#__PURE__*/_react.default.createElement(_styles.CheckBox, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 25,
      height: 25,
      style: {
        margin: '10px'
      }
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.orderNumber) && /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.dateTime) && /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 120
    })))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.business) && /*#__PURE__*/_react.default.createElement("td", {
      className: "businessInfo"
    }, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 45,
      height: 45
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.customer) && /*#__PURE__*/_react.default.createElement("td", {
      className: "customerInfo"
    }, /*#__PURE__*/_react.default.createElement(_styles.CustomerInfo, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 45,
      height: 45
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.driver) && /*#__PURE__*/_react.default.createElement("td", {
      className: "driverInfo"
    }, /*#__PURE__*/_react.default.createElement(_styles.DriversInfo, {
      className: "d-flex align-items-center"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 45,
      height: 45
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      style: {
        margin: '10px'
      }
    }))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.deliveryType) && /*#__PURE__*/_react.default.createElement("td", {
      className: "orderType"
    }, /*#__PURE__*/_react.default.createElement(_styles.OrderType, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 35,
      height: 35
    }))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.status) && /*#__PURE__*/_react.default.createElement("td", {
      className: "orderStatusTitle"
    }, /*#__PURE__*/_react.default.createElement(_styles.WrapOrderStatusSelector, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      height: 30
    }))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.advanced) && /*#__PURE__*/_react.default.createElement("td", {
      className: "logistic"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60
    })))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.advanced) && /*#__PURE__*/_react.default.createElement("td", {
      className: "attempts"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60
    })))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.advanced) && /*#__PURE__*/_react.default.createElement("td", {
      className: "priority"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60
    })))), /*#__PURE__*/_react.default.createElement("td", {
      className: "orderPrice"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.total) && /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })))));
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, currentOrders.map(function (order) {
    var _order$business, _theme$images, _theme$images$dummies, _order$business2, _order$business3, _order$business3$city, _order$customer, _order$customer2, _order$customer3, _order$customer4, _theme$images2, _theme$images2$icons, _theme$images3, _theme$images3$icons, _order$summary;

    return /*#__PURE__*/_react.default.createElement("tr", {
      key: order.id,
      onClick: function onClick(e) {
        return handleClickOrder(order, e);
      }
    }, /*#__PURE__*/_react.default.createElement("td", {
      className: !((allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.orderNumber) || (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.dateTime)) ? 'orderNo small' : 'orderNo'
    }, /*#__PURE__*/_react.default.createElement(_styles.OrderNumberContainer, {
      onClick: function onClick() {
        return handleSelectedOrderIds(order.id);
      }
    }, !isSelectedOrders && /*#__PURE__*/_react.default.createElement(_styles.CheckBox, {
      isChecked: selectedOrderIds.includes(order === null || order === void 0 ? void 0 : order.id)
    }, selectedOrderIds.includes(order === null || order === void 0 ? void 0 : order.id) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, null) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null)), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.orderNumber) && /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, t('ORDER_NO', 'Order No.'), " ", order === null || order === void 0 ? void 0 : order.id), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.dateTime) && /*#__PURE__*/_react.default.createElement("p", {
      className: "date"
    }, parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
      utc: false
    }))))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.business) && /*#__PURE__*/_react.default.createElement("td", {
      className: "businessInfo"
    }, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_styles.Image, {
      bgimage: optimizeImage(((_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo), 'h_200,c_limit')
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, order === null || order === void 0 ? void 0 : (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.name), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : (_order$business3$city = _order$business3.city) === null || _order$business3$city === void 0 ? void 0 : _order$business3$city.name)))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.customer) && /*#__PURE__*/_react.default.createElement("td", {
      className: "customerInfo"
    }, /*#__PURE__*/_react.default.createElement(_styles.CustomerInfo, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, (order === null || order === void 0 ? void 0 : (_order$customer = order.customer) === null || _order$customer === void 0 ? void 0 : _order$customer.photo) ? /*#__PURE__*/_react.default.createElement(_styles.Image, {
      bgimage: order === null || order === void 0 ? void 0 : (_order$customer2 = order.customer) === null || _order$customer2 === void 0 ? void 0 : _order$customer2.photo
    }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, order === null || order === void 0 ? void 0 : (_order$customer3 = order.customer) === null || _order$customer3 === void 0 ? void 0 : _order$customer3.name), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$customer4 = order.customer) === null || _order$customer4 === void 0 ? void 0 : _order$customer4.cellphone)))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.driver) && /*#__PURE__*/_react.default.createElement("td", {
      className: "driverInfo"
    }, (order === null || order === void 0 ? void 0 : order.delivery_type) === 1 && /*#__PURE__*/_react.default.createElement(_styles.DriversInfo, null, /*#__PURE__*/_react.default.createElement(_DriverSelector.DriverSelector, {
      orderView: true,
      padding: "5px 0",
      defaultValue: (order === null || order === void 0 ? void 0 : order.driver_id) ? order.driver_id : 'default',
      drivers: driversList.drivers,
      order: order
    }))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.deliveryType) && /*#__PURE__*/_react.default.createElement("td", {
      className: "orderType"
    }, /*#__PURE__*/_react.default.createElement(_styles.OrderType, null, (order === null || order === void 0 ? void 0 : order.delivery_type) === 1 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("img", {
      src: theme === null || theme === void 0 ? void 0 : (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$icons = _theme$images2.icons) === null || _theme$images2$icons === void 0 ? void 0 : _theme$images2$icons.driverDelivery,
      alt: "Delivery"
    }), /*#__PURE__*/_react.default.createElement("span", null, t('DELIVERY', 'Delivery'))), (order === null || order === void 0 ? void 0 : order.delivery_type) === 2 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("img", {
      src: theme === null || theme === void 0 ? void 0 : (_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$icons = _theme$images3.icons) === null || _theme$images3$icons === void 0 ? void 0 : _theme$images3$icons.pickUp,
      alt: "pick up"
    }), /*#__PURE__*/_react.default.createElement("span", null, t('PICK_UP', 'Pick up'))), (order === null || order === void 0 ? void 0 : order.delivery_type) === 3 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_AiFillShop.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('EAT_IN', 'Eat In'))), (order === null || order === void 0 ? void 0 : order.delivery_type) === 4 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_GiFoodTruck.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('CURBSIDE', 'Curbside'))), (order === null || order === void 0 ? void 0 : order.delivery_type) === 5 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_FaCarSide.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRIVER_THRU', 'Driver thru'))))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.status) && /*#__PURE__*/_react.default.createElement("td", {
      className: "orderStatusTitle"
    }, /*#__PURE__*/_react.default.createElement(_styles.WrapOrderStatusSelector, null, /*#__PURE__*/_react.default.createElement(_OrderStatusTypeSelector.OrderStatusTypeSelector, {
      defaultValue: parseInt(order.status),
      orderId: order.id,
      deliveryType: order === null || order === void 0 ? void 0 : order.delivery_type,
      noPadding: true,
      handleUpdateOrderStatus: handleUpdateOrderStatus
    }))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.advanced) && /*#__PURE__*/_react.default.createElement("td", {
      className: "logistic"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, t('LOGISTIC', 'Logistic')), /*#__PURE__*/_react.default.createElement("p", null, getLogisticTag(order === null || order === void 0 ? void 0 : order.logistic_status)))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.advanced) && /*#__PURE__*/_react.default.createElement("td", {
      className: "attempts"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, t('ATTEMPTS', 'Attempts')), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : order.logistic_attemps))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.advanced) && /*#__PURE__*/_react.default.createElement("td", {
      className: "priority"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, t('PRIORITY', 'Priority')), /*#__PURE__*/_react.default.createElement("p", null, getPriorityTag(order === null || order === void 0 ? void 0 : order.priority)))), /*#__PURE__*/_react.default.createElement("td", {
      className: "orderPrice"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.total) && /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, parsePrice(order === null || order === void 0 ? void 0 : (_order$summary = order.summary) === null || _order$summary === void 0 ? void 0 : _order$summary.total)), !((order === null || order === void 0 ? void 0 : order.status) === 1 || (order === null || order === void 0 ? void 0 : order.status) === 11 || (order === null || order === void 0 ? void 0 : order.status) === 2 || (order === null || order === void 0 ? void 0 : order.status) === 5 || (order === null || order === void 0 ? void 0 : order.status) === 6 || (order === null || order === void 0 ? void 0 : order.status) === 10 || order.status === 12) && /*#__PURE__*/_react.default.createElement(TimgeAgo, {
      order: order
    }))));
  }))))), pagination && /*#__PURE__*/_react.default.createElement(_styles.WrapperPagination, null, !orderList.loading && totalPages > 0 && /*#__PURE__*/_react.default.createElement(_PaginationButton.PaginationButton, {
    pageSize: ordersPerPage,
    total: totalOrders,
    currentPage: currentPage,
    totalPages: totalPages,
    prevPaginate: prevPaginate,
    nextPaginate: nextPaginate
  })));
};

exports.OrdersTable = OrdersTable;

var TimgeAgo = function TimgeAgo(props) {
  var order = props.order;

  var _useUtils3 = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils4 = _slicedToArray(_useUtils3, 1),
      getTimeAgo = _useUtils4[0].getTimeAgo;

  var _useState15 = (0, _react.useState)((order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) ? getTimeAgo(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : getTimeAgo(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
    utc: false
  })),
      _useState16 = _slicedToArray(_useState15, 2),
      diffTime = _useState16[0],
      setDiffTime = _useState16[1];

  (0, _react.useEffect)(function () {
    var deActive = (order === null || order === void 0 ? void 0 : order.status) === 1 || (order === null || order === void 0 ? void 0 : order.status) === 11 || (order === null || order === void 0 ? void 0 : order.status) === 2 || (order === null || order === void 0 ? void 0 : order.status) === 5 || (order === null || order === void 0 ? void 0 : order.status) === 6 || (order === null || order === void 0 ? void 0 : order.status) === 10 || order.status === 12;
    if (deActive) return;
    var timer = setInterval(function () {
      var diff = (order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) ? getTimeAgo(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : getTimeAgo(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
        utc: false
      });
      setDiffTime(diff);
    }, 60 * 1000);
    return function () {
      clearInterval(timer);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement("p", null, diffTime);
};