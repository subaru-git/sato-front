/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';

import RegisterForm from './registerform';

storiesOf('molecules/RegisterForm', module).add('default', () => (
    <RegisterForm />
));
