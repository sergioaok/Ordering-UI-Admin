"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverView = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var OrdersOverViewUI = function OrdersOverViewUI(props) {
  var _ordersOverviewList$o, _ordersOverviewList$o2, _ordersOverviewList$o3, _ordersOverviewList$o4, _ordersOverviewList$o5;

  var ordersOverviewList = props.ordersOverviewList;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  return /*#__PURE__*/_react.default.createElement(_styles.OverViewContainer, {
    id: "overView"
  }, !ordersOverviewList.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.OverViewTitle, null, t('OVERVIEW', 'overview')), /*#__PURE__*/_react.default.createElement(_styles.OverViewItemContent, null, /*#__PURE__*/_react.default.createElement(_styles.OverViewItem, null, /*#__PURE__*/_react.default.createElement(_styles.OverViewStatusTitle, null, t('ORDERS_TODAY', 'orders today')), /*#__PURE__*/_react.default.createElement(_styles.OverViewStatusValue, null, (ordersOverviewList === null || ordersOverviewList === void 0 ? void 0 : (_ordersOverviewList$o = ordersOverviewList.overview) === null || _ordersOverviewList$o === void 0 ? void 0 : _ordersOverviewList$o.total) || 0)), /*#__PURE__*/_react.default.createElement(_styles.OverViewItem, null, /*#__PURE__*/_react.default.createElement(_styles.OverViewStatusTitle, null, t('PENDING', 'pending')), /*#__PURE__*/_react.default.createElement(_styles.OverViewStatusValue, null, (ordersOverviewList === null || ordersOverviewList === void 0 ? void 0 : (_ordersOverviewList$o2 = ordersOverviewList.overview) === null || _ordersOverviewList$o2 === void 0 ? void 0 : _ordersOverviewList$o2.pending) || 0)), /*#__PURE__*/_react.default.createElement(_styles.OverViewItem, null, /*#__PURE__*/_react.default.createElement(_styles.OverViewStatusTitle, null, t('IN_PROGRESS', 'in progress')), /*#__PURE__*/_react.default.createElement(_styles.OverViewStatusValue, null, (ordersOverviewList === null || ordersOverviewList === void 0 ? void 0 : (_ordersOverviewList$o3 = ordersOverviewList.overview) === null || _ordersOverviewList$o3 === void 0 ? void 0 : _ordersOverviewList$o3.inProgress) || 0)), /*#__PURE__*/_react.default.createElement(_styles.OverViewItem, null, /*#__PURE__*/_react.default.createElement(_styles.OverViewStatusTitle, null, t('COMPLETED', 'completed')), /*#__PURE__*/_react.default.createElement(_styles.OverViewStatusValue, null, (ordersOverviewList === null || ordersOverviewList === void 0 ? void 0 : (_ordersOverviewList$o4 = ordersOverviewList.overview) === null || _ordersOverviewList$o4 === void 0 ? void 0 : _ordersOverviewList$o4.completed) || 0)), /*#__PURE__*/_react.default.createElement(_styles.OverViewItem, null, /*#__PURE__*/_react.default.createElement(_styles.OverViewStatusTitle, null, t('CANCELLED', 'cancelled')), /*#__PURE__*/_react.default.createElement(_styles.OverViewStatusValue, null, (ordersOverviewList === null || ordersOverviewList === void 0 ? void 0 : (_ordersOverviewList$o5 = ordersOverviewList.overview) === null || _ordersOverviewList$o5 === void 0 ? void 0 : _ordersOverviewList$o5.cancelled) || 0)))) : /*#__PURE__*/_react.default.createElement(_styles.SkeletonContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100,
    height: 15
  }), _toConsumableArray(Array(5)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SkeletonCard, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      height: 15
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 50,
      height: 25
    }));
  })));
};

var OverView = function OverView(props) {
  var OrdersOverviewControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OrdersOverViewUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.OrdersOverview, OrdersOverviewControlProps);
};

exports.OverView = OverView;