/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';

import SendPointForm from './sendpointform';

storiesOf('molecules/SendPointForm', module).add('default', () => (
  <SendPointForm />
));
