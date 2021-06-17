import React, { useEffect, useState } from 'react'
import { Button, Typography, Card, Layout } from 'antd'

const LightTheme = React.lazy(() => import('./Light'))
const DarkTheme = React.lazy(() => import('./Dark'))

const TYPE_OF_THEME = {
  DEFAULT: 'light',
  LIGHT_MODE: 'light',
  DARK_MODE: 'dark',
}

function App() {
  const [isLight, setIsLight] = useState(true)
  const CHOSEN_THEME = localStorage.getItem('TYPE_OF_THEME') || TYPE_OF_THEME.DEFAULT

  return (
    <div>
      <React.Suspense fallback={<></>}>
        {CHOSEN_THEME === TYPE_OF_THEME.LIGHT_MODE && <LightTheme />}
        {CHOSEN_THEME === TYPE_OF_THEME.DARK_MODE && <DarkTheme />}
      </React.Suspense>
      <Layout>
        <Layout.Header style={{ color: 'hotpink' }}>Web App</Layout.Header>
        <Layout>
          <Layout.Sider theme={CHOSEN_THEME}>Menu</Layout.Sider>
          <Layout.Content>
            <Button
              type="primary"
              onClick={() => {
                localStorage.setItem('TYPE_OF_THEME', TYPE_OF_THEME.LIGHT_MODE)
                window.location.reload()
              }}
            >
              Light
            </Button>
            <Button
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
            <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Layout.Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default App
