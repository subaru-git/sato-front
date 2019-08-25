/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';

import ListBoard from './listboard';

storiesOf('molecules/ListBoard', module).add('no data', () => (
    <ListBoard data={[]} />
));

storiesOf('molecules/ListBoard', module).add('default', () => (
    <ListBoard data={[{ name: 'sato', point: 100, last_update: '2018/08/20' }, { name: 'sato', point: 100, last_update: '2018/08/20' }, { name: 'sato', point: 100, last_update: '2018/08/20' }]} />
));
