/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';

import Menubar from './menubar';

storiesOf('organisms/Munubar', module).add('no data', () => (
    <Menubar items={[]} />
));

storiesOf('organisms/Munubar', module).add('default', () => (
    <Menubar items={[{ name: 'home', to: 'home' }, { name: 'messages', to: 'messages' }, { name: 'friends', to: 'friends' }]} />
));
