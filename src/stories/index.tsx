import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from 'antd';
import "antd/lib/style/index.less"
import "antd/lib/style/components.less"

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));   