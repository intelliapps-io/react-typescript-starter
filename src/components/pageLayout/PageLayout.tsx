import "./PageLayout.less"
import React from "react"
import { Layout } from "antd"
import { BasicProps } from "antd/lib/layout/layout"

interface PageLayoutProps extends BasicProps {
  
}

export const PageLayout: React.FC<PageLayoutProps> = props => {
  return (
    <Layout.Content className="page-layout">
      {props.children}
    </Layout.Content>
  )
}