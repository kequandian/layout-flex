"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

function GridLayout(props) {
  var theme = (0, _styles.useTheme)();
  var col = props.col,
      children = props.children,
      restProps = (0, _objectWithoutProperties2.default)(props, ["col", "children"]);
  var itemProps = {};

  if (col !== undefined) {
    if (typeof col === 'number' && col > 0 && col < 7 && col !== 5) {
      itemProps.xs = 12 / col;
    }
  }

  return _react.default.createElement(_Grid.default, (0, _extends2.default)({
    container: true,
    style: theme.spacing
  }, restProps), _react.default.Children.map(children, function (child) {
    return _react.default.createElement(_Grid.default, (0, _extends2.default)({
      style: theme.itemSpacing,
      item: true
    }, itemProps), child);
  }));
}

var _default = GridLayout;
exports.default = _default;