"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

/**
 * 用于两列的 flex 布局
 *
 * @param {object} leftProps
 * @param {object} rightProps
 */
var LRLayout = function LRLayout(props) {
  var _props$span = props.span,
      span = _props$span === void 0 ? [6, 6] : _props$span,
      children = props.children,
      className = props.className,
      style = props.style,
      _props$leftProps = props.leftProps,
      leftProps = _props$leftProps === void 0 ? {} : _props$leftProps,
      _props$rightProps = props.rightProps,
      rightProps = _props$rightProps === void 0 ? {} : _props$rightProps,
      leftStyle = props.leftStyle,
      rightStyle = props.rightStyle,
      restProps = (0, _objectWithoutProperties2.default)(props, ["span", "children", "className", "style", "leftProps", "rightProps", "leftStyle", "rightStyle"]);

  var _ref = (0, _toConsumableArray2.default)(_react.default.Children.toArray(children)),
      left = _ref[0],
      right = _ref[1];

  return _react.default.createElement(_Grid.default, (0, _extends2.default)({
    container: true,
    type: "flex",
    className: className,
    style: style
  }, restProps), _react.default.createElement(_Grid.default, (0, _extends2.default)({
    item: true,
    xs: span[0],
    style: leftStyle
  }, leftProps), left), _react.default.createElement(_Grid.default, (0, _extends2.default)({
    item: true,
    xs: span[1],
    style: rightStyle
  }, rightProps), right));
};

var _default = LRLayout;
exports.default = _default;