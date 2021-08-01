import React, { useState, useEffect } from 'react';
import {
  Table,
  Checkbox,
  Row,
  Col,
  Select,
  Button,
} from 'antd';
import resources from '../components/Resources/index'
import dayjs from 'dayjs'

import './index.css'

const { Option } = Select


function Content() {

  const [tableSetting, setTableSetting] = useState({})
  const [month, setMonth] = useState(dayjs().month())
  const [translate, setTranslate] = useState('CCB')

  // translate = 'ccb'
  // checkedDate = ['1/1']

  // useEffect(() => {
  // })

  const filterResources = (resources) => {
    const arr = []
    resources.forEach((row) => {
      const rowMonth = row.date.split('/')[0]
      const fillMonth = String(month).length === 1 ? `0${month}` : month
      if (rowMonth === fillMonth) {
        arr.push(row)
      }
    })
    return arr
  }

  return (
    <div>
      <div style={{ padding: '0 24px 24px 24px' }}>
        <Row gutter={[8, 8]}>
          <Col span={8}>
            月份選擇:
            {' '}
            <Select defaultValue={month} style={{ width: 120 }} onChange={(val) => setMonth(val)}>
              <Option value='1'>1月</Option>
              <Option value='2'>2月</Option>
              <Option value='3'>3月</Option>
              <Option value='4'>4月</Option>
              <Option value='5'>5月</Option>
              <Option value='6'>6月</Option>
              <Option value='7'>7月</Option>
              <Option value='8'>8月</Option>
              <Option value='9'>9月</Option>
              <Option value='10'>10月</Option>
              <Option value='11'>11月</Option>
              <Option value='12'>12月</Option>
            </Select>
          </Col>
          <Col span={8}>
            譯本選擇:
            {' '}
            <Select defaultValue={translate} style={{ width: 120 }} onChange={(val) => setTranslate(val)}>
              <Option value='CCB'>聖經當代譯本修訂版</Option>
            </Select>
          </Col>
          <Col span={8}>
            <Button type="primary" danger>
              清除進度
            </Button>
          </Col>
        </Row>
      </div>
      <Table
        dataSource={filterResources(resources)}
        pagination={false}
      >
        <Table.Column
          title="日期"
          dataIndex="date"
          key="date"
        />
        <Table.Column
          title="章節閱讀-1"
          dataIndex="sectionA"
          key="sectionA"
          render={(text, record) => {
            return (
              <a href={`${record.sectionUrlA}.${translate}`}>
                {text}
              </a>
            )
          }}
        />
        <Table.Column
          title="章節閱讀-2"
          dataIndex="sectionB"
          key="sectionB"
          render={(text, record) => {
            return (
              <a href={`${record.sectionUrlB}.${translate}`}>
                {text}
              </a>
            )
          }}
        />
        <Table.Column
          title="章節閱讀-3"
          dataIndex="sectionC"
          key="sectionC"
          render={(text, record) => {
            return (
              <a href={`${record.sectionUrlC}.${translate}`}>
                {text}
              </a>
            )
          }}
        />
        <Table.Column
          title="章節閱讀-4"
          dataIndex="sectionD"
          key="sectionD"
          render={(text, record) => {
            return (
              <a href={`${record.sectionUrlD}.${translate}`}>
                {text}
              </a>
            )
          }}
        />
        <Table.Column
          title="已讀"
          dataIndex="checkBox"
          key="checkBox"
          render={(text, record) => {
            return (
              <Checkbox checked={text} />
            )
          }}
        />
      </Table>
    </div>
  )
}

export default Content;
