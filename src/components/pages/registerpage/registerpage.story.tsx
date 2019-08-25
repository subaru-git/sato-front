/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';

import RegisterPage from './registerpage';

storiesOf('pages/RegisterPage', module).add('default', () => (
    <RegisterPage />
));
