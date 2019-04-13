import React from 'react';
import { Row, Col } from 'antd';

const Grid = (props) => {
  const {
    justify = 'space-between', align = 'middle',
    colNumber = 4,
    children,
    rowProps = {},
    colProps = {},
  } = props;

  return <Row type="flex" justify={justify} align={align} {...rowProps}>
    {React.Children.map(children, child => {
      return <Col span={24 / colNumber} {...colProps}>
        {child}
      </Col>
    })}
  </Row>
}
export default Grid;