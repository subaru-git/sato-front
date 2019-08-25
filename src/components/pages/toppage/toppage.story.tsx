/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';

import TopPage from './toppage';

storiesOf('pages/TopPage', module).add('default', () => (
    <TopPage />
));
