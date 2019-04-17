import React from 'react';
import Grid from '@material-ui/core/Grid';

/**
 * 用于两列的 flex 布局
 *
 * @param {object} leftProps
 * @param {object} rightProps
 */
const LRLayout = (props) => {
  const {
    span = [6, 6], children,
    className, style,
    leftProps = {}, rightProps = {}, leftStyle, rightStyle,
    ...restProps
  } = props;
  const [left, right] = [...React.Children.toArray(children)];

  return (
    <Grid container
      type="flex"
      className={className} style={style}
      {...restProps}
    >
      <Grid item
        xs={span[0]} style={leftStyle} {...leftProps}>
        {left}
      </Grid>
      <Grid item
        xs={span[1]} style={rightStyle} {...rightProps}>
        {right}
      </Grid>
    </Grid>
  );
}
export default LRLayout;