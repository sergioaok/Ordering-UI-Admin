"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersDashboard = void 0;

var _react = _interopRequireDefault(require("react"));

var _OrdersDashboardControls = require("../OrdersDashboardControls");

var _OrdersDashboardList = require("../OrdersDashboardList");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrdersDashboard = function OrdersDashboard(props) {
  var searchValue = props.searchValue,
      filterValues = props.filterValues,
      selectedOrderIds = props.selectedOrderIds,
      deletedOrderId = props.deletedOrderId,
      driversList = props.driversList,
      ordersStatusGroup = props.ordersStatusGroup,
      handleSelectedOrderIds = props.handleSelectedOrderIds,
      handleChangeMultiOrdersStatus = props.handleChangeMultiOrdersStatus,
      handleDeleteMultiOrders = props.handleDeleteMultiOrders,
      handleOpenOrderDetail = props.handleOpenOrderDetail,
      activeSwitch = props.activeSwitch;
  return /*#__PURE__*/_react.default.createElement(_styles.OrdersManageContainer, null, /*#__PURE__*/_react.default.createElement(_OrdersDashboardControls.OrdersDashboardControls, {
    selectedOrderNumber: selectedOrderIds.length,
    filterValues: filterValues,
    handleChangeMultiOrdersStatus: handleChangeMultiOrdersStatus,
    handleDeleteMultiOrders: handleDeleteMultiOrders
  }), /*#__PURE__*/_react.default.createElement(_OrdersDashboardList.OrdersDashboardList, {
    orderListView: "big",
    searchValue: searchValue,
    filterValues: filterValues,
    selectedOrderIds: selectedOrderIds,
    deletedOrderId: deletedOrderId,
    driversList: driversList,
    ordersStatusGroup: ordersStatusGroup,
    handleSelectedOrderIds: handleSelectedOrderIds,
    activeSwitch: activeSwitch,
    handleOpenOrderDetail: handleOpenOrderDetail
  }));
};

exports.OrdersDashboard = OrdersDashboard;