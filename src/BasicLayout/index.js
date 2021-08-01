import React, { Component } from 'react'
import 'antd/dist/antd.css'
import {
  Layout,
  Menu,
  Breadcrumb,
} from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BookOutlined,
  SettingOutlined,
  HomeOutlined,
} from '@ant-design/icons'

import Main from '../Main/index'
import Setting from '../Setting/index'

import './index.css';

class BasicLayout extends Component {

  state = {
    collapsed: false,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {

    return (
      <Layout>
        <Layout.Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['home']}>
            <Menu.Item key="home" icon={<HomeOutlined />}>
              首頁
            </Menu.Item>
            {/* <Menu.SubMenu key="translation" icon={<BookOutlined />} title="譯本">
              <Menu.Item key="CCB">
                當代譯本修訂
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="setting" icon={<SettingOutlined />}>
              設定
            </Menu.Item> */}
          </Menu>
        </Layout.Sider>
        <Layout className="site-layout">
          <Layout.Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Layout.Header>
          {/* <Layout.Content
            className="site-layout-background"
            style={{
              // margin: '24px 16px',
              padding: 24,
              minHeight: 800,
              // height: '100%',
            }}
          >
            <Main />
          </Layout.Content> */}
          <Layout.Content
            style={{ margin: '0 16px' }}
          >
            <Breadcrumb style={{ margin: '16px 0' }}>
              {/* <Breadcrumb.Item>麥琴年度讀經計畫</Breadcrumb.Item>
              <Breadcrumb.Item>譯本</Breadcrumb.Item>
              <Breadcrumb.Item>聖經當代譯本修訂版(CCB)</Breadcrumb.Item>
              <Breadcrumb.Item>首頁</Breadcrumb.Item> */}
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 800 }}>
              <Main />
            </div>
          </Layout.Content>
        </Layout>
      </Layout>
    )
  }
}

export default BasicLayout;
