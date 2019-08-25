/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';

import UserPoints from './userpoints';

storiesOf('templates/UserPoints', module).add('no data', () => (
    <UserPoints />
));
