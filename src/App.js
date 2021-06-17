import React from 'react'
import { Button, Typography, Card, Layout, Alert, Menu, DatePicker, Space } from 'antd'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import moment from 'moment'

// import LightTheme from './Light'

const LightTheme = React.lazy(() => import('./Light'))
const DarkTheme = React.lazy(() => import('./Dark'))

const TYPE_OF_THEME = {
  DEFAULT: 'light',
  LIGHT_MODE: 'light',
  DARK_MODE: 'dark',
}

const { SubMenu } = Menu
const { RangePicker } = DatePicker

function App() {
  const CHOSEN_THEME = localStorage.getItem('TYPE_OF_THEME') || TYPE_OF_THEME.DEFAULT

  return (
    <div>
      <React.Suspense fallback={<></>}>
        {CHOSEN_THEME === TYPE_OF_THEME.LIGHT_MODE && <LightTheme />}
        {CHOSEN_THEME === TYPE_OF_THEME.DARK_MODE && <DarkTheme />}

        {/* <LightTheme /> */}

        <Layout>
          <Layout.Header
            style={{ color: 'hotpink', fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}
          >
            @Pob
          </Layout.Header>
          <Layout>
            <Layout.Sider theme={CHOSEN_THEME}>
              <Menu
                onClick={() => {}}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
              >
                <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                  <Menu.ItemGroup key="g1" title="Item 1">
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                  </Menu.ItemGroup>
                  <Menu.ItemGroup key="g2" title="Item 2">
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                  </Menu.ItemGroup>
                </SubMenu>
                <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                  <Menu.Item key="5">Option 5</Menu.Item>
                  <Menu.Item key="6">Option 6</Menu.Item>
                  <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                  </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
                  <Menu.Item key="9">Option 9</Menu.Item>
                  <Menu.Item key="10">Option 10</Menu.Item>
                  <Menu.Item key="11">Option 11</Menu.Item>
                  <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
              </Menu>
            </Layout.Sider>
            <Layout.Content style={{ padding: '1rem' }}>
              <Button
                style={{ margin: '1rem' }}
                type="primary"
                onClick={() => {
                  localStorage.setItem('TYPE_OF_THEME', TYPE_OF_THEME.LIGHT_MODE)
                  window.location.reload()
                }}
              >
                Light
              </Button>
              <Button
                style={{ margin: '1rem' }}
                type="primary"
                onClick={() => {
                  localStorage.setItem('TYPE_OF_THEME', TYPE_OF_THEME.DARK_MODE)
                  window.location.reload()
                }}
              >
                Dark
              </Button>
              <Typography.Title level={1}>Some Heading Text</Typography.Title>
              <Typography.Paragraph>lorum ipsum</Typography.Paragraph>
              <Space direction="vertical">
                <Card title="Default size card" extra={<a href="/">More</a>} style={{ width: 300 }}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
                <Alert message="Success Text" type="success" />
                <Alert message="Warning Text" type="warning" />
                <Alert message="Error Text" type="error" />
                <RangePicker
                  ranges={{
                    Today: [moment(), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                  }}
                  onChange={() => {}}
                />
              </Space>
            </Layout.Content>
          </Layout>
        </Layout>
      </React.Suspense>
    </div>
  )
}

export default App
