"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderContactInformation = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));

var _BsBell = _interopRequireDefault(require("@meronex/icons/bs/BsBell"));

var _BsChat = _interopRequireDefault(require("@meronex/icons/bs/BsChat"));

var _HiOutlinePhone = _interopRequireDefault(require("@meronex/icons/hi/HiOutlinePhone"));

var _BisBusiness = _interopRequireDefault(require("@meronex/icons/bi/BisBusiness"));

var _DriverSelector = require("../DriverSelector");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var OrderContactInformation = function OrderContactInformation(props) {
  var _order$business, _order$business2, _order$business3, _order$business4, _order$business5, _order$business6, _order$customer, _order$customer2, _order$customer3, _order$customer4, _order$customer6, _order$driver, _order$driver2, _order$driver3, _order$driver4, _order$driver5, _order$driver7;

  var order = props.order,
      driversList = props.driversList,
      unreadAlert = props.unreadAlert,
      handleOpenMessages = props.handleOpenMessages;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, /*#__PURE__*/_react.default.createElement(_styles.PhotoWrapper, null, (order === null || order === void 0 ? void 0 : (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.logo) ? /*#__PURE__*/_react.default.createElement(_styles.Photo, {
    bgimage: order === null || order === void 0 ? void 0 : (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.logo
  }) : /*#__PURE__*/_react.default.createElement(_BisBusiness.default, null)), /*#__PURE__*/_react.default.createElement(_styles.InfoContent, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.name), /*#__PURE__*/_react.default.createElement(_styles.ButtonLink, {
    onClick: function onClick() {
      return handleOpenMessages('business');
    }
  }, /*#__PURE__*/_react.default.createElement(_BsChat.default, null)), (order === null || order === void 0 ? void 0 : order.unread_count) > 0 && unreadAlert.business && /*#__PURE__*/_react.default.createElement(_styles.NotificationIcon, null, /*#__PURE__*/_react.default.createElement(_BsBell.default, null)), (order === null || order === void 0 ? void 0 : (_order$business4 = order.business) === null || _order$business4 === void 0 ? void 0 : _order$business4.phone) && /*#__PURE__*/_react.default.createElement(_styles.ButtonLink, {
    onClick: function onClick() {
      return window.open("tel:".concat(order.business.phone));
    }
  }, /*#__PURE__*/_react.default.createElement(_HiOutlinePhone.default, null))), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$business5 = order.business) === null || _order$business5 === void 0 ? void 0 : _order$business5.address))), /*#__PURE__*/_react.default.createElement(_styles.CustomerInfo, null, /*#__PURE__*/_react.default.createElement(_styles.PhotoWrapper, null, (order === null || order === void 0 ? void 0 : (_order$business6 = order.business) === null || _order$business6 === void 0 ? void 0 : _order$business6.photo) ? /*#__PURE__*/_react.default.createElement(_styles.Photo, {
    bgimage: order === null || order === void 0 ? void 0 : (_order$customer = order.customer) === null || _order$customer === void 0 ? void 0 : _order$customer.photo
  }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles.InfoContent, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$customer2 = order.customer) === null || _order$customer2 === void 0 ? void 0 : _order$customer2.name, " ", order === null || order === void 0 ? void 0 : (_order$customer3 = order.customer) === null || _order$customer3 === void 0 ? void 0 : _order$customer3.lastname), /*#__PURE__*/_react.default.createElement(_styles.ButtonLink, {
    onClick: function onClick() {
      return handleOpenMessages('customer');
    }
  }, /*#__PURE__*/_react.default.createElement(_BsChat.default, null)), (order === null || order === void 0 ? void 0 : order.unread_count) > 0 && unreadAlert.customer && /*#__PURE__*/_react.default.createElement(_styles.NotificationIcon, null, /*#__PURE__*/_react.default.createElement(_BsBell.default, null)), (order === null || order === void 0 ? void 0 : (_order$customer4 = order.customer) === null || _order$customer4 === void 0 ? void 0 : _order$customer4.cellphone) && /*#__PURE__*/_react.default.createElement(_styles.ButtonLink, {
    onClick: function onClick() {
      var _order$customer5;

      return window.open("tel:".concat(order === null || order === void 0 ? void 0 : (_order$customer5 = order.customer) === null || _order$customer5 === void 0 ? void 0 : _order$customer5.cellphone));
    }
  }, /*#__PURE__*/_react.default.createElement(_HiOutlinePhone.default, null))), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$customer6 = order.customer) === null || _order$customer6 === void 0 ? void 0 : _order$customer6.cellphone))), (order === null || order === void 0 ? void 0 : order.delivery_type) === 1 && /*#__PURE__*/_react.default.createElement(_styles.DriverInfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles.DriverInfo, null, /*#__PURE__*/_react.default.createElement(_styles.PhotoWrapper, null, (order === null || order === void 0 ? void 0 : (_order$driver = order.driver) === null || _order$driver === void 0 ? void 0 : _order$driver.photo) ? /*#__PURE__*/_react.default.createElement(_styles.Photo, {
    bgimage: order === null || order === void 0 ? void 0 : (_order$driver2 = order.driver) === null || _order$driver2 === void 0 ? void 0 : _order$driver2.photo
  }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), order.driver_id ? /*#__PURE__*/_react.default.createElement(_styles.InfoContent, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$driver3 = order.driver) === null || _order$driver3 === void 0 ? void 0 : _order$driver3.name, " ", order === null || order === void 0 ? void 0 : (_order$driver4 = order.driver) === null || _order$driver4 === void 0 ? void 0 : _order$driver4.lastname), /*#__PURE__*/_react.default.createElement(_styles.ButtonLink, {
    onClick: function onClick() {
      return handleOpenMessages('driver');
    }
  }, /*#__PURE__*/_react.default.createElement(_BsChat.default, null)), (order === null || order === void 0 ? void 0 : order.unread_count) > 0 && unreadAlert.driver && /*#__PURE__*/_react.default.createElement(_styles.NotificationIcon, null, /*#__PURE__*/_react.default.createElement(_BsBell.default, null)), (order === null || order === void 0 ? void 0 : (_order$driver5 = order.driver) === null || _order$driver5 === void 0 ? void 0 : _order$driver5.cellphone) && /*#__PURE__*/_react.default.createElement(_styles.ButtonLink, {
    onClick: function onClick() {
      var _order$driver6;

      return window.open("tel:".concat(order === null || order === void 0 ? void 0 : (_order$driver6 = order.driver) === null || _order$driver6 === void 0 ? void 0 : _order$driver6.cellphone));
    }
  }, /*#__PURE__*/_react.default.createElement(_HiOutlinePhone.default, null))), /*#__PURE__*/_react.default.createElement("p", null, t('DRIVER', 'Driver'))) : /*#__PURE__*/_react.default.createElement(_styles.InfoContent, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, t('NO_DRIVER', 'No driver'))))), /*#__PURE__*/_react.default.createElement(_styles.DriverSelectorContainer, null, /*#__PURE__*/_react.default.createElement(_DriverSelector.DriverSelector, {
    drivers: driversList.drivers,
    isPhoneView: true,
    defaultValue: (order === null || order === void 0 ? void 0 : (_order$driver7 = order.driver) === null || _order$driver7 === void 0 ? void 0 : _order$driver7.id) ? order.driver.id : 'default',
    order: order
  }))));
};

exports.OrderContactInformation = OrderContactInformation;