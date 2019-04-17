import React from 'react';
import { useTheme } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".Zele-Layout-flex{display:flex}";
styleInject(css);

var Flex = function Flex(props) {
  var _props$align = props.align,
      align = _props$align === void 0 ? 'center' : _props$align,
      _props$justify = props.justify,
      justify = _props$justify === void 0 ? 'space-between' : _props$justify,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      children = props.children;

  var defaultStyle = _objectSpread({}, style, {
    alignItems: align,
    justifyContent: justify
  });

  var defaultClassName = "Zele-Layout-flex ".concat(className);
  return React.createElement("div", {
    style: defaultStyle,
    className: defaultClassName
  }, children);
};

var FlexItem = function FlexItem(_ref) {
  var children = _ref.children,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$flex = _ref.flex,
      flex = _ref$flex === void 0 ? '0 1 auto' : _ref$flex;

  var defaultStyle = _objectSpread({}, style, {
    flex: flex
  });

  var defaultClassName = className;
  return React.createElement("div", {
    style: defaultStyle,
    className: defaultClassName
  }, children);
};

Flex.FlexItem = FlexItem;

function GridLayout(props) {
  var theme = useTheme();

  var col = props.col,
      children = props.children,
      restProps = _objectWithoutProperties(props, ["col", "children"]);

  var itemProps = {};

  if (col !== undefined) {
    if (typeof col === 'number' && col > 0 && col < 7 && col !== 5) {
      itemProps.xs = 12 / col;
    }
  }

  return React.createElement(Grid, _extends({
    container: true,
    style: theme.spacing
  }, restProps), React.Children.map(children, function (child) {
    return React.createElement(Grid, _extends({
      style: theme.itemSpacing,
      item: true
    }, itemProps), child);
  }));
}

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
      restProps = _objectWithoutProperties(props, ["span", "children", "className", "style", "leftProps", "rightProps", "leftStyle", "rightStyle"]);

  var _ref = _toConsumableArray(React.Children.toArray(children)),
      left = _ref[0],
      right = _ref[1];

  return React.createElement(Grid, _extends({
    container: true,
    type: "flex",
    className: className,
    style: style
  }, restProps), React.createElement(Grid, _extends({
    item: true,
    xs: span[0],
    style: leftStyle
  }, leftProps), left), React.createElement(Grid, _extends({
    item: true,
    xs: span[1],
    style: rightStyle
  }, rightProps), right));
};

export { Flex, GridLayout as Grid, LRLayout };
