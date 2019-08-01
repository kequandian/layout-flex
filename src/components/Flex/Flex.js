import React from 'react';
import './index.css';

const autoStyle = {
  display: 'flex',
  flex: 1,
};
const Flex = (props) => {
  const {
    auto,
    align = 'center', justify = 'space-between',
    style = {}, className = '',
    children,
  } = props;
  const defaultStyle = {
    ...style,
    alignItems: align,
    justifyContent: justify,
  }
  const defaultClassName = `Zele-Layout-flex ${className}`;

  if (auto) {
    return <div style={autoStyle} className={defaultClassName}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          auto,
        })
      })}
    </div>
  }

  return <div style={defaultStyle} className={defaultClassName}>
    {children}
  </div>
}
export default Flex;