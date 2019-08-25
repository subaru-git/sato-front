/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';

import LoginPage from './loginpage';

storiesOf('pages/LoginPage', module).add('default', () => (
    <LoginPage />
));
