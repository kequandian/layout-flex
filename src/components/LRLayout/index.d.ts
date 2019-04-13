import * as React from 'react';

export interface LRLayoutProps {
  span?: Array<Number>;
  align?: 'top' | 'middle' | 'bottom';
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
  style?: React.CSSProperties;
  className?: String;
  leftProps?: Object;
  rightProps?: Object;
  leftStyle?: React.CSSProperties;
  rightStyle?: React.CSSProperties;
}

declare class LRLayout extends React.Component<LRLayoutProps, any> {
}

export default LRLayout;