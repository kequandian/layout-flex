import React from 'react';
import { Row, Col } from 'antd';

/**
 * 用于两列的 flex 布局
 *
 * @param {object} leftProps
 * @param {object} rightProps
 */
const LRLayout = (props) => {
  const {
    span = [12, 12], children,
    align = 'middle', justify = 'space-between', className, style,
    leftProps = {}, rightProps = {}, leftStyle, rightStyle,
  } = props;
  const [left, right] = [...React.Children.toArray(children)];

  return (
    <Row type="flex"
      align={align}
      justify={justify}
      className={className} style={style}
    >
      <Col span={span[0]} style={leftStyle} {...leftProps}>
        {left}
      </Col>
      <Col span={span[1]} style={rightStyle} {...rightProps}>
        {right}
      </Col>
    </Row>
  );
}
export default LRLayout;