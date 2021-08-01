import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {
  Row,
  Col,
  Select,
  Button,
} from 'antd'
import './index.css';

const { Option } = Select;

class ExportClass extends Component {

  render() {
    return (
      <div>
        <Row gutter={[8, 8]}>
          <Col span={8}>
            月份選擇:
            {' '}
            <Select defaultValue='jul' style={{ width: 120 }}>
              <Option value='jan'>1月</Option>
              <Option value='feb'>2月</Option>
              <Option value='mar'>3月</Option>
              <Option value='apr'>4月</Option>
              <Option value='may'>5月</Option>
              <Option value='jun'>6月</Option>
              <Option value='jul'>7月</Option>
              <Option value='aug'>8月</Option>
              <Option value='sep'>9月</Option>
              <Option value='oct'>10月</Option>
              <Option value='nov'>11月</Option>
              <Option value='dec'>12月</Option>
            </Select>
          </Col>
          <Col span={8}>
            譯本選擇:
            {' '}
            <Select defaultValue='ccb' style={{ width: 120 }}>
              <Option value='ccb'>聖經當代譯本修訂版</Option>
            </Select>
          </Col>
          <Col span={8}>
            <Button type="primary" danger>
              清除進度
            </Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ExportClass;
