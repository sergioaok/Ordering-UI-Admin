"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logistics = void 0;

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

var LogisticsUI = function LogisticsUI(props) {
  var logisticList = props.logisticList;

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      _useUtils2$ = _useUtils2[0],
      getTimeAgo = _useUtils2$.getTimeAgo,
      parseDistance = _useUtils2$.parseDistance;

  var getEventName = function getEventName(log) {
    var _log$data, _log$data2, _log$data3, _log$data4, _log$with_orders;

    switch (log.event) {
      case 'logistic_driver_found':
        return "Driver ".concat(log.driver.name, " found to the order at ").concat(parseDistance(((log === null || log === void 0 ? void 0 : (_log$data = log.data) === null || _log$data === void 0 ? void 0 : _log$data.distance) / 1000).toFixed(2)));

      case 'logistic_driver_found_group':
        return "Driver ".concat(log.driver.name, " found");

      case 'logistic_driver_not_found':
        return 'Drivers was not found.';

      case 'logistic_driver_not_found_group':
        return 'Drivers was not found to the group';

      case 'logistic_driver_found_in_coverage':
        return "Logistic: Driver ".concat(log.driver.name, " found to the order at ").concat(parseDistance(((log === null || log === void 0 ? void 0 : (_log$data2 = log.data) === null || _log$data2 === void 0 ? void 0 : _log$data2.distance) / 1000).toFixed(2)), " in ").concat(parseDistance((log.data.coverage / 1000).toFixed(2)), " of coverage.");

      case 'logistic_driver_found_in_coverage_group':
        return 'logistic driver found in coverage group';

      case 'logistic_driver_found_out_coverage':
        return "Driver ".concat(log.driver.name, " found to the order at ").concat(parseDistance(((log === null || log === void 0 ? void 0 : (_log$data3 = log.data) === null || _log$data3 === void 0 ? void 0 : _log$data3.distance) / 1000).toFixed(2)), " out of ").concat(parseDistance((log.data.coverage / 1000).toFixed(2)), " of coverage.");

      case 'logistic_driver_found_out_coverage_group':
        return 'logistic driver found out coverage group';

      case 'logistic_driver_autoaccepted':
        return "Order was auto-assigned and auto-accepted by driver ".concat(log.driver.name, " at ").concat(parseDistance(((log === null || log === void 0 ? void 0 : (_log$data4 = log.data) === null || _log$data4 === void 0 ? void 0 : _log$data4.distance) / 1000).toFixed(2)), ".");

      case 'logistic_driver_autoaccepted_group':
        return 'logisticdriver autoaccepted group';

      case 'logistic_request_autorejected':
        return "Request of the driver ".concat(log.driver.name, " was auto-rejected with order ").concat(log === null || log === void 0 ? void 0 : (_log$with_orders = log.with_orders) === null || _log$with_orders === void 0 ? void 0 : _log$with_orders.join(), " by process.");

      case 'logistic_request_autorejected_group':
        return 'logistic request autorejected group';

      case 'logistic_assign_request_accepted':
        return 'logistic assign request accepted';

      case 'logistic_assign_request_accepted_group':
        return 'logistic assign request accepted group';

      case 'logistic_assign_request_rejected':
        return 'logistic assign request rejected';

      case 'logistic_assign_request_rejected_group':
        return 'logistic assign request rejected group';

      case 'logistic_manual_driver_assignment':
        return 'logistic manual driver assignment';

      case 'logistic_manual_driver_unassignment':
        return 'LOG_LOGISTIC_MANUAL_DRIVER_UNASSIGNMENT';

      case 'logistic_driver_autoassigned_group':
        return 'logistic driver autoassigned group';

      case 'logistic_started':
        return 'Process started.';

      case 'logistic_finished':
        return 'Process finished.';

      case 'logistic_expired':
        return 'Logisitic expired';

      case 'logistic_resolved':
        return 'Logistic resolved.';

      case 'logistic_reset':
        return 'Logistic reset';

      case 'logistic_grouped':
        return "Order was grouped with order ".concat(log.data.with_orders.join());

      case 'logistic_cancelled':
        return 'Logistic cancelled';

      case 'logistic_not_grouped':
        return 'Order was not grouped.';

      case 'logistic_order_queued':
        return 'Order to queue.';

      case 'logistic_order_out_queue':
        return 'LOGISTIC_ORDER_OUT_QUEUE';

      default:
        return log.event;
    }
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, logisticList.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(3)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SkeletonHitory, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 400,
      height: 50
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 300,
      height: 50
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 380,
      height: 50
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 200,
      height: 50
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 450,
      height: 50
    }));
  })) : /*#__PURE__*/_react.default.createElement(_styles.WraaperLogs, null, logisticList.logs.map(function (log) {
    var _log$data5;

    return /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, {
      key: log.id
    }, getEventName(log), log.event === 'logistic_expired' && /*#__PURE__*/_react.default.createElement(_styles.Reason, null, "Reason: ", log === null || log === void 0 ? void 0 : (_log$data5 = log.data) === null || _log$data5 === void 0 ? void 0 : _log$data5.reason), /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(log.updated_at)));
  })));
};

var Logistics = function Logistics(props) {
  var logisticsProps = _objectSpread(_objectSpread({}, props), {}, {
    orderId: props.orderId,
    UIComponent: LogisticsUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.Logistics, logisticsProps);
};

exports.Logistics = Logistics;