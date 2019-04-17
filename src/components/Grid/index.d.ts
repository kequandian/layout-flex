import * as React from 'react';

export interface GridProps {
  col?: 1 | 2 | 3 | 4 | 6;
  alignContent?: 'stretch' | 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  alignItems?: 'stretch' | 'flex-start' | 'center' | 'flex-end' | 'baseline';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'space-between' | 'space-around' | 'space-evenly';
  rowProps?: Object;
  colProps?: Object;
}

declare class Grid extends React.Component<GridProps, any> {
}

export default Grid;