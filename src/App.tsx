import React from "react"

import "./App.less"

import { Layout, Button } from "antd"

interface IProps {

}

export const App: React.FC<IProps> = props => {
  return(
    <Layout>
      <Layout.Header>
        Header
      </Layout.Header>
      <Layout.Content>
        Content
        <Button >Button</Button>
      </Layout.Content>
      <Layout.Footer>
        Footer
      </Layout.Footer>
    </Layout>
  );
}