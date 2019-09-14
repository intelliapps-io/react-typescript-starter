import React from "react"

import "./App.less"

import { Layout, Button, Menu } from "antd"
import { LandingPage } from "./pages/landing/LandingPage";

interface IProps {

}

export const App: React.FC<IProps> = props => {
  return (
    <Layout>
      <Layout.Header>
        <div className="logo">
          <span>My App</span>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Layout.Header>

      <LandingPage />

      <Layout.Footer>
        My App © {new Date().getFullYear()}
      </Layout.Footer>
    </Layout>
  );
}