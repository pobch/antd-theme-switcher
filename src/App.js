import React, { useEffect, useState } from 'react'
import { Button, Typography, Card, Layout } from 'antd'
// import './App.less'
import './App.light.less'
import './App.dark.less'

function App() {
  const [isLight, setIsLight] = useState(true)

  useEffect(() => {
    if (!isLight) {
      document.querySelector('body').style.backgroundColor = '#000'
    } else {
      document.querySelector('body').style.backgroundColor = 'white'
    }
  }, [isLight])

  return (
    <div className={isLight ? 'pob-light' : 'pob-dark'}>
      <Layout>
        <Layout.Header>Web App</Layout.Header>
        <Layout>
          <Layout.Sider>Menu</Layout.Sider>
          <Layout.Content>
            <Button type="primary" onClick={() => setIsLight(!isLight)}>
              Switch Theme
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
