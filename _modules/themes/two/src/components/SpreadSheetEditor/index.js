"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpreadSheetEditor = void 0;

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@handsontable/react");

require("handsontable/dist/handsontable.full.css");

var _orderingComponentsAdmin = require("ordering-components-admin");

var _styles = require("./styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SpreadSheetEditor = function SpreadSheetEditor(props) {
  var headerItems = props.headerItems,
      hotTableData = props.hotTableData,
      handleItemChange = props.handleItemChange,
      handleRowRemove = props.handleRowRemove,
      handleAfterSectionEnd = props.handleAfterSectionEnd,
      handleoutsideClickDeselects = props.handleoutsideClickDeselects;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      cache = _useState2[0],
      setCache = _useState2[1];

  var hotTableRef = (0, _react.useRef)(null);
  var settings = {
    data: hotTableData,
    licenseKey: 'non-commercial-and-evaluation',
    autoRowSize: false,
    autoColumnSize: false,
    width: '100%',
    height: '100%',
    minSpareRows: 1,
    stretchH: 'all',
    copyPaste: true,
    undo: true,
    contextMenu: {
      items: {
        copy: {
          name: t('SPREADSHEET_COPY')
        },
        remove_row: {
          name: t('SPREADSHEET_REMOVE_ROW')
        },
        paste: {
          key: 'paste',
          name: t('SPREADSHEET_PASTE'),
          disabled: function disabled() {
            return cache;
          },
          callback: function callback() {
            var _hotTableRef$current;

            if (hotTableRef === null || hotTableRef === void 0 ? void 0 : (_hotTableRef$current = hotTableRef.current) === null || _hotTableRef$current === void 0 ? void 0 : _hotTableRef$current.hotInstance) {
              var _hotTableRef$current2;

              var hotRef = hotTableRef === null || hotTableRef === void 0 ? void 0 : (_hotTableRef$current2 = hotTableRef.current) === null || _hotTableRef$current2 === void 0 ? void 0 : _hotTableRef$current2.hotInstance;
              var plugin = hotRef === null || hotRef === void 0 ? void 0 : hotRef.getPlugin('copyPaste'); // eslint-disable-next-line no-unused-expressions

              hotRef === null || hotRef === void 0 ? void 0 : hotRef.listen();
              plugin.paste(cache);
            }
          }
        }
      }
    }
  };

  var handleAfterChange = function handleAfterChange(changes, accionHanson) {
    var _hotTableRef$current3;

    if (hotTableRef === null || hotTableRef === void 0 ? void 0 : (_hotTableRef$current3 = hotTableRef.current) === null || _hotTableRef$current3 === void 0 ? void 0 : _hotTableRef$current3.hotInstance) {
      var _hotTableRef$current4;

      var hotTableObj = hotTableRef === null || hotTableRef === void 0 ? void 0 : (_hotTableRef$current4 = hotTableRef.current) === null || _hotTableRef$current4 === void 0 ? void 0 : _hotTableRef$current4.hotInstance;
      handleItemChange && handleItemChange(changes, accionHanson, hotTableObj);
    }
  };

  var handleBeforeRemoveRow = function handleBeforeRemoveRow(index, amount, physicalRows) {
    var _hotTableRef$current5;

    if (hotTableRef === null || hotTableRef === void 0 ? void 0 : (_hotTableRef$current5 = hotTableRef.current) === null || _hotTableRef$current5 === void 0 ? void 0 : _hotTableRef$current5.hotInstance) {
      var _hotTableRef$current6;

      var hotTableObj = hotTableRef === null || hotTableRef === void 0 ? void 0 : (_hotTableRef$current6 = hotTableRef.current) === null || _hotTableRef$current6 === void 0 ? void 0 : _hotTableRef$current6.hotInstance;
      handleRowRemove && handleRowRemove(index, amount, physicalRows, hotTableObj);
    }
  };

  var _afterSelectionEnd = function afterSelectionEnd(row, col, row1, col1) {
    var _hotTableRef$current7;

    if (hotTableRef === null || hotTableRef === void 0 ? void 0 : (_hotTableRef$current7 = hotTableRef.current) === null || _hotTableRef$current7 === void 0 ? void 0 : _hotTableRef$current7.hotInstance) {
      var _hotTableRef$current8;

      var hotTableObj = hotTableRef === null || hotTableRef === void 0 ? void 0 : (_hotTableRef$current8 = hotTableRef.current) === null || _hotTableRef$current8 === void 0 ? void 0 : _hotTableRef$current8.hotInstance;
      handleAfterSectionEnd && handleAfterSectionEnd(row, col, row1, col1, hotTableObj);
    }
  };

  var _outsideClickDeselects = function outsideClickDeselects(event) {
    var _hotTableRef$current9;

    if (hotTableRef === null || hotTableRef === void 0 ? void 0 : (_hotTableRef$current9 = hotTableRef.current) === null || _hotTableRef$current9 === void 0 ? void 0 : _hotTableRef$current9.hotInstance) {
      handleoutsideClickDeselects && handleoutsideClickDeselects(event);
    }
  };

  (0, _react.useEffect)(function () {
    var _hotTableRef$current10;

    if (hotTableRef === null || hotTableRef === void 0 ? void 0 : (_hotTableRef$current10 = hotTableRef.current) === null || _hotTableRef$current10 === void 0 ? void 0 : _hotTableRef$current10.hotInstance) {
      var _hotTableRef$current11;

      var hotTableObj = hotTableRef === null || hotTableRef === void 0 ? void 0 : (_hotTableRef$current11 = hotTableRef.current) === null || _hotTableRef$current11 === void 0 ? void 0 : _hotTableRef$current11.hotInstance;
      hotTableObj.loadData(hotTableData);
    }
  }, [hotTableData]);
  (0, _react.useEffect)(function () {
    var interVal = setInterval(function () {
      if (navigator.clipboard) {
        navigator.clipboard.readText().then(function (clipboardData) {
          if (clipboardData) setCache(clipboardData);
        }).catch(function (e) {});
      }
    }, 500);
    return function () {
      return clearInterval(interVal);
    };
  }, [cache]);
  return /*#__PURE__*/_react.default.createElement(_styles.SpreadSheetContainer, null, /*#__PURE__*/_react.default.createElement(_react2.HotTable, {
    settings: settings,
    afterChange: function afterChange(changes, accionHanson) {
      return handleAfterChange(changes, accionHanson);
    },
    ref: hotTableRef,
    beforeRemoveRow: function beforeRemoveRow(index, amount, physicalRows) {
      return handleBeforeRemoveRow(index, amount, physicalRows);
    },
    afterSelectionEnd: function afterSelectionEnd(row, col, row1, col1) {
      return _afterSelectionEnd(row, col, row1, col1);
    },
    outsideClickDeselects: function outsideClickDeselects(event) {
      return _outsideClickDeselects(event);
    }
  }, headerItems && headerItems.length > 0 && headerItems.map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_react2.HotColumn, {
      key: i,
      title: item.title,
      readOnly: item.readOnly,
      data: item.code,
      type: item.type
    });
  })));
};

exports.SpreadSheetEditor = SpreadSheetEditor;