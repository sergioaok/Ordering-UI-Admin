"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersDashboardControls = void 0;

var _react = _interopRequireDefault(require("react"));

var _OrderStatusTypeSelector = require("../OrderStatusTypeSelector");

var _ExportCSV = require("../ExportCSV");

var _OrderDelete = require("../OrderDelete");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { useLanguage } from 'ordering-components-admin'
// import { useWindowSize } from '../../hooks/useWindowSize'
// import { Button } from '../../styles/Buttons'
// import MdcBasket from '@meronex/icons/mdc/MdcBasket'
var OrdersDashboardControls = function OrdersDashboardControls(props) {
  var selectedOrderNumber = props.selectedOrderNumber,
      filterValues = props.filterValues,
      handleDeleteMultiOrders = props.handleDeleteMultiOrders,
      handleChangeMultiOrdersStatus = props.handleChangeMultiOrdersStatus; // const [, t] = useLanguage()
  // const { width } = useWindowSize()

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.OrderDashboardControlsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.InnerContnet, null, /*#__PURE__*/_react.default.createElement(_ExportCSV.ExportCSV, {
    filterValues: filterValues
  }), selectedOrderNumber > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_OrderDelete.OrderDelete, {
    handleDeleteMultiOrders: handleDeleteMultiOrders
  }), /*#__PURE__*/_react.default.createElement(_OrderStatusTypeSelector.OrderStatusTypeSelector, {
    orderControl: true,
    mutiOrdersChange: true,
    noSelected: true,
    defaultValue: "default",
    type: "primary",
    handleChangeMultiOrdersStatus: handleChangeMultiOrdersStatus
  })))));
};

exports.OrdersDashboardControls = OrdersDashboardControls;