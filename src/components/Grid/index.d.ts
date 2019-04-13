import * as React from 'react';

export interface GridProps {
  colNumber?: Number;
  align?: 'top' | 'middle' | 'bottom';
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
  rowProps?: Object;
  colProps?: Object;
}

declare class Grid extends React.Component<GridProps, any> {
}

export default Grid;