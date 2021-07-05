"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersPagination = void 0;

var _react = _interopRequireDefault(require("react"));

var _MdKeyboardArrowLeft = _interopRequireDefault(require("@meronex/icons/md/MdKeyboardArrowLeft"));

var _MdKeyboardArrowRight = _interopRequireDefault(require("@meronex/icons/md/MdKeyboardArrowRight"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrdersPagination = function OrdersPagination(_ref) {
  var ordersPerPage = _ref.ordersPerPage,
      totalOrders = _ref.totalOrders,
      currentPage = _ref.currentPage,
      totalPages = _ref.totalPages,
      prevPaginate = _ref.prevPaginate,
      nextPaginate = _ref.nextPaginate;
  var indexOfLastOrders = currentPage * ordersPerPage < totalOrders ? currentPage * ordersPerPage : totalOrders;
  var indexOfFirstOrders = (currentPage - 1) * ordersPerPage + 1;
  return /*#__PURE__*/_react.default.createElement(_styles.WrapperPagination, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperPageState, null, indexOfFirstOrders, "-", indexOfLastOrders, " of ", totalOrders), /*#__PURE__*/_react.default.createElement(_styles.PageButton, {
    disabled: currentPage === 1,
    onClick: function onClick() {
      return prevPaginate();
    }
  }, /*#__PURE__*/_react.default.createElement(_MdKeyboardArrowLeft.default, null)), /*#__PURE__*/_react.default.createElement(_styles.PageButton, {
    onClick: function onClick() {
      return nextPaginate();
    },
    disabled: currentPage === totalPages || totalPages === 1
  }, /*#__PURE__*/_react.default.createElement(_MdKeyboardArrowRight.default, null)));
};

exports.OrdersPagination = OrdersPagination;