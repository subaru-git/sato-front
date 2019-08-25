/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';

import LoginForm from './loginform';

storiesOf('molecules/LoginForm', module).add('default', () => (
    <LoginForm />
));
