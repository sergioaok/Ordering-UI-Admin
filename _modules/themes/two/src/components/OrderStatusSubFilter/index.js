"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderStatusSubFilter = void 0;

var _react = _interopRequireDefault(require("react"));

var _Buttons = require("../../styles/Buttons");

var _MdClose = _interopRequireDefault(require("@meronex/icons/ios/MdClose"));

var _AutoScroll = require("../AutoScroll");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var OrderStatusSubFilter = function OrderStatusSubFilter(props) {
  var selectedSubOrderStatus = props.selectedSubOrderStatus,
      ordersStatusGroup = props.ordersStatusGroup,
      handleSelectedSubOrderStatus = props.handleSelectedSubOrderStatus;
  var statues = {
    pending: [{
      key: 0,
      value: 'Pending'
    }, {
      key: 13,
      value: 'Preorder'
    }],
    inProgress: [{
      key: 7,
      value: 'Accepted by business'
    }, {
      key: 4,
      value: 'Ready for pickup'
    }, {
      key: 8,
      value: 'Accepted by driver'
    }, {
      key: 3,
      value: 'Driver arrived by business'
    }, {
      key: 9,
      value: 'Pick up completed by driver'
    }, {
      key: 14,
      value: 'Order not ready'
    }, {
      key: 18,
      value: 'Driver almost arrived to business'
    }, {
      key: 19,
      value: 'Driver almost arrived to customer'
    }, {
      key: 20,
      value: 'Customer almost arrived to business'
    }, {
      key: 21,
      value: 'Customer arrived to business'
    }],
    completed: [{
      key: 1,
      value: 'Completed by admin'
    }, {
      key: 11,
      value: 'Delivery completed by driver'
    }, {
      key: 15,
      value: 'Pickup completed by customer'
    }],
    cancelled: [{
      key: 2,
      value: 'Reject by admin'
    }, {
      key: 5,
      value: 'Reject by business'
    }, {
      key: 6,
      value: 'Reject by driver'
    }, {
      key: 10,
      value: 'Pick up Failed by driver'
    }, {
      key: 12,
      value: 'Delivery Failed by driver'
    }, {
      key: 16,
      value: 'Canceled by customer'
    }, {
      key: 17,
      value: 'Not picked by customer'
    }]
  };

  var handleChange = function handleChange(status) {
    var pendingStatuses = _toConsumableArray(selectedSubOrderStatus === null || selectedSubOrderStatus === void 0 ? void 0 : selectedSubOrderStatus.pending);

    var inProgressStatuses = _toConsumableArray(selectedSubOrderStatus === null || selectedSubOrderStatus === void 0 ? void 0 : selectedSubOrderStatus.inProgress);

    var completedStatuses = _toConsumableArray(selectedSubOrderStatus === null || selectedSubOrderStatus === void 0 ? void 0 : selectedSubOrderStatus.completed);

    var cancelledStatuses = _toConsumableArray(selectedSubOrderStatus === null || selectedSubOrderStatus === void 0 ? void 0 : selectedSubOrderStatus.cancelled);

    switch (ordersStatusGroup) {
      case 'pending':
        if (pendingStatuses.includes(status)) {
          pendingStatuses = pendingStatuses.filter(function (_status) {
            return _status !== status;
          });
        } else {
          pendingStatuses.push(status);
        }

        handleSelectedSubOrderStatus(_objectSpread(_objectSpread({}, selectedSubOrderStatus), {}, {
          pending: pendingStatuses
        }));
        break;

      case 'inProgress':
        if (inProgressStatuses.includes(status)) {
          inProgressStatuses = inProgressStatuses.filter(function (_status) {
            return _status !== status;
          });
        } else {
          inProgressStatuses.push(status);
        }

        handleSelectedSubOrderStatus(_objectSpread(_objectSpread({}, selectedSubOrderStatus), {}, {
          inProgress: inProgressStatuses
        }));
        break;

      case 'completed':
        if (completedStatuses.includes(status)) {
          completedStatuses = completedStatuses.filter(function (_status) {
            return _status !== status;
          });
        } else {
          completedStatuses.push(status);
        }

        handleSelectedSubOrderStatus(_objectSpread(_objectSpread({}, selectedSubOrderStatus), {}, {
          completed: completedStatuses
        }));
        break;

      case 'cancelled':
        if (cancelledStatuses.includes(status)) {
          cancelledStatuses = cancelledStatuses.filter(function (_status) {
            return _status !== status;
          });
        } else {
          cancelledStatuses.push(status);
        }

        handleSelectedSubOrderStatus(_objectSpread(_objectSpread({}, selectedSubOrderStatus), {}, {
          cancelled: cancelledStatuses
        }));
        break;
    }
  };

  return /*#__PURE__*/_react.default.createElement(_styles.SubFilterContainer, null, /*#__PURE__*/_react.default.createElement(_styles.InnerContainer, null, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, {
    innerScroll: true,
    scrollId: "".concat(ordersStatusGroup + 'subFilter')
  }, statues[ordersStatusGroup].map(function (status) {
    return /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      key: status.key,
      color: (selectedSubOrderStatus === null || selectedSubOrderStatus === void 0 ? void 0 : selectedSubOrderStatus.pending.includes(status.key)) || (selectedSubOrderStatus === null || selectedSubOrderStatus === void 0 ? void 0 : selectedSubOrderStatus.inProgress.includes(status.key)) || (selectedSubOrderStatus === null || selectedSubOrderStatus === void 0 ? void 0 : selectedSubOrderStatus.completed.includes(status.key)) || (selectedSubOrderStatus === null || selectedSubOrderStatus === void 0 ? void 0 : selectedSubOrderStatus.cancelled.includes(status.key)) ? 'primary' : 'secundary',
      onClick: function onClick() {
        return handleChange(status.key);
      }
    }, status.value, ((selectedSubOrderStatus === null || selectedSubOrderStatus === void 0 ? void 0 : selectedSubOrderStatus.pending.includes(status.key)) || (selectedSubOrderStatus === null || selectedSubOrderStatus === void 0 ? void 0 : selectedSubOrderStatus.inProgress.includes(status.key)) || (selectedSubOrderStatus === null || selectedSubOrderStatus === void 0 ? void 0 : selectedSubOrderStatus.completed.includes(status.key)) || (selectedSubOrderStatus === null || selectedSubOrderStatus === void 0 ? void 0 : selectedSubOrderStatus.cancelled.includes(status.key))) && /*#__PURE__*/_react.default.createElement(_MdClose.default, null));
  }))));
};

exports.OrderStatusSubFilter = OrderStatusSubFilter;