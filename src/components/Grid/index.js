import React from 'react';
import { useTheme } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

function GridLayout(props) {
  const theme = useTheme();
  const {
    col,
    children,
    ...restProps
  } = props;
  const itemProps = {};

  if (col !== undefined) {
    if (typeof col === 'number' && col > 0 && col < 7 && col !== 5) {
      itemProps.xs = 12 / col;
    }
  }

  return <Grid container style={theme.spacing} {...restProps}>
    {React.Children.map(children, (child) => {
      return <Grid style={theme.itemSpacing} item {...itemProps}>
        {child}
      </Grid>
    })}
  </Grid>
}

export default GridLayout;