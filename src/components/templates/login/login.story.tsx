/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';

import Login from './login';

storiesOf('templates/Login', module).add('default', () => (
    <Login />
));
