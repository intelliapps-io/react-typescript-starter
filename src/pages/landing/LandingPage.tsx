import React from "react";
import { PageLayout } from "../../components/pageLayout/PageLayout";
import Title from "antd/lib/typography/Title";
import { Typography } from "antd";

interface IProps {

}

export const LandingPage: React.FC<IProps> = props => {
  return(
    <PageLayout>
      <Title>Welcome</Title>
      <Typography>This is an example page</Typography>
    </PageLayout>
  );
}