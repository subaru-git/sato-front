/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';

import Register from './register';

storiesOf('templates/Register', module).add('default', () => (
    <Register />
));
