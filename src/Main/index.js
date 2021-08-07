import React, { useState, useEffect, Fragment } from 'react';
import {
  Table,
  Checkbox,
  Row,
  Col,
  Select,
  Button,
  Popconfirm,
  Descriptions,
} from 'antd';
import resources from '../components/Resources/index'
import dayjs from 'dayjs'

import './index.css'

const { Option } = Select


function Content() {

  const [checkDate, setCheckDate] = useState({})
  const [month, setMonth] = useState(dayjs().format('M'))
  const [translate, setTranslate] = useState('1392#CCB')

  // useEffect(() => {
  // })

  const screenWidth = window.innerWidth
  const isMobileScreen = screenWidth <= 576

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

  const onCheckbox = (dateStr, checked) => {
    setCheckDate({
      ...checkDate,
      [dateStr]: checked,
    })
  }

  const MonthSelect = (
    <Select defaultValue={month} style={{ width: '100%' }} onChange={(val) => setMonth(val)}>
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
  )

  const TranslateSelect = (
    <Select defaultValue={translate} style={{ width: '100%' }} onChange={(val) => setTranslate(val)}>
      {/* <Option value='CCB'>CCB 聖經當代譯本修訂版</Option> */}
      <Option value='1392#CCB'>CCB 聖經當代譯本修訂版</Option>
      <Option value='40#CNV'>CNV 新譯本</Option>
      <Option value='139#RCUV'>RCUV 和合本修訂版</Option>
      <Option value='414#CUNP'>CUNP-上帝 新標點和合本, 上帝版</Option>
      <Option value='46#CUNP'>CUNP-神 新標點和合本, 神版</Option>
    </Select>
  )

  const sectionURL = (sectionCode, text) => {
    const [translateCode, translateVersion] = translate.split('#')
    const url = `https://my.bible.com/zh-TW/bible/${translateCode}/${sectionCode}.${translateVersion}`
    return (
      <a href={url}>
        {text}
      </a>
    )
  }

  return (
    <div>
      <div style={{ padding: '0 24px 24px 24px' }}>
        <Row gutter={[24, 16]}>
          <Col xs={24} sm={24} md={12} lg={8}>
            {/* <Descriptions>
              <Descriptions.Item label="月份選擇">{MonthSelect}</Descriptions.Item>
            </Descriptions> */}
            <div style={{ display: 'flex' }}>
              <div style={{ width: 100, lineHeight: '32px' }}>
                <span>月份選擇:</span>
              </div>
              <div style={{ width: '100%' }}>
                {MonthSelect}
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            {/* <Descriptions style={{ lineHeight: '32px' }}>
              <Descriptions.Item label="譯本選擇">{TranslateSelect}</Descriptions.Item>
            </Descriptions> */}
            <div style={{ display: 'flex' }}>
              <div style={{ width: 100, lineHeight: '32px' }}>
                <span>譯本選擇:</span>
              </div>
              <div style={{ width: '100%' }}>
                {TranslateSelect}
              </div>
            </div>
          </Col>
          {/* <Col xs={24} sm={24} md={24} lg={8}>
            <div style={{ textAlign: 'center' }}>
              <Popconfirm
                title="確定要清除?"
              >
                <Button type="primary" danger>
                  清除進度
                </Button>
              </Popconfirm>
            </div>
          </Col> */}
        </Row>
      </div>
      <Table
        dataSource={filterResources(resources)}
        pagination={false}
        expandable={{
          rowExpandable: () => isMobileScreen,
          expandedRowRender: (record) => {
            return (
              <Descriptions>
                <Descriptions.Item label="章節閱讀-1">{sectionURL(record.sectionCodeA, record.sectionA)}</Descriptions.Item>
                <Descriptions.Item label="章節閱讀-2">{sectionURL(record.sectionCodeB, record.sectionB)}</Descriptions.Item>
                <Descriptions.Item label="章節閱讀-3">{sectionURL(record.sectionCodeC, record.sectionC)}</Descriptions.Item>
                <Descriptions.Item label="章節閱讀-4">{sectionURL(record.sectionCodeD, record.sectionD)}</Descriptions.Item>
              </Descriptions>
            )
          },
        }}
      >
        <Table.Column
          title="日期"
          dataIndex="date"
          key="date"
          render={(text, record) => {
            const rowDateStr = text
            const currentDateStr = dayjs().format('MM/DD')
            if (currentDateStr === rowDateStr) {
              return (
                `⭐${rowDateStr}`
              )
            } else {
              return (
                rowDateStr
              )
            }
          }}
        />
        {isMobileScreen ? (
          undefined
        ) : (
          <div>
            <Table.Column
              title="章節閱讀-1"
              dataIndex="sectionA"
              key="sectionA"
              render={(text, record) => sectionURL(record.sectionCodeA, text)}
            />
            <Table.Column
              title="章節閱讀-2"
              dataIndex="sectionB"
              key="sectionB"
              render={(text, record) => sectionURL(record.sectionCodeB, text)}
            />
            <Table.Column
              title="章節閱讀-3"
              dataIndex="sectionC"
              key="sectionC"
              render={(text, record) => sectionURL(record.sectionCodeC, text)}
            />
            <Table.Column
              title="章節閱讀-4"
              dataIndex="sectionD"
              key="sectionD"
              render={(text, record) => sectionURL(record.sectionCodeD, text)}
            />
          </div>
        )}
        {/* <Table.Column
          title="已讀"
          dataIndex="checkBox"
          key="checkBox"
          render={(text, record) => {
            const rowDateStr = record.date
            const checked = checkDate[rowDateStr]
            return (
              <Checkbox
                checked={checked}
                onChange={(e) => onCheckbox(rowDateStr, e.target.checked)}
              />
            )
          }}
        /> */}
      </Table>
    </div>
  )
}

export default Content;
