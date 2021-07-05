"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderItemAccordion = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _orderingComponentsAdmin = require("ordering-components-admin");

var _styledComponents = require("styled-components");

var _EnChevronDown = _interopRequireDefault(require("@meronex/icons/en/EnChevronDown"));

var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));

var _OrderStatusTypeSelector = require("../OrderStatusTypeSelector");

var _DriverSelector = require("../DriverSelector");

var _RiCheckboxBlankCircleFill = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankCircleFill"));

var _RiCheckboxCircleFill = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxCircleFill"));

var _AiFillShop = _interopRequireDefault(require("@meronex/icons/ai/AiFillShop"));

var _GiFoodTruck = _interopRequireDefault(require("@meronex/icons/gi/GiFoodTruck"));

var _FaCarSide = _interopRequireDefault(require("@meronex/icons/fa/FaCarSide"));

var _OrderProductQuickDetail = require("../OrderProductQuickDetail");

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

var OrderItemAccordion = function OrderItemAccordion(props) {
  var _theme$colors, _theme$colors2, _theme$colors3, _order$business, _theme$images, _theme$images$dummies, _order$business2, _order$business3, _order$business3$city, _order$customer, _order$customer2, _order$customer3, _order$customer4, _theme$images2, _theme$images2$icons, _theme$images3, _theme$images3$icons, _order$summary;

  var order = props.order,
      drivers = props.drivers,
      selectedOrderIds = props.selectedOrderIds,
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
      optimizeImage = _useUtils2$.optimizeImage,
      getTimeAgo = _useUtils2$.getTimeAgo;

  var history = (0, _reactRouterDom.useHistory)();

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      setActive = _useState2[0],
      setActiveState = _useState2[1]; // const [setHeight, setHeightState] = useState('0px')


  var _useState3 = (0, _react.useState)('accordion__icon'),
      _useState4 = _slicedToArray(_useState3, 2),
      setRotate = _useState4[0],
      setRotateState = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      openOrderQuickDetail = _useState6[0],
      setOpenOrderQuickDetail = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      loadedOrderQuickDetail = _useState8[0],
      setLoadedOrderQuickDetail = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isChecked = _useState10[0],
      setIsChecked = _useState10[1];

  var checkbox = (0, _react.useRef)(null); // const content = useRef(null)

  var toggleBtn = (0, _react.useRef)(null);
  var driverSelectorRef = (0, _react.useRef)(null);

  var _useState11 = (0, _react.useState)((order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) ? getTimeAgo(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : getTimeAgo(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
    utc: false
  })),
      _useState12 = _slicedToArray(_useState11, 2),
      diffTime = _useState12[0],
      setDiffTime = _useState12[1];

  var toggleOrderSelect = function toggleOrderSelect(id) {
    setIsChecked(!isChecked);
    handleSelectedOrderIds(id);
  };

  var toggleAccordion = function toggleAccordion() {
    setLoadedOrderQuickDetail(true);
    setActiveState(setActive === '' ? 'active' : ''); // setHeightState(
    //   setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    // )

    setOpenOrderQuickDetail(!openOrderQuickDetail);
    setRotateState(setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate');
  };

  var handleGoToPage = function handleGoToPage(e) {
    var _checkbox$current, _driverSelectorRef$cu, _toggleBtn$current;

    var isActionClick = ((_checkbox$current = checkbox.current) === null || _checkbox$current === void 0 ? void 0 : _checkbox$current.contains(e.target)) || ((_driverSelectorRef$cu = driverSelectorRef.current) === null || _driverSelectorRef$cu === void 0 ? void 0 : _driverSelectorRef$cu.contains(e.target)) || ((_toggleBtn$current = toggleBtn.current) === null || _toggleBtn$current === void 0 ? void 0 : _toggleBtn$current.contains(e.target)) || e.target.closest('.orderStatus');

    if (!isActionClick) {
      history.push("/orders-deliveries?id=".concat(order.id));
      handleOpenOrderDetail(order.id);
    }
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
    if (!selectedOrderIds) {
      setIsChecked(false);
      return;
    }

    if (selectedOrderIds.includes(order.id)) setIsChecked(true);
  }, []);
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.AccordionSection, null, /*#__PURE__*/_react.default.createElement(_styles.OrderItemAccordionContainer, {
    className: setActive,
    filterColor: (order === null || order === void 0 ? void 0 : order.logistic_status) === -1 || (order === null || order === void 0 ? void 0 : order.logistic_status) === 0 ? theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.deadlineOk : order.logistic_status === 1 ? theme === null || theme === void 0 ? void 0 : (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.deadlineDelayed : theme === null || theme === void 0 ? void 0 : (_theme$colors3 = theme.colors) === null || _theme$colors3 === void 0 ? void 0 : _theme$colors3.deadlineRisk,
    onClick: function onClick(e) {
      return handleGoToPage(e);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.OrderItemAccordionCell, null, /*#__PURE__*/_react.default.createElement(_styles.CheckBoxContainer, {
    ref: checkbox,
    onClick: function onClick() {
      return toggleOrderSelect(order.id);
    }
  }, isChecked ? /*#__PURE__*/_react.default.createElement(_RiCheckboxCircleFill.default, null) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankCircleFill.default, null)), /*#__PURE__*/_react.default.createElement(_styles.TextBlockContainer, null, /*#__PURE__*/_react.default.createElement(_styles.BigText, null, t('ORDER_NO', 'Order No.'), " ", order === null || order === void 0 ? void 0 : order.id), /*#__PURE__*/_react.default.createElement(_styles.SmallText, null, parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
    utc: false
  })))), /*#__PURE__*/_react.default.createElement(_styles.OrderInfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperGeneralInfo, null, /*#__PURE__*/_react.default.createElement(_styles.OrderItemAccordionCell, {
    className: "order-item-business"
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperAccordionImage, null, /*#__PURE__*/_react.default.createElement(_styles.AccordionImage, {
    bgimage: optimizeImage(((_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo), 'h_200,c_limit')
  })), /*#__PURE__*/_react.default.createElement(_styles.TextBlockContainer, null, /*#__PURE__*/_react.default.createElement(_styles.BigText, null, order === null || order === void 0 ? void 0 : (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.name), /*#__PURE__*/_react.default.createElement(_styles.SmallText, null, order === null || order === void 0 ? void 0 : (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : (_order$business3$city = _order$business3.city) === null || _order$business3$city === void 0 ? void 0 : _order$business3$city.name))), /*#__PURE__*/_react.default.createElement(_styles.OrderItemAccordionCell, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperAccordionImage, null, (order === null || order === void 0 ? void 0 : (_order$customer = order.customer) === null || _order$customer === void 0 ? void 0 : _order$customer.photo) ? /*#__PURE__*/_react.default.createElement(_styles.AccordionImage, {
    bgimage: order === null || order === void 0 ? void 0 : (_order$customer2 = order.customer) === null || _order$customer2 === void 0 ? void 0 : _order$customer2.photo
  }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles.TextBlockContainer, null, /*#__PURE__*/_react.default.createElement(_styles.BigText, null, order === null || order === void 0 ? void 0 : (_order$customer3 = order.customer) === null || _order$customer3 === void 0 ? void 0 : _order$customer3.name), /*#__PURE__*/_react.default.createElement(_styles.SmallText, null, order === null || order === void 0 ? void 0 : (_order$customer4 = order.customer) === null || _order$customer4 === void 0 ? void 0 : _order$customer4.cellphone))), /*#__PURE__*/_react.default.createElement(_styles.OrderItemAccordionCell, null, (order === null || order === void 0 ? void 0 : order.delivery_type) === 1 && /*#__PURE__*/_react.default.createElement(_styles.WrapperDriverSelector, {
    ref: driverSelectorRef
  }, /*#__PURE__*/_react.default.createElement(_DriverSelector.DriverSelector, {
    orderView: true,
    padding: "5px 0",
    defaultValue: (order === null || order === void 0 ? void 0 : order.driver_id) ? order.driver_id : 'default',
    drivers: drivers,
    order: order
  }))), /*#__PURE__*/_react.default.createElement(_styles.OrderItemAccordionCell, null, /*#__PURE__*/_react.default.createElement(_styles.DeliveryTypeContainer, null, /*#__PURE__*/_react.default.createElement(_styles.DeliveryIcon, null, (order === null || order === void 0 ? void 0 : order.delivery_type) === 1 && /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 ? void 0 : (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$icons = _theme$images2.icons) === null || _theme$images2$icons === void 0 ? void 0 : _theme$images2$icons.driverDelivery,
    alt: "Delivery"
  }), (order === null || order === void 0 ? void 0 : order.delivery_type) === 2 && /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 ? void 0 : (_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$icons = _theme$images3.icons) === null || _theme$images3$icons === void 0 ? void 0 : _theme$images3$icons.pickUp,
    alt: "pick up"
  }), (order === null || order === void 0 ? void 0 : order.delivery_type) === 3 && /*#__PURE__*/_react.default.createElement(_AiFillShop.default, null), (order === null || order === void 0 ? void 0 : order.delivery_type) === 4 && /*#__PURE__*/_react.default.createElement(_GiFoodTruck.default, null), (order === null || order === void 0 ? void 0 : order.delivery_type) === 5 && /*#__PURE__*/_react.default.createElement(_FaCarSide.default, null)), /*#__PURE__*/_react.default.createElement(_styles.DeliveryName, null, (order === null || order === void 0 ? void 0 : order.delivery_type) === 1 && t('DELIVERY', 'Delivery'), (order === null || order === void 0 ? void 0 : order.delivery_type) === 2 && t('PICKUP', 'Pickup'), (order === null || order === void 0 ? void 0 : order.delivery_type) === 3 && t('EAT_IN', 'Eat in'), (order === null || order === void 0 ? void 0 : order.delivery_type) === 4 && t('CURBSIDE', 'Curbside'), (order === null || order === void 0 ? void 0 : order.delivery_type) === 5 && t('DRIVE_THRU', 'Drive thru')))), /*#__PURE__*/_react.default.createElement(_styles.OrderItemAccordionCell, null, /*#__PURE__*/_react.default.createElement(_OrderStatusTypeSelector.OrderStatusTypeSelector, {
    defaultValue: parseInt(order.status),
    orderId: order.id,
    deliveryType: order === null || order === void 0 ? void 0 : order.delivery_type,
    noPadding: true,
    handleUpdateOrderStatus: handleUpdateOrderStatus
  })), /*#__PURE__*/_react.default.createElement(_styles.OrderItemAccordionCell, null, /*#__PURE__*/_react.default.createElement(_styles.BigText, {
    ref: toggleBtn,
    onClick: function onClick() {
      return toggleAccordion();
    }
  }, parsePrice(order === null || order === void 0 ? void 0 : (_order$summary = order.summary) === null || _order$summary === void 0 ? void 0 : _order$summary.total), /*#__PURE__*/_react.default.createElement(_styles.OrderDetailToggleButton, null, /*#__PURE__*/_react.default.createElement(_EnChevronDown.default, {
    className: "".concat(setRotate)
  }))))), /*#__PURE__*/_react.default.createElement(_styles.WrapperOrderlabel, null, /*#__PURE__*/_react.default.createElement(_styles.OrderItemAccordionCell, null, /*#__PURE__*/_react.default.createElement(_styles.TextBlockContainer, null, /*#__PURE__*/_react.default.createElement(_styles.BigText, null, t('LOGISTIC', 'Logistic')), /*#__PURE__*/_react.default.createElement(_styles.SmallText, null, getLogisticTag(order === null || order === void 0 ? void 0 : order.logistic_status)))), /*#__PURE__*/_react.default.createElement(_styles.OrderItemAccordionCell, null, /*#__PURE__*/_react.default.createElement(_styles.TextBlockContainer, null, /*#__PURE__*/_react.default.createElement(_styles.BigText, null, t('ATTEMPTS', 'Attempts')), /*#__PURE__*/_react.default.createElement(_styles.SmallText, null, order === null || order === void 0 ? void 0 : order.logistic_attemps))), /*#__PURE__*/_react.default.createElement(_styles.OrderItemAccordionCell, null, /*#__PURE__*/_react.default.createElement(_styles.TextBlockContainer, null, /*#__PURE__*/_react.default.createElement(_styles.BigText, null, t('PRIORITY', 'Priority')), /*#__PURE__*/_react.default.createElement(_styles.SmallText, null, getPriorityTag(order === null || order === void 0 ? void 0 : order.priority)))), /*#__PURE__*/_react.default.createElement(_styles.OrderItemAccordionCell, null, !((order === null || order === void 0 ? void 0 : order.status) === 1 || (order === null || order === void 0 ? void 0 : order.status) === 11 || (order === null || order === void 0 ? void 0 : order.status) === 2 || (order === null || order === void 0 ? void 0 : order.status) === 5 || (order === null || order === void 0 ? void 0 : order.status) === 6 || (order === null || order === void 0 ? void 0 : order.status) === 10 || order.status === 12) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, diffTime))))), /*#__PURE__*/_react.default.createElement(_styles.WrapOrderQuickDetail, {
    style: {
      display: "".concat(openOrderQuickDetail ? 'block' : 'none')
    }
  }, loadedOrderQuickDetail && /*#__PURE__*/_react.default.createElement(_OrderProductQuickDetail.OrderProductsQuickDetail, {
    orderId: order === null || order === void 0 ? void 0 : order.id
  }))));
};

exports.OrderItemAccordion = OrderItemAccordion;