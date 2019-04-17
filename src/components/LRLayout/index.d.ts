import * as React from 'react';

export interface LRLayoutProps {
  span?: Array<Number>;
  alignContent?: 'stretch' | 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  alignItems?: 'stretch' | 'flex-start' | 'center' | 'flex-end' | 'baseline';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'space-between' | 'space-around' | 'space-evenly';
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